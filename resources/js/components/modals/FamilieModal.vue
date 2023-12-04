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
        <ion-accordion-group ref="accordion" :readonly="true">
            <ion-accordion value="land">
                <ion-item slot="header">
                    <ion-label>Land</ion-label>
                </ion-item>
                <div slot="content">
                    <div>
                        <ion-input v-model="land"></ion-input>
                        <ion-button :disabled="!land" @click="accordionWaarde('stad')">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="landItem in landen">
                            <ion-button @click="waardeAanpassen('land', landItem['naam'])"></ion-button>
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
            <ion-accordion value="stad">
                <ion-item slot="header">
                    <ion-label>Stad</ion-label>
                </ion-item>
                <div slot="content">
                    <div>
                        <ion-button @click="accordionWaarde('land')">Terug</ion-button>
                        <ion-input v-model="stad"></ion-input>
                        <ion-button :disabled="!stad" @click="accordionWaarde('straat')">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="stadItem in steden">
                            <ion-button @click="waardeAanpassen('stad', stadItem['naam'])"></ion-button>
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
            <ion-accordion value="straat">
                <ion-item slot="header">
                    <ion-label>Straat</ion-label>
                </ion-item>
                <div slot="content">
                    <div>
                        <ion-button @click="accordionWaarde('stad')">Terug</ion-button>
                        <ion-input v-model="straat"></ion-input>
                        <ion-button :disabled="!straat" @click="accordionWaarde('huisnummer')">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="straatItem in straten">
                            <ion-button @click="waardeAanpassen('straat', straatItem['naam'])"></ion-button>
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
            <ion-accordion value="huisnummer">
                <ion-item slot="header">
                    <ion-label>Huisnummer</ion-label>
                </ion-item>
                <div slot="content">
                    <div>
                        <ion-button @click="accordionWaarde('straat')">Terug</ion-button>
                        <ion-input v-model="huisnummer"></ion-input>
                        <ion-input v-model="bijvoeging"></ion-input>
                        <ion-button :disabled="!huisnummer" @click="accordionWaarde('familie')">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="huisnummerItem in huisnummers">
                            <ion-button @click="function(){
                                waardeAanpassen('huisnummer', huisnummerItem['huisnummer']);
                                waardeAanpassen('bijvoeging', huisnummerItem['bijvoeging']);
                            }"></ion-button>
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
            <ion-accordion value="familie">
                <ion-item slot="header">
                    <ion-label>Familie</ion-label>
                </ion-item>
                <div slot="content">
                    <div>
                        <ion-button @click="accordionWaarde('huisnummer')">Terug</ion-button>
                        <ion-input v-model="huisnummer"></ion-input>
                        <ion-button :disabled="!huisnummer" @click="bevestegin()">Volgende</ion-button>
                    </div>
                    <ion-list>
                        <ion-item v-for="huisnummerItem in huisnummers">
                            <ion-button @click="waardeAanpassen('huisnummer', huisnummerItem['naam'])"></ion-button>
                        </ion-item>
                    </ion-list>
                </div>
            </ion-accordion>
        </ion-accordion-group>
    </ion-content>
</template>

<script>
    import { 
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
        modalController,
    } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
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
            accordionWaarde: function(waarde){
                this.$refs.accordionWaarde.value = waarde;
            },
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

            waardeAanpassen: function(index, waarde){
                this[index] = waarde;
            }
        },
        name: "FamilieModal",
    });
</script>