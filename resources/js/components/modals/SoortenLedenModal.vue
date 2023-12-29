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
                <ion-button :disabled="!(omschrijving && korting && (!minLeeftijd || !maxLeeftijd || parseInt(maxLeeftijd) >= parseInt(minLeeftijd)))" @click="bevestigen()">
                    Bevestigen
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-text color="danger" v-if="!checkOm">{{ error }}</ion-text>
        <ion-list>
            <ion-item>
                <ion-input label-placement="floating" label="omschrijving" v-model="omschrijving"></ion-input>
            </ion-item>
            <ion-item>
                <ion-input label-placement="floating" type="number" min="0" max="100" label="korting" v-model="korting"></ion-input>
            </ion-item>
            <ion-item>
                <ion-input label-placement="floating" type="number" min="0" :max="maxLeeftijd ? maxLeeftijd : ''" label="min leeftijd" v-model="minLeeftijd"></ion-input>
            </ion-item>
            <ion-item>
                <ion-input label-placement="floating" type="number" :min="minLeeftijd ? minLeeftijd : ''" label="max leeftijd" v-model="maxLeeftijd"></ion-input>
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
        IonText,
        modalController,
        toastController,
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
            IonText,
        },

        data(){
            return {
                omschrijving: "",
                minLeeftijd: "",
                maxLeeftijd: "",
                korting: "",
                checkOm: true,
                error: "",
            };
        },

        methods: {
            soortLidOphalen: function(id){
                if (id) {
                    axios.post("soorten_leden/show", {
                        id: id,
                    })
                    .then((response) => {
                        this.omschrijving = response.data.omschrijving;
                        this.korting = String( response.data.korting);
                        this.minLeeftijd = String(response.data.min_leeftijd);
                        this.maxLeeftijd = String(response.data.max_leeftijd);
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

            async check(id, omschrijving){
                await axios.post("soorten_leden/check", {
                    omschrijving: omschrijving,
                    id: id,
                })
                .then((response) => {
                    this.checkOm = Boolean(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                })
            },

            annuleren: function(){
                modalController.dismiss(null, "cancel");
            },

            async bevestigen(){
                const data = {
                    "omschrijving": this.omschrijving,
                    "korting": this.korting,
                    "minLeeftijd": this.minLeeftijd,
                    "maxLeeftijd": this.maxLeeftijd,
                };

                await this.check(this.id, this.omschrijving);

                if (this.checkOm) {
                    modalController.dismiss(data, "confirm");
                }
                else{
                    this.error = "omschrijving bestaat al";
                }
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

        name: "SoortenLedenModal",

        props: {
            titel: String,
            id: Number,
        },
    });
</script>