<template>
    <div>
        <h1 class="d-flex justify-content-center">Leden</h1>
        <ion-content>
            <h1>
                Zoeken
            </h1>
            <ion-item>
                <ion-input label="naam"></ion-input>
            </ion-item>
        </ion-content>
    </div>
    <div>
        <ion-grid class="grid-gap">
            <ion-row class="bg-secondary">
                <ion-col>
                    naam
                </ion-col>
                <ion-col>
                    email
                </ion-col>
                <ion-col>
                    familie
                </ion-col>
                <ion-col>
                    adres
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
    <div>
        <ion-grid>
            <ion-row v-for="item in items" class="bg-muted">
                <ion-col>
                    {{ item.naam }}
                </ion-col>
                <ion-col>
                    {{ item.email }}
                </ion-col>
                <ion-col>
                    {{ item.familie }}
                </ion-col>
                <ion-col>
                    {{ item.straat }} {{ item.adres }} {{ item.stad }} {{ item.land }}
                </ion-col>
            </ion-row>
        </ion-grid>
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
     } from "@ionic/vue";
    import axios from "axios";

    export default{
        data(){
            return{
                items: [],
                naam: "",
                email: "",
                familie: "",
                adres: "",
                straat: "",
                stad: "",
                land: "",
            }
        },

        methods: {
            leden: function(naam, email, familie, adres, straat, stad, land){
                axios.post("/app/leden", {
                    "naam": naam,
                    "email": email,
                    "familie": familie,
                    "adres": adres,
                    "straat": straat,
                    "stad": stad,
                    "land": land,
                })
                .then(function(response){
                    console.log(response.data.data);
                    this.items = response.data.data;
                })
                .catch(function(error){
                    console.log(error);
                });
            },
        },

        mounted(){
            this.naam = this.get.naam;
            this.email = this.get.email;
            this.familie = this.get.familie;
            this.adres = this.get.adres;
            this.straat = this.get.straat;
            this.stad = this.get.stad;
            this.land = this.get.land;
            this.leden(
                this.get.naam, 
                this.get.email,
                this.get.familie, 
                this.get.adres, 
                this.get.straat, 
                this.get.stad, 
                this.get.land
            );
            console.log(this.items)
        },

        components: {
            IonGrid,
            IonRow,
            IonCol,
            IonInput,
            IonItem,
            IonContent,
        },

        props: {
            "get": Array
        }
    }
</script>