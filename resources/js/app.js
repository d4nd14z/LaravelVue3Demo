import { createApp } from "vue";
import router from "./router.js";
import App from "../App.vue";
import Test from "../components/Test.vue"; //Importar el componente adicional
import Navbar from "../components/Navbar.vue"; 

const myApp = createApp(App);
myApp.component('test', Test);  //Declarar el componente adicional e indicar que se trata de un componente
myApp.component('navbar', Navbar);
myApp.use(router)
myApp.mount("#app");