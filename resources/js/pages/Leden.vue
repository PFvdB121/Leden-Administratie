<template>
    <h1 class="d-flex justify-content-center">Leden</h1>
    <div class="m-2">
        <h2>
            Zoeken
        </h2>
        <div>
            <ion-item class="d-inline-block">
                <ion-input v-model="naam" class="d-inline-block" label="naam" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="email" class="d-inline-block" label="email" type="email" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="geboortedatum" class="d-inline-block" label="geboortedatum" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="soort_lid" class="d-inline-block" label="soort lid" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="familie" class="d-inline-block" label="familie" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="adres" class="d-inline-block" label="adres" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="straat" class="d-inline-block" label="straat" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="stad" class="d-inline-block" label="stad" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="d-inline-block">
                <ion-input v-model="land" class="d-inline-block" label="land" label-placement="floating"></ion-input>
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
                    <ion-col :size="this.grid.deleten" class="d-flex justify-content-center">
                        <ion-button @click="deleteAlert(item.email, item.naam)" color="danger">deleten</ion-button>
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
        alertController,
        modalController,
     } from "@ionic/vue";
    import axios from "axios";

    import LedenModal from "../components/modals/LedenModal.vue";

    export default{
        created(){
            this.gridTotaal = this.gridColTellen(this.grid);
            this.gridBreedte = this.gridBreedteTellen(this.gridTotaal, this.colomnBreedte);
            
            if (typeof this.get.page !== undefined) {
                this.pagina = this.get.page;
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
                    "familie": 2,
                    "adres": 2,
                    "aanpassen": 2,
                    "deleten": 2,
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

            leden: function(page, naam, email, geboortedatum, soort_lid, familie, adres, straat, stad, land){
                axios.post("/app/leden", {
                    "page": page,
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
            },

            ledenToevoegen: function(naam, email, geboortedatum, soort_lid, familie, adres, straat, stad, land){
                axios.post("app/leden/toevoegen", {
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
                .then(() => {
                    location.reload();
                })
                .catch((error) => {
                    console.log(error);
                })
            },

            async LedenToevoegenModal(titel){
                const modal = await modalController.create({
                    component: LedenModal,
                    componentProps: {
                        titel: titel,
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role == "confirm"){
                    this.ledenToevoegen(
                        data.naam, 
                        data.email, 
                        data.geboortedatum, 
                        data.soort_lid, 
                        data.familie, 
                        data.adres, 
                        data.straat, 
                        data.stad, 
                        data.land
                    );
                }
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
        },

        setup() {
            function deleteLid(email){
                axios.post("/app/leden/delete", {
                    "email": email,
                })
                .then(() => {
                    location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
            }
            const deleteAlert = async(email, naam) =>{
                const alert = await alertController.create({
                    header: "Let op!",
                    message: "Weet u zeker dat u " + naam + " wilt deleten?",
                    buttons: [
                        {
                            text: "Ja",
                            role: "confirm",
                            handler: () => {
                                deleteLid(email);
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

            return {deleteAlert};
        }
    }
</script>

<style scoped>
    .leden-grid{
        min-width: v-bind(gridBreedte);
        --ion-grid-columns: v-bind(gridTotaal);
    }
</style>