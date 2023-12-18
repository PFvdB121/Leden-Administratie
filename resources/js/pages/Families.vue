<template>
    <zoek-container :zoeken="zoeken">
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="land" class="d-inline-block" label="land" label-placement="floating"></ion-input>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="huisnummer" class="d-inline-block" label="huisnummer" label-placement="floating"></ion-input>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="straat" class="d-inline-block" label="straat" label-placement="floating"></ion-input>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="stad" class="d-inline-block" label="stad" label-placement="floating"></ion-input>
        </ion-item>
        <ion-item class="border mx-1 d-inline-block">
            <ion-input v-model="land" class="d-inline-block" label="land" label-placement="floating"></ion-input>
        </ion-item>
    </zoek-container>
    <grid-container :items="items" :colomnBreedte="colomnBreedte" :gridCols="grid" v-slot="slotProps">
        <ion-col :size="grid.aanpassen" class="d-flex justify-content-center"><ion-button @click="FamilieUpdatenModal(slotProps.item)">aanpassen</ion-button></ion-col>
        <ion-col :size="grid.deleten" class="d-flex justify-content-center"><ion-button @click="deleteAlert(slotProps.item.id)" color="danger">deleten</ion-button></ion-col>
    </grid-container>
    <pagination :get="this.get" :laatstePagina="this.laatstePagina"></pagination>
</template>

<script>
    import { 
        IonCol,
        IonButton,
        IonItem,
        IonInput,
        modalController,
        alertController,
    } from "@ionic/vue";

    import axios from "axios";

    import FamilieVLModal from './FamilieVLModal.vue';
    
    export default({
        beforeMount(){
            this.naam = this.get.naam;
            this.huisnummer = this.get.huisnummer;
            this.straat = this.get.straat;
            this.stad = this.get.stad;
            this.land = this.get.land;
            this.minLeden = this.get.minLeden;
            this.maxLeden = this.get.maxLeden;
        },

        props: {
            get: Object,
        },

        data(){
            return{
                naam: "",
                huisnummer: "",
                straat: "",
                stad: "",
                land: "",
                minLeden: "",
                maxLeden: "",
                items: {},
                laatstePagina: 1,
                colomnBreedte: 100,
                grid: {
                    "naam": 2,
                    "huisnummer": 1,
                    "straat": 2,
                    "stad": 2,
                    "land": 2,
                    "hoeveelheid leden": 2,
                    "aanpassen": 2,
                    "deleten": 2,
                }
            }
        },

        methods: {
            families: function(get){
                axios.post("families", get)
                .then((response) => {
                    this.items = response.data.data;
                })
                .catch((error) => {
                    console.error(error);
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                })
            },
            
            zoeken: function(){
                this.redirectWithParams(location.protocol + "//" + location.host + location.pathname, {
                    "naam": this.naam,
                    "huisnummer": this.huisnummer,
                    "straat": this.straat,
                    "stad": this.stad,
                    "land": this.land,
                    "minLeden": this.minLeden,
                    "maxLeden": this.maxLeden,
                });
            },

            familieUpdaten: function(id, naam, huisnummer, bijvoeging, straat, stad, land){
                axios.post("leden/update", {
                    "id": id,
                    "naam": naam,
                    "huisnummer": huisnummer,
                    "bijvoeging": bijvoeging,
                    "straat": straat,
                    "stad": stad,
                    "land": land,
                })
                .then(() => {
                    this.families(this.get);
                    this.Toast("Lid succesvol aangepast", "success", 3000, "top");
                })
                .catch((error) => {
                    console.log(error)
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                });
            },

            async FamilieUpdatenModal(item){
                const modal = await modalController.create({
                    component: FamilieVLModal,
                    componentProps: {
                        pFamilie: item.familie,
                        pHuisnummer: item.huisnummer,
                        pBijvoeging: item.bijvoeging,
                        pStraat: item.straat,
                        pStad: item.stad,
                        pLand: item.land,
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role === "confirm") {
                    this.familieUpdaten(
                        id,
                        data.naam, 
                        data.huisnummer, 
                        data.bijvoeging, 
                        data.straat, 
                        data.stad, 
                        data.land
                    );
                }
            },

            familieDeleten: function(id){
                axios.post("families/delete", {
                    "id": id,
                })
                .then(() => {
                    this.families(this.get);
                    this.Toast("Lid succesvol gedelete", "success", 3000, "top");
                })
                .catch((error) => {
                    console.error(error)
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                });
            },

            async deleteAlert(id){
                var familie = this.items.filter((item) => {
                    return item.id == id;
                });
                const alert = await alertController.create({
                    header: "Let op!",
                    message: "Weet u zeker dat u " + familie[0].naam + " wilt deleten?",
                    buttons: [
                        {
                            text: "Ja",
                            role: "confirm",
                            handler: () => {
                                this.familieDeleten(id);
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

        components: {
            IonCol,
            IonButton,
            IonItem,
            IonInput,
        }
    });
</script>