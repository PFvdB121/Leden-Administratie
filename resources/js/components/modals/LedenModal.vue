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
                <ion-button :disabled="!(naam && validateEmail(email) && geboortedatum && soortLid && familie)" @click="bevestigen()">
                    Bevestigen
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-list>
            <ion-item>
                <ion-input label-placement="floating" label="naam" v-model="naam"></ion-input>
            </ion-item>
            <ion-item>
                <ion-input label-placement="floating" type="email" label="email" v-model="email"></ion-input>
            </ion-item>
            <ion-item>
                <ion-input label-placement="floating" type="date" min="1900-01-01" :max="huidigeDatum" label="geboortedatum" v-model="geboortedatum"></ion-input>
            </ion-item>
            <ion-item>
                <ion-select placeholder="Selecteer wat voor soort lid" v-model="soortLid">
                    <ion-select-option v-for="s in soortenLeden" :value="s.omschrijving">
                        {{ s.omschrijving }}
                    </ion-select-option>
                </ion-select>
            </ion-item>
            <div>
                <ion-item class="d-flex justify-content-center">
                    <ion-input label-placement="floating" label="familie" :readonly="true" v-model="familie"></ion-input>
                    <ion-input label-placement="floating" label="adres" :readonly="true" :value="(straat? straat + ' ' + huisnummer + ((bijvoeging) ? bijvoeging : '') + ', ' + stad + ', ' + land : '')"></ion-input>
                </ion-item>
                <ion-button @click="() => {familieToevoegen()}">Familie toevoegen</ion-button>
            </div>
        </ion-list>
    </ion-content>
</template>

<script>
    import { defineComponent } from 'vue';
    import { 
        IonButton, 
        IonItem, 
        IonList, 
        IonButtons, 
        IonToolbar, 
        IonTitle, 
        IonHeader,
        IonContent,
        IonSelect,
        IonInput,
        IonSelectOption,
        modalController,
        toastController,
    } from '@ionic/vue';
    import axios from 'axios';

    import FamilieModal from './FamilieModal.vue';

    export default defineComponent({
        name: "LedenModal",
        data(){
            return{
                soortenLeden: {},
                naam: "",
                email: "",
                geboortedatum: "",
                soortLid: "",
                familie: "",
                huisnummer: 0,
                bijvoeging: "",
                straat: "",
                stad: "",
                land: "",
                adres: "",
                isEmail: false,
                huidigeDatum: "",
                date: new Date,
            }
        },
        beforeRouteUpdate(to, from, next) {
            next(false);
            this.annuleren();
        },
        beforeMount(){
            this.soortenLedenOphalen();
            this.huidigeDatum = this.date.toLocaleDateString("en-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
            if (this.id) {
                this.lidOphalen(this.id);
            }
        },
        methods:{
            soortenLedenOphalen: function(){
                axios.post("soorten_leden")
                .then((response) => {
                    this.soortenLeden = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
            },

            lidOphalen: function(id){
                if (id) {
                    axios.post("leden/show", {
                        id: id,
                    })
                    .then((response) => {
                        this.naam = response.data.data.naam;
                        this.soortLid = response.data.data["soort lid"];
                        this.email = response.data.data.email;
                        this.geboortedatum = response.data.data.geboortedatum;
                        this.familie = response.data.data.familie;
                        this.huisnummer = response.data.data.huisnummer;
                        this.bijvoeging = response.data.data.bijvoeging;
                        this.straat = response.data.data.straat;
                        this.stad = response.data.data.stad;
                        this.land = response.data.data.land;
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
                    "naam": this.naam,
                    "email": this.email,
                    "geboortedatum": this.geboortedatum,
                    "soortLid": this.soortLid,
                    "familie": this.familie,
                    "huisnummer": this.huisnummer,
                    "bijvoeging": this.bijvoeging,
                    "straat": this.straat,
                    "stad": this.stad,
                    "land": this.land,
                };

                modalController.dismiss(data, "confirm");
            },

            async familieToevoegen(){
                const modal = await modalController.create({
                    component: FamilieModal,
                    componentProps: {
                        pFamilie: this.familie,
                        pHuisnummer: this.huisnummer,
                        pBijvoeging: this.bijvoeging,
                        pStraat: this.straat,
                        pStad: this.stad,
                        pLand: this.land,
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role === "confirm") {
                    this.familie = data.familie;
                    this.huisnummer = data.huisnummer;
                    this.bijvoeging = data.bijvoeging;
                    this.straat = data.straat;
                    this.stad = data.stad;
                    this.land = data.land;
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
        components: {
            IonButton,
            IonItem,
            IonList,
            IonButtons,
            IonToolbar,
            IonTitle,
            IonHeader,
            IonContent,
            IonSelect,
            IonSelectOption,
            IonInput,
        },

        props: {
            titel: String,
            id: Number,
        }
    });
</script>