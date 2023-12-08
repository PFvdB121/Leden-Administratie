<template>
    <h1 class="d-flex justify-content-center">Leden</h1>
    <div class="m-2 bg-secondary p-1">
        <h2>
            Zoeken
        </h2>
        <div>
            <ion-item class="border mx-1 d-inline-block">
                <ion-input v-model="naam" class="d-inline-block" label="naam" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="border mx-1 d-inline-block">
                <ion-input v-model="email" class="d-inline-block" label="email" type="email" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="border mx-1 d-inline-block">
                <ion-input type="date" min="1900-01-01" :max="(maxGeboortedatum ? maxGeboortedatum : huidigeDatum)" v-model="minGeboortedatum" class="d-inline-block" label="min geboortedatum" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="border mx-1 d-inline-block">
                <ion-input type="date" :min="(minGeboortedatum ? minGeboortedatum : '1900-01-01')" :max="huidigeDatum" v-model="maxGeboortedatum" class="d-inline-block" label="max geboortedatum" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="border mx-1 d-inline-block w-25">
                <ion-select v-model="soortLid" label="soort lid" label-placement="floating">
                    <ion-select-option v-for="s in soortenLeden" :value="s.omschrijving">
                        {{ s.omschrijving }}
                    </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item class="border mx-1 d-inline-block">
                <ion-input v-model="familie" class="d-inline-block" label="familie" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="border mx-1 d-inline-block">
                <ion-input v-model="adres" class="d-inline-block" label="adres" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="border mx-1 d-inline-block">
                <ion-input v-model="straat" class="d-inline-block" label="straat" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="border mx-1 d-inline-block">
                <ion-input v-model="stad" class="d-inline-block" label="stad" label-placement="floating"></ion-input>
            </ion-item>
            <ion-item class="border mx-1 d-inline-block">
                <ion-input v-model="land" class="d-inline-block" label="land" label-placement="floating"></ion-input>
            </ion-item>
        </div>
        <div>
            <ion-button @click="zoeken()">
                Zoeken
            </ion-button>
        </div>
        <div>
            <ion-button  @click="LedenToevoegenModal()">
                Lid toevoegen
                <ion-icon :icon="addOutline"></ion-icon>
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
                    <ion-col :size="this.grid.soortLid">
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
                    <ion-col :size="this.grid.soortLid">
                        {{ item.soortLid }}
                    </ion-col>
                    <ion-col :size="this.grid.familie">
                        {{ item.familie }}
                    </ion-col>
                    <ion-col :size="this.grid.adres">
                        {{ item.straat }} {{ item.huisnummer + (item.bijvoeging ? item.bijvoeging : "") }} {{ item.stad }} {{ item.land }}
                    </ion-col>
                    <ion-col :size="this.grid.aanpassen">
                        <ion-button @click="LidUpdatenModal(item.id, item.naam)">aanpassen</ion-button>
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
        IonIcon,
        alertController,
        modalController,
        IonSelect,
        IonSelectOption,
        toastController,
     } from "@ionic/vue";
    import axios from "axios";

    import LedenModal from "../components/modals/LedenModal.vue";

    import { addOutline } from "ionicons/icons";

    export default{
        created(){
            this.gridTotaal = this.gridColTellen(this.grid);
            this.gridBreedte = this.gridBreedteTellen(this.gridTotaal, this.colomnBreedte);
            
            if (typeof this.get.page !== undefined) {
                this.pagina = this.get.page;
            }
            this.naam = this.get.naam;
            this.email = this.get.email;
            this.minGeboortedatum = this.get.min_geboortedatum;
            this.maxGeboortedatum = this.get.max_geboortedatum;
            this.soortLid = this.get.soort_lid;
            this.familie = this.get.familie;
            this.adres = this.get.adres;
            this.straat = this.get.straat;
            this.stad = this.get.stad;
            this.land = this.get.land;

            this.day = this.date.getDate();
            this.month = this.date.getMonth() + 1;
            this.year = this.date.getFullYear();

            this.soortenLedenOphalen();
            this.huidigeDatum = this.date.toLocaleDateString("en-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });

            this.leden(
                this.get.page,
                this.get.naam, 
                this.get.email,
                this.get.min_geboortedatum,
                this.get.max_geboortedatum,
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
                    "soortLid": 1,
                    "familie": 2,
                    "adres": 2,
                    "aanpassen": 2,
                    "deleten": 2,
                },
                soortenLeden: {},
                colomnBreedte: 100,
                gridTotaal: 0,
                gridBreedte: "",
                pagina: 1,
                laatstePagina: 1,
                naam: "",
                email: "",
                minGeboortedatum: "",
                maxGeboortedatum: "",
                soortLid: "",
                familie: "",
                adres: "",
                straat: "",
                stad: "",
                land: "",
                huidigeDatum: "",
                date: new Date,
            }
        },

        methods: {
            zoeken: function(){
                this.redirectWithParams(location.protocol + "//" + location.host + location.pathname, {
                    "naam": this.naam,
                    "email": this.email,
                    "min_geboortedatum": this.minGeboortedatum,
                    "max_geboortedatum": this.maxGeboortedatum,
                    "soort_lid": this.soortLid,
                    "familie": this.familie,
                    "adres": this.adres,
                    "straat": this.straat,
                    "stad": this.stad,
                    "land": this.land,
                });
            },

            soortenLedenOphalen: function(){
                axios.post("soorten_leden")
                .then((response) => {
                    this.soortenLeden = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
            },

            leden: function(page, naam, email, minGeboortedatum, maxGeboortedatum, soortLid, familie, adres, straat, stad, land){
                axios.post("leden", {
                    "page": page,
                    "naam": naam,
                    "email": email,
                    "minGeboortedatum": minGeboortedatum,
                    "maxGeboortedatum": maxGeboortedatum,
                    "soortLid": soortLid,
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

            syncScroll: function(){
                this.$refs.scroll2.scrollLeft = this.$refs.scroll1.scrollLeft;
            },

            ledenToevoegen: function(naam, email, geboortedatum, soortLid, familie, huisnummer, bijvoeging, straat, stad, land){
                axios.post("leden/create", {
                    "naam": naam,
                    "email": email,
                    "geboortedatum": geboortedatum,
                    "soortLid": soortLid,
                    "familie": familie,
                    "huisnummer": huisnummer,
                    "bijvoeging": bijvoeging,
                    "straat": straat,
                    "stad": stad,
                    "land": land,
                })
                .then(() => {
                    this.leden(
                        this.get.page,
                        this.get.naam, 
                        this.get.email,
                        this.get.min_geboortedatum,
                        this.get.max_geboortedatum,
                        this.get.soort_lid,
                        this.get.familie, 
                        this.get.adres, 
                        this.get.straat, 
                        this.get.stad, 
                        this.get.land
                    );
                    this.Toast("Lid succesvol toegevoegd", "success", 3000, "top");
                })
                .catch((error) => {
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                })
            },

            async LedenToevoegenModal(){
                const modal = await modalController.create({
                    component: LedenModal,
                    componentProps: {
                        titel: "Leden Toevoegen",
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role == "confirm"){
                    this.ledenToevoegen(
                        data.naam, 
                        data.email, 
                        data.geboortedatum, 
                        data.soortLid, 
                        data.familie, 
                        data.huisnummer, 
                        data.bijvoeging, 
                        data.straat, 
                        data.stad, 
                        data.land
                    );
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

            deleteLid: function(email){
                axios.post("leden/delete", {
                    "email": email,
                })
                .then(() => {
                    this.leden(
                        this.get.page,
                        this.get.naam, 
                        this.get.email,
                        this.get.min_geboortedatum,
                        this.get.max_geboortedatum,
                        this.get.soort_lid,
                        this.get.familie, 
                        this.get.adres, 
                        this.get.straat, 
                        this.get.stad, 
                        this.get.land
                    );
                    this.Toast("Lid succesvol gedelete", "success", 3000, "top");
                })
                .catch((error) => {
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                });
            },
            
            async deleteAlert(email, naam){
                const alert = await alertController.create({
                    header: "Let op!",
                    message: "Weet u zeker dat u " + naam + " wilt deleten?",
                    buttons: [
                        {
                            text: "Ja",
                            role: "confirm",
                            handler: () => {
                                this.deleteLid(email);
                            }
                        },
                        {
                            text: "Nee",
                            role: "cancel"
                        }
                    ]
                });

                await alert.present();
            },

            async LidUpdatenModal(id, naam){
                const modal = await modalController.create({
                    component: LedenModal,
                    componentProps: {
                        titel: naam + " updaten",
                        id: id,
                    }
                });

                modal.present();

                const {data, role} = await modal.onWillDismiss();

                if (role == "confirm"){
                    this.lidUpdaten(
                        id,
                        data.naam, 
                        data.email, 
                        data.geboortedatum, 
                        data.soortLid, 
                        data.familie, 
                        data.huisnummer, 
                        data.bijvoeging, 
                        data.straat, 
                        data.stad, 
                        data.land
                    );
                }
            },

            lidUpdaten: function(id, naam, email, geboortedatum, soortLid, familie, huisnummer, bijvoeging, straat, stad, land){
                axios.post("leden/update", {
                    "id": id,
                    "naam": naam,
                    "email": email,
                    "geboortedatum": geboortedatum,
                    "soortLid": soortLid,
                    "familie": familie,
                    "huisnummer": huisnummer,
                    "bijvoeging": bijvoeging,
                    "straat": straat,
                    "stad": stad,
                    "land": land,
                })
                .then(() => {
                    this.leden(
                        this.get.page,
                        this.get.naam, 
                        this.get.email,
                        this.get.min_geboortedatum,
                        this.get.max_geboortedatum,
                        this.get.soort_lid,
                        this.get.familie, 
                        this.get.adres, 
                        this.get.straat, 
                        this.get.stad, 
                        this.get.land
                    );
                    this.Toast("Lid succesvol aangepast", "success", 3000, "top");
                })
                .catch((error) => {
                    console.log(error)
                    this.Toast("Er is iets misgegaan", "danger", 3000, "top");
                });
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
            IonIcon,
            IonSelect,
            IonSelectOption,
        },

        props: {
            "get": Object
        },

        setup(){
            return {addOutline};
        }
    }
</script>

<style scoped>
    .leden-grid{
        min-width: v-bind(gridBreedte);
        --ion-grid-columns: v-bind(gridTotaal);
    }
</style>