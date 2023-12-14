<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button @click="this.annuleren()">
                    Annuleren
                </ion-button>
            </ion-buttons>
            <ion-title>
                Familie
            </ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-accordion-group ref="accordionGroup" value="land">
            <ion-accordion value="land">
                <ion-item slot="header" @click="(e) => {e.stopPropagation()}">
                    <ion-label>Land</ion-label>
                </ion-item>
                <div slot="content">
                    <div class="d-flex justify-content-center">
                        <ion-item class="border d-inline-block">
                            <ion-input label="Land" label-placement="floating" :on-ion-change="landZoeken()" v-model="land"></ion-input>
                        </ion-item>
                        <ion-button :disabled="!land" @click="toggleAccordion('stad')">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="landItem in landen" :button="true" @click="waardeAanpassen('land', landItem['naam'])">
                            {{ landItem['naam'] }}
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
            <ion-accordion value="stad">
                <ion-item slot="header" @click="(e) => {e.stopPropagation()}">
                    <ion-label>Stad</ion-label>
                </ion-item>
                <div slot="content">
                    <div class="d-flex justify-content-center">
                        <ion-button @click="toggleAccordion('land')">Terug</ion-button>
                        <ion-item class="border d-inline-block">
                            <ion-input label="Stad" label-placement="floating" v-model="stad" :on-ion-change="stadZoeken()"></ion-input>
                        </ion-item>
                        <ion-button :disabled="!stad" @click="() => {toggleAccordion('straat')}">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="stadItem in steden" :button="true" @click="() => {waardeAanpassen('stad', stadItem['naam'])}">
                            {{ stadItem['naam'] }}
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
            <ion-accordion value="straat">
                <ion-item slot="header" @click="(e) => {e.stopPropagation()}">
                    <ion-label>Straat</ion-label>
                </ion-item>
                <div slot="content">
                    <div class="d-flex justify-content-center">
                        <ion-button @click="toggleAccordion('stad')">Terug</ion-button>
                        <ion-item class="border d-inline-block">
                            <ion-input label="Straat" label-placement="floating" v-model="straat" :on-ion-change="straatZoeken()"></ion-input>
                        </ion-item>
                        <ion-button :disabled="!straat" @click="toggleAccordion('huisnummer')">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="straatItem in straten" :button="true" @click="waardeAanpassen('straat', straatItem['naam'])">
                            {{ straatItem['naam'] }}
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
            <ion-accordion value="huisnummer">
                <ion-item slot="header" @click="(e) => {e.stopPropagation()}">
                    <ion-label>Huisnummer</ion-label>
                </ion-item>
                <div slot="content">
                    <div class="d-flex justify-content-center">
                        <ion-button @click="toggleAccordion('straat')">Terug</ion-button>
                        <ion-item class="border d-inline-block">
                            <ion-input label="Huisnummer" min="1" max="9999" label-placement="floating" type="number" v-model="huisnummer" :on-ion-change="adresZoeken()"></ion-input>
                        </ion-item>
                        <ion-item class="border d-inline-block">
                            <ion-input label="Bijvoeging" maxlength="3" label-placement="floating" v-model="bijvoeging" :on-ion-change="adresZoeken()"></ion-input>
                        </ion-item>
                        <ion-button :disabled="!huisnummer" @click="toggleAccordion('familie')">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="huisnummerItem in huisnummers" :button="true" @click="() => {
                            waardeAanpassen('huisnummer', huisnummerItem['huisnummer'])
                            waardeAanpassen('bijvoeging', huisnummerItem['bijvoeging'])
                        }">
                            {{ huisnummerItem['huisnummer'] + huisnummerItem['bijvoeging'] }}
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
            <ion-accordion value="familie">
                <ion-item slot="header" @click="(e) => {e.stopPropagation()}">
                    <ion-label>Familie</ion-label>
                </ion-item>
                <div slot="content">
                    <div class="d-flex justify-content-center">
                        <ion-button @click="toggleAccordion('huisnummer')">Terug</ion-button>
                        <ion-item class="border d-inline-block">
                            <ion-input label="Familie" label-placement="floating" v-model="familie" :on-ion-change="familieZoeken()"></ion-input>
                        </ion-item>
                        <ion-button :disabled="!familie" @click="bevestigen()">Bevestigen</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="familieItem in families" :button="true" @click="waardeAanpassen('familie', familieItem['naam'])">
                            {{ familieItem['naam'] }}
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
        </ion-accordion-group>
    </ion-content>
</template>

<script>
    import { 
        accordionGroup, 
        IonAccordionGroup, 
        IonAccordion,
        IonList, 
        IonInput, 
        IonItem, 
        IonButton, 
        IonTitle, 
        IonToolbar, 
        IonHeader, 
        IonButtons,
        IonContent,
        IonLabel,
        modalController,
    } from '@ionic/vue';
    import { defineComponent, ref } from 'vue';
    import axios from 'axios';

    export default defineComponent({
        beforeMount(){
            this.land = this.pLand;
            this.stad = this.pStad;
            this.straat = this.pStraat;
            if (this.pHuisnummer) {
                this.huisnummer = this.pHuisnummer;
            }
            this.bijvoeging = this.pBijvoeging;
            this.familie = this.pFamilie;
        },
        beforeRouteUpdate(to, from, next){
            next(false);
            this.annuleren();
        },
        components: {
            IonAccordion,
            IonAccordionGroup,
            IonList,
            IonInput,
            IonItem,
            IonButton,
            IonTitle,
            IonToolbar,
            IonHeader,
            IonButtons,
            IonContent,
            IonLabel,
        },
        data(){
            return{
                land: "",
                stad: "",
                straat: "",
                huisnummer: "",
                bijvoeging: "",
                familie: "",
                landen: {},
                steden: {},
                straten: {},
                huisnummers: {},
                families: {},
            }
        },
        methods:{
            annuleren: function(){
                modalController.dismiss(null, "cancel");
            },
            bevestigen: function(){
                const data = {
                    land: this.land,
                    stad: this.stad,
                    straat: this.straat,
                    huisnummer: this.huisnummer,
                    bijvoeging: this.bijvoeging,
                    familie: this.familie,
                }

                modalController.dismiss(data, "confirm");
            },

            landZoeken: function(){
                if (this.land) {
                    axios.post("landen", {
                        "naam": this.land
                    })
                    .then((response) => {
                        this.landen = response.data;
                    })
                    .catch((error) => {
                        console.error(error)
                    })
                }
                else{
                    this.landen = {};
                }
            },


            stadZoeken: function(){
                if (this.stad) {
                    axios.post("steden", {
                        "naam": this.stad,
                        "land": this.land
                    })
                    .then((response) => {
                        this.steden = response.data;
                    })
                    .catch((error) => {
                        console.error(error)
                    })
                }
                else{
                    this.steden = {};
                }
            },


            straatZoeken: function(){
                if (this.straat) {
                    axios.post("straten", {
                        "naam": this.straat,
                        "stad": this.stad,
                        "land": this.land
                    })
                    .then((response) => {
                        this.straten = response.data;
                    })
                    .catch((error) => {
                        console.error(error)
                    })
                }
                else{
                    this.straten = {};
                }
            },


            adresZoeken: function(){
                if (this.huisnummer || this.bijvoeging) {
                    axios.post("adressen", {
                        "huisnummer": this.huisnummer,
                        "bijvoeging": this.bijvoeging,
                        "straat": this.straat,
                        "stad": this.stad,
                        "land": this.land
                    })
                    .then((response) => {
                        this.huisnummers = response.data;
                    })
                    .catch((error) => {
                        console.error(error)
                    })
                }
                else{
                    this.huisnummers = {};
                }
            },


            familieZoeken: function(){
                if (this.familie) {
                    axios.post("families", {
                        "naam": this.familie,
                        "huisnummer": this.huisnummer,
                        "bijvoeging": this.bijvoeging,
                        "straat": this.straat,
                        "stad": this.stad,
                        "land": this.land
                    })
                    .then((response) => {
                        this.families = response.data;
                    })
                    .catch((error) => {
                        console.error(error)
                    })
                }
                else{
                    this.families = {};
                }
            },

            waardeAanpassen: function(index, waarde){
                this[index] = waarde;
            }
        },
        
        name: "FamilieVLModal",

        props: {
            pFamilie: String,
            pHuisnummer: Number,
            pBijvoeging: String,
            pStraat: String,
            pStad: String,
            pLand: String,
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
    });
</script>