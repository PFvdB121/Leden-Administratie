<template>
    <h1 class="d-flex justify-content-center">Leden</h1>
    <div class="m-2">
        <h2>
            Zoeken
        </h2>
        <div>
            <ion-item class="d-inline-block">
                <ion-input v-model="this.naam" class="d-inline-block" label="naam" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="this.email" class="d-inline-block" label="email" type="email" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="this.geboortedatum" class="d-inline-block" label="geboortedatum" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="this.soort_lid" class="d-inline-block" label="soort lid" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="this.familie" class="d-inline-block" label="familie" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="this.adres" class="d-inline-block" label="adres" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="this.straat" class="d-inline-block" label="straat" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="this.stad" class="d-inline-block" label="stad" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="this.land" class="d-inline-block" label="land" label-placement="floating"></ion-input>
            </ion-item>
        </div>
        <div>
            <ion-button @click="zoeken()">
                Zoeken
            </ion-button>
        </div>
    </div>
    <div class="w-100">
        <div ref="scroll1" class="sticky-top overflow-x-scroll">
            <ion-grid class="grid-gap leden-grid">
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
        <div ref="scroll2" class="overflow-x-hidden">
            <ion-grid class="grid-gap leden-grid">
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
    <pagination :get="this.get" :laatstePagina="this.laatstePagina"/>
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
        beforeMount(){
            this.gridTotaal = this.gridColTellen(this.grid);
            this.gridBreedte = this.gridBreedteTellen(this.gridTotaal, this.colomnBreedte);
            
            if (typeof this.get.pagina !== undefined) {
                this.pagina = this.get.pagina;
            }
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
                this.pagina,
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
        data(){
            return{
                items: [],
                grid: {
                    "naam": 2,
                    "email": 3,
                    "geboortedatum": 2,
                    "soort_lid": 1,
                    "familie": 1,
                    "adres": 2,
                    "aanpassen": 1,
                    "deleten": 1,
                },
                colomnBreedte: 100,
                gridTotaal: 0,
                gridBreedte: "",
                pagina: 1,
                laatstePagina: 1,
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
            zoeken: function(){
                this.redirectWithParams(location.protocol + "//" + location.host + location.pathname, {
                    "pagina": this.pagina,
                    "naam": this.naam,
                    "email": this.email,
                    "geboortedatum": this.geboortedatum,
                    "soort_lid": this.soort_lid,
                    "familie": this.familie,
                    "adres": this.adres,
                    "straat": this.straat,
                    "stad": this.stad,
                    "land": this.land,
                });
            },

            leden: function(pagina, naam, email, geboortedatum, soort_lid, familie, adres, straat, stad, land){
                axios.post("/app/leden", {
                    "page": pagina,
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
                    this.laatstePagina = response.data.meta.last_page;
                    this.items = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            },

            gridColTellen: function (grid) {
                var col = 0;
                for(const g in grid) {
                    col += grid[g];
                };
                return col;
            },

            gridBreedteTellen: function(gridTotaal, colomnBreedte){
                var gridBreedte = gridTotaal * colomnBreedte + "px";
                return gridBreedte;
            },

            syncScroll: function(){
                this.$refs.scroll2.scrollLeft = this.$refs.scroll1.scrollLeft;
            }
        },

        mounted(){
            this.$refs.scroll1.addEventListener("scroll", this.syncScroll);
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
            "get": Object
        }
    }
</script>

<style scoped>
    .leden-grid{
        min-width: v-bind(gridBreedte);
        --ion-grid-columns: v-bind(gridTotaal);
    }
</style>