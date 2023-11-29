import './bootstrap';
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { IonicVue, IonApp } from '@ionic/vue';
import mitt from 'mitt';
import routes from "./routes.js";
import "@ionic/vue/css/core.css";
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

export default router;
const app = Vue.createApp();
app.use(router);
app.use(VueAxios, axios);
app.use(IonicVue);
require("./functions").functions(app);

window.axios = require("axios");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.interceptors.request.use(
    function (config){
        return config;
    },
    function (error){
        return Promise.reject(error);
    },
);
window.axios.interceptors.response.use(
    function (response){
        return response;
    },
    function (error){
        return Promise.reject(error);
    },
);

app.component("ion-app", IonApp);
app.component("ionic-menu", require("./components/menu.vue").default);

app.mount("#app");