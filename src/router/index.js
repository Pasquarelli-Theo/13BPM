import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Programmation from "../views/Programmation.vue";
import ProgrammationJ1 from "../views/ProgrammationJ1.vue";
import ProgrammationJ2 from "../views/ProgrammationJ2.vue";
import Artistes from "../views/Artistes.vue";
import Festival from "../views/Festival.vue";
import Concert from "../views/Concert.vue";
import ConcertJ1 from "../views/ConcertJ1.vue";
import ConcertJ2 from "../views/ConcertJ2.vue";
import ConcertGS from "../views/ConcertGS.vue";
import ConcertPS from "../views/ConcertPS.vue";
import SCH from "../views/SCH.vue";
import Damso from "../views/Damso.vue";
import Dinos from "../views/Dinos.vue";
import Sfera from "../views/Sfera.vue";
import Lefa from "../views/Lefa.vue";
import Luv from "../views/Luv.vue";
import Disiz from "../views/Disiz.vue";
import Leto from "../views/Leto.vue";
import Lujipeka from "../views/Lujipeka.vue";
import Nahir from "../views/Nahir.vue";
import Ziak from "../views/Ziak.vue";
import Roshi from "../views/Roshi.vue";
import Capo from "../views/Capo.vue";
import Coyote from "../views/Coyote.vue";
import mojixsboy from "../views/mojixsboy.vue";
import Bakari from "../views/Bakari.vue";
import MentionsLegales from"../views/MentionsLegales.vue";
import Contact from "../views/Contact.vue";
import Page404 from "../views/Page404.vue";
import compte from "../views/commte.vue";
import chat from "../views/chat.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/Programmation", name: "Programmation", component: Programmation },
    {
      path: "/ProgrammationJ1",
      name: "ProgrammationJ1",
      component: ProgrammationJ1,
    },
    {
      path: "/ProgrammationJ2",
      name: "ProgrammationJ2",
      component: ProgrammationJ2,
    },
    { path: "/Artistes", name: "Artistes", component: Artistes },
    { path: "/Festival", name: "Festival", component: Festival },
    { path: "/Concert", name: "Concert", component: Concert },
    { path: "/ConcertJ1", name: "ConcertJ1", component: ConcertJ1 },
    { path: "/ConcertJ2", name: "ConcertJ2", component: ConcertJ2 },
    { path: "/ConcertGS", name: "ConcertGS", component: ConcertGS },
    { path: "/ConcertPS", name: "ConcertPS", component: ConcertPS },
    { path: "/SCH", name: "SCH", component: SCH },
    { path: "/Damso", name: "Damso", component: Damso },
    { path: "/Dinos", name: "Dinos", component: Dinos },
    { path: "/Sfera", name: "Sfera", component: Sfera },
    { path: "/Lefa", name: "Lefa", component: Lefa },
    { path: "/Luv", name: "Luv", component: Luv },
    { path: "/Disiz", name: "Disiz", component: Disiz },
    { path: "/Leto", name: "Leto", component: Leto },
    { path: "/Lujipeka", name: "Lujipeka", component: Lujipeka },
    { path: "/Nahir", name: "Nahir", component: Nahir },
    { path: "/Ziak", name: "Ziak", component: Ziak },
    { path: "/Roshi", name: "Roshi", component: Roshi },
    { path: "/Capo", name: "Capo", component: Capo },
    { path: "/Coyote", name: "Coyote", component: Coyote },
    { path: "/mojixsboy", name: "mojixsboy", component: mojixsboy },
    { path: "/Bakari", name: "Bakari", component: Bakari },
    {
      path: "/MentionsLegales",
      name: "MentionsLegales",
      component: MentionsLegales,
    },
    { path: "/Contact", name: "Contact", component: Contact },
    { path: "/:pathMatch(.*)*", name: "Page404", component: Page404 },
    { path: "/compte", name: "compte", component: compte },
    { path: "/chat", name: "chat", component: chat },
  ],
});

export default router;
