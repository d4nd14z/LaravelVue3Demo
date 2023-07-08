import { createWebHistory, createRouter } from "vue-router";
import home from "../pages/Home.vue";
import login from "../pages/Login.vue";
import register from "../pages/Register.vue";

const routes = [
    { path: '/', name: 'Home', component: home },
    { path: '/login', name: 'Login', component: login },
    { path: '/register', name: 'Register', component: register }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;