import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from '@/store'

const app = createApp(App);
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import VueAxios from 'vue-axios'
import axios from '@/axios'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}


app.use(router)
    .use(ElementPlus)
    .use(VueAxios, axios)
    .use(store)
    .mount("#app");

