<template>
    <div class="d-flex justify-content-center">
        <ion-button v-if="this.get.pagina > 1" @click="veranderPagina(this.get.pagina - 1)">
            <ion-icon :icon="chevronBackOutline"></ion-icon>
            Vorige
        </ion-button>
        <ion-select class="d-inline w-25 border" :value="(this.get.pagina ? Number(this.get.pagina) : 1)" @ionChange="veranderPagina($event.detail.value)">
            <ion-select-option v-for="n in this.laatstePagina" :value="n">
                {{ n }}
            </ion-select-option>
        </ion-select>
        <ion-button v-if="(this.get.pagina < this.laatstePagina || !this.get.pagina) && this.laatstePagina > 1" @click="veranderPagina((this.get.pagina ? this.get.pagina + 1 : 2))">
            Volgende
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
        </ion-button>
    </div>
</template>

<script>
    import { 
        IonSelect,
        IonSelectOption,
        IonButton,
        IonIcon,
    } from "@ionic/vue";

    import { 
        chevronBackOutline,
        chevronForwardOutline, 
    } from "ionicons/icons"

    export default({
        components: {
            IonSelect,
            IonSelectOption,
            IonButton,
            IonIcon,
        },

        methods: {
            veranderPagina: function(pagina){
                this.get.pagina = pagina;
                this.redirectWithParams(location.protocol + "//" + location.host + location.pathname, this.get);
            }
        },

        mounted(){
            console.log(this.get.pagina);
        },

        props:{
            "get": {
                "pagina": ""
            },
            "laatstePagina": Number,
        },

        setup(){
            return {
                chevronBackOutline,
                chevronForwardOutline,
            };
        }
    });
</script>