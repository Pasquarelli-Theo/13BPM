import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {

    apiKey: "AIzaSyDd082mLyEptggdGIDYBYdR00aBJd-XhTo",

    authDomain: "pbm-70891.firebaseapp.com",

    projectId: "pbm-70891",

    storageBucket: "pbm-70891.appspot.com",

    messagingSenderId: "922721127205",

    appId: "1:922721127205:web:2ab4b58b00d35ed0c2a8cc"

  };
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

createApp(App).mount("#app");

const app = createApp(App);

app.use(router);

app.mount("#app");
