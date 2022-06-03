import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

// Import de mitt
import mitt from "mitt";

// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDd082mLyEptggdGIDYBYdR00aBJd-XhTo",
  authDomain: "pbm-70891.firebaseapp.com",
  projectId: "pbm-70891",
  storageBucket: "pbm-70891.appspot.com",
  messagingSenderId: "922721127205",
  appId: "1:922721127205:web:2ab4b58b00d35ed0c2a8cc",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App);

// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router);

app.mount("#app");
