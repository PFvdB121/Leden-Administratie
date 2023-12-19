<template>
    <zoek-container :zoeken="zoeken" :toevoegen="contributieToevoegen" toevoegenTitel="Contributie toevoegen">
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="email" class="d-inline-block" label="email" type="email" label-placement="floating"></ion-input>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="minBedrag" class="d-inline-block" label="minimum bedrag" type="number" step=".01" :min="0" :max="maxBedrag" label-placement="floating"></ion-input>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="maxBedrag" class="d-inline-block" label="maximum bedrag" type="number" step=".01" :min="(minBedrag ? minBedrag : 0)" label-placement="floating"></ion-input>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="minLeeftijd" class="d-inline-block" label="minimum leeftijd" type="number" :min="0" :max="maxLeeftijd" label-placement="floating"></ion-input>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="maxLeeftijd" class="d-inline-block" label="maximum leeftijd" type="number" :min="(minLeeftijd ? minLeeftijd : 0)" label-placement="floating"></ion-input>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="email" class="d-inline-block" label="boekjaar" type="number" :min="0" label-placement="floating"></ion-input>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block w-25">
            <ion-select v-model="soortLid" label="soort lid" label-placement="floating">
                <ion-select-option v-for="s in soortenLeden" :value="s.omschrijving">{{ s.omschrijving }}</ion-select-option>
            </ion-select>
        </ion-item>
    </zoek-container>
    <grid-container :items="items" :colomnBreedte="colomnBreedte" :gridCols="grid" v-slot="slotProps">
        <ion-col :size="grid.aanpassen" class="d-flex justify-content-center"><ion-button @click="ContributieUpdatenModal(slotProps.item.id)">aanpassen</ion-button></ion-col>
        <ion-col :size="grid.deleten" class="d-flex justify-content-center"><ion-button @click="deleteAlert(slotProps.item.id)" color="danger">deleten</ion-button></ion-col>
    </grid-container>
    <pagination :get="this.get" :laatstePagina="this.laatstePagina"/>
</template>

<script>
    import { 
        IonCol,
        IonButton,
        IonInput,
        IonItem,
        IonSelect,
        IonSelectOption,
        modalController,
        alertController,
     } from "@ionic/vue";
    import axios from "axios";

    import ContributiesModal from "../components/modals/ContributiesModal.vue";

    export default({
        props: {
            get: Object,
        },

        methods: {
            contributies: function(get){
                axios.post("contributies", get)
                .then((response) => {
                    this.laatstePagina = response.data.meta.last_page;
                    this.items = response.data.data;
                })
                .catch((error) => {
                    console.error(error);
                })
            },
            zoeken: function(){
                this.redirectWithParams(location.protocol + "//" + location.host + location.pathname, {
                    "email": this.email,
                    "soortLid": this.soortLid,
                    "boekjaar": this.boekjaar,
                    "minBedrag": this.minBedrag,
                    "maxBedrag": this.maxBedrag,
                    "minLeeftijd": this.minLeeftijd,
                    "maxLeeftijd": this.maxLeeftijd,
                });
            },

            soortenLedenOphalen: function(){
                axios.post("soorten_leden/get")
                .then((response) => {
                    this.soortenLeden = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
            },

            contributieToevoegen: function(bedrag, boekjaar, email, soortLid){
                axios.post("conntributies/store", {
                    "bedrag": bedrag,
                    "boekjaar": boekjaar,
                    "email": email,
                    "soortLid": soortLid,
                })
                .then(() => {
                    this.contributies(this.get);
                    this.Toast("Contributie succesvol toegevoegd", "success", 3000, "top");
                })
                .catch((error) => {
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                })
            },

            async contributieToevoegenModal(){
                const modal = await modalController.create({
                    component: ContributiesModal,
                    componentProps: {
                        titel: "Contributies Toevoegen",
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role == "confirm"){
                    this.contributieToevoegen(
                        data.bedrag, 
                        data.boekjaar,
                        data.email,
                        data.soortLid,
                    );
                }
            },

            deleteContributie: function(id){
                axios.post("contributies/delete", {
                    "id": id,
                })
                .then(() => {
                    this.contributies(this.get);
                    this.Toast("Contributie succesvol gedelete", "success", 3000, "top");
                })
                .catch((error) => {
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                });
            },
            
            async deleteAlert(id){
                var contributie = this.items.filter((item) => {
                    return item.id == id;
                });
                const alert = await alertController.create({
                    header: "Let op!",
                    message: "Weet u zeker dat u de contributie van" + contributie[0].email + " op " + contributie[0].boekjaar + " wilt deleten?",
                    buttons: [
                        {
                            text: "Ja",
                            role: "confirm",
                            handler: () => {
                                this.deleteContributie(id);
                            }
                        },
                        {
                            text: "Nee",
                            role: "cancel"
                        }
                    ]
                });

                await alert.present();
            },

            async ContributieUpdatenModal(id){
                const modal = await modalController.create({
                    component: ContributiesModal,
                    componentProps: {
                        titel: "updaten",
                        id: id,
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role == "confirm"){
                    this.contributieUpdaten(
                        id,
                        data.bedrag, 
                        data.boekjaar,
                        data.email,
                        data.soortLid,
                    );
                }
            },

            contributieUpdaten: function(id, bedrag, boekjaar, email, soortLid){
                axios.post("contributies/update", {
                    "id": id,
                    "bedrag": bedrag,
                    "boekjaar": boekjaar,
                    "email": email,
                    "soortLid": soortLid,
                })
                .then(() => {
                    this.contributies(this.get);
                    this.Toast("Contributie succesvol aangepast", "success", 3000, "top");
                })
                .catch((error) => {
                    console.log(error)
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                });
            },

            async Toast(message, color, duration, position){
                const toast = await this.toastController.create({
                    message: message,
                    color: color,
                    duration: duration,
                    position: position,
                });

                toast.present();
            },
        },

        data(){
            return{
                items: [],
                colomnBreedte: 100,
                laatstePagina: 1,
                email: "",
                soortLid: "",
                minBedrag: "",
                maxBedrag: "",
                minLeeftijd: "",
                maxLeeftijd: "",
                boekjaar: "",
                soortenLeden: [],
                grid: {
                    "bedrag": 1,
                    "email": 3,
                    "leeftijd": 1,
                    "boekjaar": 1,
                    "soort lid": 2,
                    "aanpassen": 2,
                    "deleten": 2,
                }
            }
        },

        beforeMount(){
            this.email = this.get.email;
            this.minBedrag = this.get.minBedrag;
            this.maxBedrag = this.get.maxBedrag;
            this.minLeeftijd = this.get.minLeeftijd;
            this.maxLeeftijd = this.get.maxLeeftijd;
            this.soortLid = this.get.soortLid;
            this.boekjaar = this.get.boekjaar;

            this.soortenLedenOphalen();

            this.contributies(this.get);
        },

        components: {
            IonCol,
            IonButton,
            IonInput,
            IonItem,
            IonSelect,
            IonSelectOption,
        }
    });
</script>