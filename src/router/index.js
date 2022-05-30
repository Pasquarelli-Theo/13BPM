import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Programmation from "../views/Programmation.vue";
import Artistes from "../views/Artistes.vue";
import Festival from "../views/Festival.vue";
import Concert from "../views/Concert.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/Programmation", name: "Programmation", component: Programmation },
    { path: "/Artistes", name: "Artistes", component: Artistes },
    { path: "/Festival", name: "Festival", component: Festival },
    { path: "/Concert", name: "Concert", component: Concert },
  ],
});

export default router;
