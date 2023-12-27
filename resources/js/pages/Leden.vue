<template>
    <h1 class="d-flex justify-content-center">Leden</h1>
    <zoek-container :zoeken="zoeken" :toevoegen="LedenToevoegenModal" toevoegenTitel="Leden Toevoegen">
        <ion-item class="border mx-1 d-inline-block"><ion-input v-model="naam" class="d-inline-block" label="naam" label-placement="floating"></ion-input></ion-item>
        <ion-item class="border mx-1 d-inline-block"><ion-input v-model="email" class="d-inline-block" label="email" type="email" label-placement="floating"></ion-input></ion-item>
        <ion-item class="border mx-1 d-inline-block"><ion-input type="date" min="1900-01-01" :max="(maxGeboortedatum ? maxGeboortedatum : huidigeDatum)" v-model="minGeboortedatum" class="d-inline-block" label="min geboortedatum" label-placement="floating"></ion-input></ion-item>
        <ion-item class="border mx-1 d-inline-block"><ion-input type="date" :min="(minGeboortedatum ? minGeboortedatum : '1900-01-01')" :max="huidigeDatum" v-model="maxGeboortedatum" class="d-inline-block" label="max geboortedatum" label-placement="floating"></ion-input></ion-item>
        <ion-item class="border mx-1 d-inline-block w-25">
            <ion-select v-model="soortLid" label="soort lid" label-placement="floating">
                <ion-select-option value="Alle">
                    Alle
                </ion-select-option>
                <ion-select-option v-for="s in soortenLeden" :value="s.omschrijving">
                    {{ s.omschrijving }}
                </ion-select-option>
            </ion-select>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block"><ion-input v-model="familie" class="d-inline-block" label="familie" label-placement="floating"></ion-input></ion-item>
        <ion-item class="border mx-1 d-inline-block"><ion-input v-model="adres" class="d-inline-block" label="adres" label-placement="floating"></ion-input></ion-item>
        <ion-item class="border mx-1 d-inline-block"><ion-input v-model="straat" class="d-inline-block" label="straat" label-placement="floating"></ion-input></ion-item>
        <ion-item class="border mx-1 d-inline-block"><ion-input v-model="stad" class="d-inline-block" label="stad" label-placement="floating"></ion-input></ion-item>
        <ion-item class="border mx-1 d-inline-block"><ion-input v-model="land" class="d-inline-block" label="land" label-placement="floating"></ion-input></ion-item>
    </zoek-container>
    <grid-container :items="items" :colomnBreedte="colomnBreedte" :gridCols="grid" v-slot="slotProps">
        <ion-col :size="grid.aanpassen" class="d-flex justify-content-center"><ion-button @click="LidUpdatenModal(slotProps.item.id)">aanpassen</ion-button></ion-col>
        <ion-col :size="grid.deleten" class="d-flex justify-content-center"><ion-button @click="deleteAlert(slotProps.item.id)" color="danger">deleten</ion-button></ion-col>
    </grid-container>
    <pagination :get="this.get" :laatstePagina="this.laatstePagina"/>
</template>

<script>
    import { 
        IonCol,
        IonInput,
        IonItem,
        IonButton,
        IonSelect,
        IonSelectOption,
        alertController,
        modalController,
        toastController,
     } from "@ionic/vue";
    import axios from "axios";

    import LedenModal from "../components/modals/LedenModal.vue";

    export default{
        beforeMount(){
            this.naam = this.get.naam;
            this.email = this.get.email;
            this.minGeboortedatum = this.get.minGeboortedatum;
            this.maxGeboortedatum = this.get.maxGeboortedatum;
            this.soortLid = this.get.soortLid;
            this.familie = this.get.familie;
            this.adres = this.get.adres;
            this.straat = this.get.straat;
            this.stad = this.get.stad;
            this.land = this.get.land;

            this.day = this.date.getDate();
            this.month = this.date.getMonth() + 1;
            this.year = this.date.getFullYear();

            this.soortenLedenOphalen();
            this.huidigeDatum = this.date.toLocaleDateString("en-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });

            this.leden(
                this.get.page,
                this.get.naam, 
                this.get.email,
                this.get.minGeboortedatum,
                this.get.maxGeboortedatum,
                this.get.soortLid,
                this.get.familie, 
                this.get.adres, 
                this.get.straat, 
                this.get.stad, 
                this.get.land
            );
        },
        data(){
            return{
                items: [],
                grid: {
                    "naam": 2,
                    "email": 3,
                    "geboortedatum": 2,
                    "soort lid": 1,
                    "familie": 2,
                    "adres": 2,
                    "aanpassen": 2,
                    "deleten": 2,
                },
                soortenLeden: {},
                colomnBreedte: 100,
                laatstePagina: 1,
                naam: "",
                email: "",
                minGeboortedatum: "",
                maxGeboortedatum: "",
                soortLid: "",
                familie: "",
                adres: "",
                straat: "",
                stad: "",
                land: "",
                huidigeDatum: "",
                lid: {},
                date: new Date,
            }
        },

        methods: {
            zoeken: function(){
                this.redirectWithParams(location.protocol + "//" + location.host + location.pathname, {
                    "naam": this.naam,
                    "email": this.email,
                    "minGeboortedatum": this.minGeboortedatum,
                    "maxGeboortedatum": this.maxGeboortedatum,
                    "soortLid": this.soortLid,
                    "familie": this.familie,
                    "adres": this.adres,
                    "straat": this.straat,
                    "stad": this.stad,
                    "land": this.land,
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

            leden: function(page, naam, email, minGeboortedatum, maxGeboortedatum, soortLid, familie, adres, straat, stad, land){
                axios.post("leden", {
                    "page": page,
                    "naam": naam,
                    "email": email,
                    "minGeboortedatum": minGeboortedatum,
                    "maxGeboortedatum": maxGeboortedatum,
                    "soortLid": soortLid,
                    "familie": familie,
                    "adres": adres,
                    "straat": straat,
                    "stad": stad,
                    "land": land,
                })
                .then((response) => {
                    this.laatstePagina = response.data.meta.last_page;
                    this.items = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            },

            ledenToevoegen: function(naam, email, geboortedatum, soortLid, familie, huisnummer, bijvoeging, straat, stad, land){
                axios.post("leden/create", {
                    "naam": naam,
                    "email": email,
                    "geboortedatum": geboortedatum,
                    "soortLid": soortLid,
                    "familie": familie,
                    "huisnummer": huisnummer,
                    "bijvoeging": bijvoeging,
                    "straat": straat,
                    "stad": stad,
                    "land": land,
                })
                .then(() => {
                    this.leden(
                        this.get.page,
                        this.get.naam, 
                        this.get.email,
                        this.get.minGeboortedatum,
                        this.get.maxGeboortedatum,
                        this.get.soortLid,
                        this.get.familie, 
                        this.get.adres, 
                        this.get.straat, 
                        this.get.stad, 
                        this.get.land
                    );
                    this.Toast("Lid succesvol toegevoegd", "success", 3000, "top");
                })
                .catch((error) => {
                    console.error(error)
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                })
            },

            async LedenToevoegenModal(){
                const modal = await modalController.create({
                    component: LedenModal,
                    componentProps: {
                        titel: "Leden Toevoegen",
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role == "confirm"){
                    this.ledenToevoegen(
                        data.naam, 
                        data.email, 
                        data.geboortedatum, 
                        data.soortLid, 
                        data.familie, 
                        data.huisnummer, 
                        data.bijvoeging, 
                        data.straat, 
                        data.stad, 
                        data.land
                    );
                }
            },

            deleteLid: function(id){
                axios.post("leden/delete", {
                    "id": id,
                })
                .then(() => {
                    this.leden(
                        this.get.page,
                        this.get.naam, 
                        this.get.email,
                        this.get.minGeboortedatum,
                        this.get.maxGeboortedatum,
                        this.get.soortLid,
                        this.get.familie, 
                        this.get.adres, 
                        this.get.straat, 
                        this.get.stad, 
                        this.get.land
                    );
                    this.Toast("Lid succesvol gedelete", "success", 3000, "top");
                })
                .catch((error) => {
                    console.log(error)
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                });
            },
            
            async deleteAlert(id){
                var lid = this.items.filter((item) => {
                    return item.id == id;
                });
                const alert = await alertController.create({
                    header: "Let op!",
                    message: "Weet u zeker dat u " + lid[0].naam + " wilt deleten?",
                    buttons: [
                        {
                            text: "Ja",
                            role: "confirm",
                            handler: () => {
                                this.deleteLid(id);
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

            async LidUpdatenModal(id){
                const modal = await modalController.create({
                    component: LedenModal,
                    componentProps: {
                        titel: "updaten",
                        id: id,
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role == "confirm"){
                    this.lidUpdaten(
                        id,
                        data.naam, 
                        data.email, 
                        data.geboortedatum, 
                        data.soortLid, 
                        data.familie, 
                        data.huisnummer, 
                        data.bijvoeging, 
                        data.straat, 
                        data.stad, 
                        data.land
                    );
                }
            },

            lidUpdaten: function(id, naam, email, geboortedatum, soortLid, familie, huisnummer, bijvoeging, straat, stad, land){
                axios.post("leden/update", {
                    "id": id,
                    "naam": naam,
                    "email": email,
                    "geboortedatum": geboortedatum,
                    "soortLid": soortLid,
                    "familie": familie,
                    "huisnummer": huisnummer,
                    "bijvoeging": bijvoeging,
                    "straat": straat,
                    "stad": stad,
                    "land": land,
                })
                .then(() => {
                    this.leden(
                        this.get.page,
                        this.get.naam, 
                        this.get.email,
                        this.get.minGeboortedatum,
                        this.get.maxGeboortedatum,
                        this.get.soortLid,
                        this.get.familie, 
                        this.get.adres, 
                        this.get.straat, 
                        this.get.stad, 
                        this.get.land
                    );
                    this.Toast("Lid succesvol aangepast", "success", 3000, "top");
                })
                .catch((error) => {
                    console.log(error)
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                });
            },
            
            async Toast(message, color, duration, position){
                const toast = await toastController.create({
                    message: message,
                    color: color,
                    duration: duration,
                    position: position,
                });

                toast.present();
            },
        },

        components: {
            IonCol,
            IonInput,
            IonItem,
            IonButton,
            IonSelect,
            IonSelectOption,
        },

        props: {
            "get": Object
        },
    }
</script>