import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import LandingPage from "./views/LandingPage.vue";
import About from "./views/About.vue";
import "./lib/firebase";
import "./index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "LandingPage", component: LandingPage },
    { path: "/about", name: "About", component: About },
  ],
});

createApp(App).use(router).use(createPinia()).mount("#app");
