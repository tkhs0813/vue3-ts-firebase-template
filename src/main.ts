import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import "./lib/firebase";
import "./index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
  ],
});

createApp(App).use(router).use(createPinia()).mount("#app");
