<template>
    <zoek-container :toevoegen="soortLidToevoegenModal" toevoegenTitel="Leden Toevoegen"></zoek-container>
    <grid-container :items="items" :colomnBreedte="colomnBreedte" :gridCols="grid" v-slot="slotProps">
        <ion-col :size="grid['leden zoeken']" class="d-flex justify-content-center">
            <form :action="this.ledUrl">
                <input type="hidden" name="soortLid" :value="slotProps.item.omschrijving"/>
                <input type="submit" value="soort leden zoeken"/>
            </form>
        </ion-col>
        <ion-col :size="grid.aanpassen" class="d-flex justify-content-center">
            <ion-button @click="updateSoortLidModal(slotProps.item.id)">
                aanpassen
            </ion-button>
        </ion-col>
        <ion-col :size="grid.deleten" class="d-flex justify-content-center">
            <ion-button @click="deleteAlert(slotProps.item.id)" :disabled="slotProps.item['hoeveelheid leden'] > 0" color="danger">
                deleten
            </ion-button>
        </ion-col>
    </grid-container>
    <pagination :get="this.get" :laatstePagina="this.laatstePagina"/>
</template>

<script>
    import { 
        IonCol, 
        IonButton,
        modalController,
        alertController,
        toastController,
    } from "@ionic/vue";

    import axios from "axios";
    import SoortenLedenModal from "../components/modals/SoortenLedenModal.vue";

    export default({
        data(){
            return {
                items: [],
                colomnBreedte: 100,
                grid: {
                    "omschrijving": 2,
                    "korting": 1,
                    "min leeftijd": 2,
                    "max leeftijd": 2,
                    "hoeveelheid leden": 3,
                    "leden zoeken": 2,
                    "aanpassen": 2,
                    "deleten": 2,
                },
                laatstePagina: 1,
                ledUrl: "",
            }
        },
        methods: {
            soortenLeden: function(){
                axios.post("soorten_leden")
                .then((response) => {
                    this.items = response.data.data;
                })
                .catch((error) => {
                    console.error(error);
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                })
            },
            
            soortLidToevoegen: function(omschrijving, minLeeftijd, maxLeeftijd, korting){
                axios.post("soorten_leden/store", {
                    "omschrijving": omschrijving,
                    "minLeeftijd": minLeeftijd,
                    "maxLeeftijd": maxLeeftijd,
                    "korting": korting,
                })
                .then(() => {
                    this.soortenLeden(this.get);
                    this.Toast("Soort lid succesvol toegevoegd", "success", 3000, "top");
                })
                .catch((error) => {
                    console.log(error);
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                })
            },

            async soortLidToevoegenModal(){
                const modal = await modalController.create({
                    component: SoortenLedenModal,
                    componentProps: {
                        titel: "Soort lid Toevoegen",
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role == "confirm"){
                    this.soortLidToevoegen(
                        data.omschrijving, 
                        data.minLeeftijd,
                        data.maxLeeftijd,
                        data.korting,
                    );
                }
            },
            
            updateSoortLid: function(id, omschrijving, minLeeftijd, maxLeeftijd, korting){
                axios.post("soorten_leden/update", {
                    "id": id,
                    "omschrijving": omschrijving,
                    "minLeeftijd": minLeeftijd,
                    "maxLeeftijd": maxLeeftijd,
                    "korting": korting,
                })
                .then(() => {
                    this.soortenLeden(this.get);
                    this.Toast("Soort lid succesvol aangepast", "success", 3000, "top");
                })
                .catch((error) => {
                    console.log(error)
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                });
            },

            async updateSoortLidModal(id){
                const modal = await modalController.create({
                    component: SoortenLedenModal,
                    componentProps: {
                        titel: "updaten",
                        id: id,
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role == "confirm"){
                    this.updateSoortLid(
                        id,
                        data.omschrijving, 
                        data.minLeeftijd,
                        data.maxLeeftijd,
                        data.korting,
                    );
                }
            },
            
            deleteSoortLid: function(id){
                axios.post("soorten_leden/delete", {
                    "id": id,
                })
                .then(() => {
                    this.soortenLeden(this.get);
                    this.Toast("Soort lid succesvol gedelete", "success", 3000, "top");
                })
                .catch((error) => {
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                });
            },

            async deleteAlert(id){
                var soortLid = this.items.filter((item) => {
                    return item.id == id;
                });
                const alert = await alertController.create({
                    header: "Let op!",
                    message: "Weet u zeker dat u het soort lid" + soortLid[0].omschrijving + " wilt deleten?",
                    buttons: [
                        {
                            text: "Ja",
                            role: "confirm",
                            handler: () => {
                                this.deleteSoortLid(id);
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
                const toast = await toastController.create({
                    message: message,
                    color: color,
                    duration: duration,
                    position: position,
                });

                toast.present();
            },
        },

        beforeMount(){
            this.ledUrl = window.location.protocol + '//' + window.location.host + '/app/leden';
        },

        mounted(){
            this.soortenLeden();
        },

        props: {
            get: Object
        },

        components: {
            IonCol,
            IonButton,
        }
    });
</script>