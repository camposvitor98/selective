import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import store from "./store";

import "@/styles/globals.scss";

library.add(fas);

createApp(App)
  .use(router)
  .use(store)
  .component("fa-icon", FontAwesomeIcon)
  .mount("#app");
