import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import LandingPage from "./views/LandingPage.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import About from "./views/About.vue";
import "./lib/firebase";
import "./index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "LandingPage", component: LandingPage },
    { path: "/login", name: "Login", component: Login },
    { path: "/signup", name: "Signup", component: Signup },
    { path: "/about", name: "About", component: About },
  ],
});

createApp(App).use(router).use(createPinia()).mount("#app");
