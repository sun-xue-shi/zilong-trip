import { createApp } from "vue";
import { createPinia } from "pinia";
import "virtual:uno.css";

import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.css";
import router from "./router";

createApp(App).use(router).use(createPinia()).mount("#app");
