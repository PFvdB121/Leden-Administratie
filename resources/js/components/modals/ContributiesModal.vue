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
                <ion-button :disabled="!(gekozenMail && bedrag && soortLid && boekjaar)" @click="bevestigen()">
                    Bevestigen
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-accordion-group ref="accordionGroup" value="boekjaar">
            <ion-accordion value="boekjaar">
                <ion-item slot="header" @click="(e) => {e.stopPropagation()}">
                    <ion-label>Boekjaar</ion-label>
                </ion-item>
                <div slot="content">
                    <div class="d-flex justify-content-center">
                        <ion-item class="border d-inline-block">
                            <ion-input label="Boekjaar" label-placement="floating" v-model="boekjaar" :on-ion-change="zoekjaar()"></ion-input>
                        </ion-item>
                        <ion-button :disabled="!boekjaar" @click="toggleAccordion('email')">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="boekjaar in boekenjaren" :button="true" @click="() => {
                            waardeAanpassen('boekjaar', boekjaar['jaar'])
                        }">
                            {{ boekjaar['jaar'] }}
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
            <ion-accordion value="email">
                <ion-item slot="header" @click="(e) => {e.stopPropagation()}">
                    <ion-label>Email Lid</ion-label>
                </ion-item>
                <div slot="content">
                    <ion-item>
                        <ion-input :readonly="true" v-model="gekozenMail"></ion-input>
                    </ion-item>
                    <div class="d-flex justify-content-center">
                        <ion-button @click="toggleAccordion('boekjaar')">Terug</ion-button>
                        <ion-item class="border d-inline-block">
                            <ion-input label="Email" label-placement="floating" v-model="email" :on-ion-change="zoekMails()"></ion-input>
                        </ion-item>
                        <ion-button :disabled="!huisnummer" @click="toggleAccordion('soortLid')">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="email in emails" :button="true" @click="() => {
                            waardeAanpassen('gekozenMail', email['email'])
                            waardeAanpassen('soortLid', email['soort lid'])
                        }">
                            {{ email['email'] }}
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
            <ion-accordion value="soortLid">
                <ion-item slot="header" @click="(e) => {e.stopPropagation()}">
                    <ion-label>Soort Lid</ion-label>
                </ion-item>
                <div slot="content">
                    <div class="d-flex justify-content-center">
                        <ion-button @click="toggleAccordion('email')">Terug</ion-button>
                        <ion-item>
                            <ion-select v-model="soortLid" :on-ion-change="minBedragBepalen()">
                                <ion-select-option v-for="soortLid in soortenLeden" :value="soortLid.omschrijving">
                                    {{ soortLid.omschrijving }}
                                </ion-select-option>
                            </ion-select>
                        </ion-item>
                        <ion-button :disabled="!soortLid" @click="toggleAccordion('bedrag')">Volgende</ion-button>
                    </div>
                </div>
            </ion-accordion>
            <ion-accordion value="bedrag">
                <ion-item slot="header" @click="(e) => {e.stopPropagation()}">
                    <ion-label>bedrag</ion-label>
                </ion-item>
                <div slot="content">
                    <div class="d-flex justify-content-center">
                        <ion-button @click="toggleAccordion('email')">Terug</ion-button>
                        <ion-item>
                            <ion-input label="Bedrag" type="number" :min="minBedrag" step=".01" label-placement="floating" v-model="bedrag"></ion-input>
                        </ion-item>
                        <ion-button :disabled="!(bedrag >= minBedrag)" @click="bevestigen()">
                            Bevestigen
                        </ion-button>
                    </div>
                </div>
            </ion-accordion>
        </ion-accordion-group>
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
        IonSelect,
        IonInput,
        IonLabel,
        IonSelectOption,
        modalController,
        IonAccordion,
        IonAccordionGroup,
    } from '@ionic/vue';

    export default({
        name: "ContributiesModal",

        beforeRouteUpdate(to, from, next) {
            next(false);
            this.annuleren();
        },

        beforeMount(){
            this.soortenLedenOphalen();
            if (this.id) {
                this.contributieOphalen()
            }
        },

        props: {
            titel: String,
            id: Number,
        },

        data(){
            return{
                bedrag: 0,
                email: "",
                soortLid: "",
                boekjaar: "",
                emails: [],
                gekozenMail: "",
                soortenLeden: [],
                lid: {},
                boekenjaren: [],
                basisBedrag: 100,
                korting: 0,
                minBedrag: "",
            }
        },

        methods: {
            soortenLedenOphalen: function(){
                axios.post("soorten_leden/get")
                .then((response) => {
                    this.soortenLeden = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
            },

            minBedragBepalen: function(){
                if (this.soortLid) {
                    soortLid = this.soortenLeden.filter((s) => {
                        return s.omschrijving === this.soortLid;
                    });

                    this.korting = soortLid[0]["korting"];
                    this.minBedrag = this.basisBedrag - this.basisBedrag / this.korting;
                }
                else{
                    this.korting = 0;
                    this.minBedrag = "";
                }
            },

            contributieOphalen: function(id){
                if (id) {
                    axios.post("contributies/show", {
                        id: id,
                    })
                    .then((response) => {
                        this.soortLid = response.data.data["soort lid"];
                        this.email = response.data.data.email;
                        this.bedrag = response.data.data.bedrag;
                        this.boekjaar = response.data.data.boekjaar;
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

            zoekMails: function(){
                if (this.email) {
                    axios.post("leden/zoek_mails", {
                        email: this.email,
                    })
                    .then((response) => {
                        this.gekozenMail = response.data.email;
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

            LidOphalen: function(id){
                axios.post("leden/show", {
                    id: id,
                })
                .then((response) => {
                    this.gekozenMail = response.data.data.email;
                    this.soortLid = response.data.data["soort lid"];
                })
                .catch((error) => {
                    console.log(error)
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                })
            },

            zoekjaar: function(){
                if (this.boekjaar) {
                    axios.post("boekenjaren/zoek_jaar", {
                        jaar: this.boekjaar,
                    })
                    .then((response) => {
                        this.boekenjaren = response.data;
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
                    "soortLid": this.soortLid,
                    "email": this.gekozenMail,
                    "bedrag": this.bedrag,
                    "boekjaar": this.boekjaar,
                };

                modalController.dismiss(data, "confirm");
            }
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
            IonLabel,
            IonAccordion,
            IonAccordionGroup,
        },

        setup() {
            const accordionGroup = ref(null);
            const toggleAccordion = (waarde) => {
                if (!accordionGroup.value) {
                    return;
                }
                const nativeEl = accordionGroup.value.$el;

                nativeEl.value = waarde;
            };

            return { accordionGroup, toggleAccordion };
        },
    })
</script>