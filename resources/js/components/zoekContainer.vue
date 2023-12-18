<template>
    <div class="m-2 bg-secondary p-1">
        <h2>Zoeken</h2>
        <div>
            <slot></slot>
        </div>
        <div>
            <ion-button v-if="zoeken" @click="zoeken()">
                Zoeken
            </ion-button>
        </div>
        <div>
            <ion-button v-if="toevoegen" @click="toevoegen()">
                {{ toevoegenTitel }}
                <ion-icon :icon="addOutline"></ion-icon>
            </ion-button>
        </div>
    </div>
</template>

<script>
    import { 
        IonButton,
        IonIcon,
    } from "@ionic/vue";

    import { addOutline } from "ionicons/icons";

    export default({
        props: {
            toevoegen: Function,
            zoeken: Function,
            toevoegenTitel: String,
        },

        components: {
            IonButton,
            IonIcon,
        },

        setup(){
            return {addOutline};
        }
    })
</script>

