<template>
    <h1 class="d-flex justify-content-center">Leden</h1>
    <div class="m-2">
        <h2>
            Zoeken
        </h2>
        <div>
            <ion-item class="d-inline-block">
                <ion-input class="d-inline-block" label="naam" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input class="d-inline-block" label="email" type="email" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input class="d-inline-block" label="geboortedatum" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input class="d-inline-block" label="soort lid" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input class="d-inline-block" label="familie" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input class="d-inline-block" label="adres" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input class="d-inline-block" label="straat" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input class="d-inline-block" label="stad" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input class="d-inline-block" label="land" label-placement="floating"></ion-input>
            </ion-item>
        </div>
        <div>
            <ion-button>

            </ion-button>
        </div>
    </div>
    <div class="w-100">
        <div class="sticky-top">
            <ion-grid class="grid-gap">
                <ion-row class="bg-secondary">
                    <ion-col :size="this.grid.naam">
                        naam
                    </ion-col>
                    <ion-col :size="this.grid.email">
                        email
                    </ion-col>
                    <ion-col :size="this.grid.geboortedatum">
                        geboortedatum
                    </ion-col>
                    <ion-col :size="this.grid.soort_lid">
                        soort lid
                    </ion-col>
                    <ion-col :size="this.grid.familie">
                        familie
                    </ion-col>
                    <ion-col :size="this.grid.adres">
                        adres
                    </ion-col>
                    <ion-col :size="this.grid.aanpassen">
                        aanpassen
                    </ion-col>
                    <ion-col :size="this.grid.deleten">
                        deleten
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        <div>
            <ion-grid class="grid-gap">
                <ion-row v-for="item in items" class="bg-muted">
                    <ion-col :size="this.grid.naam">
                        {{ item.naam }}
                    </ion-col>
                    <ion-col :size="this.grid.email">
                        {{ item.email }}
                    </ion-col>
                    <ion-col :size="this.grid.geboortedatum">
                        {{ item.geboortedatum }}
                    </ion-col>
                    <ion-col :size="this.grid.soort_lid">
                        {{ item.soort_lid }}
                    </ion-col>
                    <ion-col :size="this.grid.familie">
                        {{ item.familie }}
                    </ion-col>
                    <ion-col :size="this.grid.adres">
                        {{ item.straat }} {{ item.adres }} {{ item.stad }} {{ item.land }}
                    </ion-col>
                    <ion-col :size="this.grid.aanpassen">
                        aanpassen
                    </ion-col>
                    <ion-col :size="this.grid.deleten">
                        deleten
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
    </div>
</template>

<script>
    import { 
        IonGrid,
        IonRow,
        IonCol,
        IonInput,
        IonItem,
        IonContent,
        IonButton,
     } from "@ionic/vue";
    import axios from "axios";

    export default{
        data(){
            return{
                items: [],
                grid: {
                    "naam": 2,
                    "email": 3,
                    "geboortedatum": 1,
                    "soort_lid": 1,
                    "familie": 1,
                    "adres": 2,
                    "aanpassen": 1,
                    "deleten": 1,
                },
                colomnBreedte: 100,
                gridTotaal: 0,
                naam: "",
                email: "",
                geboortedatum: "",
                soort_lid: "",
                familie: "",
                adres: "",
                straat: "",
                stad: "",
                land: "",
            }
        },

        methods: {
            leden: function(naam, email, geboortedatum, soort_lid, familie, adres, straat, stad, land){
                axios.post("/app/leden", {
                    "page": 1,
                    "naam": naam,
                    "email": email,
                    "geboortedatum": geboortedatum,
                    "soort_lid": soort_lid,
                    "familie": familie,
                    "adres": adres,
                    "straat": straat,
                    "stad": stad,
                    "land": land,
                })
                .then((response) => {
                    this.items = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            },

            gridColTellen: function (grid) {
                var col = 0;
                grid.forEach((val, index) => {
                    col += val;
                });
                return col;
            },

            gridBreedte: function(){

            }
        },

        mounted(){
            this.naam = this.get.naam;
            this.email = this.get.email;
            this.geboortedatum = this.get.geboortedatum;
            this.soort_lid = this.get.soort_lid;
            this.familie = this.get.familie;
            this.adres = this.get.adres;
            this.straat = this.get.straat;
            this.stad = this.get.stad;
            this.land = this.get.land;
            this.leden(
                this.get.naam, 
                this.get.email,
                this.get.geboortedatum,
                this.get.soort_lid,
                this.get.familie, 
                this.get.adres, 
                this.get.straat, 
                this.get.stad, 
                this.get.land
            );
        },

        components: {
            IonGrid,
            IonRow,
            IonCol,
            IonInput,
            IonItem,
            IonContent,
            IonButton,
        },

        props: {
            "get": Array
        }
    }
</script>