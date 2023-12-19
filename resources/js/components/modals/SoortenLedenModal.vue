<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button @click="annuleren()">
                    Annuleren
                </ion-button>
            </ion-buttons>
            <ion-title>
                {{ titel }}
            </ion-title>
            <ion-buttons slot="end">
                <ion-button :disabled="!(omschrijving && korting && minLeeftijd && maxLeeftijd && maxLeeftijd >= minLeeftijd)" @click="bevestigen()">
                    Bevestigen
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-list>
            <ion-item>
                <ion-input label-placement="floating" label="omschrijving" v-model="omschrijving"></ion-input>
            </ion-item>
            <ion-item>
                <ion-input label-placement="floating" type="number" min="0" label="korting" v-model="korting"></ion-input>
            </ion-item>
            <ion-item>
                <ion-input label-placement="floating" type="number" min="0" :max="maxLeeftijd ? maxLeeftijd : ''" label="geboortedatum" v-model="minLeeftijd"></ion-input>
            </ion-item>
            <ion-item>
                <ion-input label-placement="floating" type="number" :min="minLeeftijd ? minLeeftijd : ''" label="geboortedatum" v-model="maxLeeftijd"></ion-input>
            </ion-item>
        </ion-list>
    </ion-content>
</template>

<script>
    import {
        IonButton, 
        IonItem, 
        IonList, 
        IonButtons, 
        IonToolbar, 
        IonTitle, 
        IonHeader,
        IonContent,
        IonInput,
        modalController,
    } from "@ionic/vue";
    export default({
        beforeMount(){
            if(this.id){
                this.soortLidOphalen(this.id);
            }
        },

        beforeRouteUpdate(to, from, next) {
            next(false);
            this.annuleren();
        },

        components: { 
            IonButton, 
            IonItem, 
            IonList, 
            IonButtons, 
            IonToolbar, 
            IonTitle, 
            IonHeader,
            IonContent,
            IonInput,
        },

        data(){
            return {
                omschrijving: "",
                minLeeftijd: 0,
                maxLeeftijd: 0,
                korting: 0,
            };
        },

        methods: {
            soortLidOphalen: function(id){
                if (id) {
                    axios.post("soorten_leden/show", {
                        id: id,
                    })
                    .then((response) => {
                        this.omschrijving = response.data.data.omschrijving;
                        this.korting = response.data.data.korting;
                        this.minLeeftijd = response.data.data.minLeeftijd;
                        this.maxLeeftijd = response.data.data.maxLeeftijd;
                    })
                    .catch((error) => {
                        console.log(error)
                        this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                    })
                }
                else{
                    console.error("Geen id toegevoegd");
                }
            },

            annuleren: function(){
                modalController.dismiss(null, "cancel");
            },

            bevestigen: function(){
                const data = {
                    "omschrijving": this.omschrijving,
                    "korting": this.korting,
                    "minLeeftijd": this.minLeeftijd,
                    "maxLeeftijd": this.maxLeeftijd,
                };

                modalController.dismiss(data, "confirm");
            },
        },

        name: "SoortenLedenModal",

        props: {
            titel: String,
            id: Number,
        },
    });
</script>