import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from './router'

//Boostrap import
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

library.add(faPhone);

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.mount("#app");