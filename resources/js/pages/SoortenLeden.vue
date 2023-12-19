<template>
    <zoek-container :toevoegen="soortLidToevoegenModal" toevoegenTitel="Leden Toevoegen"></zoek-container>
    <grid-container :items="items" :colomnBreedte="colomnBreedte" :gridCols="grid" v-slot="slotProps">
        <ion-col :size="grid.aanpassen" class="d-flex justify-content-center">
            <ion-button @click="FamilieUpdatenModal(slotProps.item)">
                aanpassen
            </ion-button>
        </ion-col>
        <ion-col :size="grid.deleten" class="d-flex justify-content-center">
            <ion-button @click="deleteAlert(slotProps.item.id)" color="danger">
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
                    "aanpassen": 1,
                    "deleten": 1,
                },
                laatstePagina: 1,
            }
        },
        methods: {
            soortenLeden: function(){
                axios.post("soorten_leden")
                .then((response) => {
                    this.items = response.data;
                })
                .catch((error) => {
                    console.error(error);
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                })
            },
            
            soortLidToevoegen: function(omschrijving, minLeeftijd, maxLeeftijd, korting){
                axios.post("conntributies/store", {
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
                    component: ContributiesModal,
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

            async deleteSoortLidALert(id){
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
            }
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