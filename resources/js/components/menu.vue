<template>
    <ion-split-pane when="xs" content-id="main-content">
        <ion-menu content-id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-title>
                            {{ this.user.name }}
                    </ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <div>
                    <ion-button expand="block" color="secondary" @click="logout">Uitloggen</ion-button>
                </div>
                <ion-list>
                    <ion-item>
                        <router-link to="/app/leden">leden</router-link>
                    </ion-item>
                    <ion-item>
                        <router-link to="/app/contributies">contributies</router-link>
                    </ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-page id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-title>
                        Leden-Administratie
                    </ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <slot></slot>
            </ion-content>
            <ion-footer>
                <ion-toolbar>
                    <ion-title>
                        &copy; Patrique Fernando van den Boom 2023
                    </ion-title>
                </ion-toolbar>
            </ion-footer>
        </ion-page>
    </ion-split-pane>
</template>

<script>
    import { 
        IonMenu,
        IonHeader,
        IonFooter,
        IonLabel,
        IonItem,
        IonBadge,
        IonButton,
        IonContent,
        IonList,
        IonPage,
        IonTitle,
        IonToolbar,
        IonSplitPane,
     } from "@ionic/vue";
    import axios from "axios";

    export default({
        props: {
            "user": Array,
        },
        methods: {
            logout: function(){
                axios.post("app/logout")
                .then(function(){
                    window.location.replace("/");
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },
        components: {
            IonMenu,
            IonHeader,
            IonFooter,
            IonLabel,
            IonItem,
            IonBadge,
            IonButton,
            IonContent,
            IonList,
            IonPage,
            IonTitle,
            IonToolbar,
            IonSplitPane,
        }
     })
</script>