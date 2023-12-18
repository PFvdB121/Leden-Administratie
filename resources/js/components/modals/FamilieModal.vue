<template>

</template>

<script>
    import { 
        modalController,
        IonAccordion,
        IonAccordionGroup,
        IonList,
        IonItem,
        IonInput,
        IonHeader,
        IonContent,
        IonTitle,
        IonToolbar,
        IonButton,
        IonButtons,
     } from "@ionic/vue";
    export default({
        name: "FamilieModal",
        props: {
            id: Number,
        },
        data(){
            return {
                land: "",
                stad: "",
                straat: "",
                huisnummer: "",
                bijvoeging: "",
            }
        },
        components: {
            IonAccordion,
            IonAccordionGroup,
            IonList,
            IonItem,
            IonInput,
            IonHeader,
            IonContent,
            IonTitle,
            IonToolbar,
            IonButton,
            IonButtons,
        }
    });
</script>