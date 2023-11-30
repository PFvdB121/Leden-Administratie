<template>
    <div class="d-flex justify-content-center">
        <ion-button v-if="this.get.page > 1" @click="veranderPagina(this.get.page - 1)">
            <ion-icon :icon="chevronBackOutline"></ion-icon>
            Vorige
        </ion-button>
        <ion-select class="d-inline w-25 border" :value="(this.get.page ? Number(this.get.page) : 1)" @ionChange="veranderPagina($event.detail.value)">
            <ion-select-option v-for="n in this.laatstePagina" :value="n">
                {{ n }}
            </ion-select-option>
        </ion-select>
        <ion-button v-if="(this.get.page < this.laatstePagina || !this.get.page) && this.laatstePagina > 1" @click="veranderPagina((this.get.page ? Number(this.get.page) + 1 : 2))">
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
        updated(){
            if (this.get.page > this.laatstePagina) {
                this.veranderPagina(this.laatstePagina);
            }
        },

        components: {
            IonSelect,
            IonSelectOption,
            IonButton,
            IonIcon,
        },

        methods: {
            veranderPagina: function(pagina){
                this.get.page = pagina;
                this.redirectWithParams(location.protocol + "//" + location.host + location.pathname, this.get);
            }
        },

        props:{
            "get": Object,
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