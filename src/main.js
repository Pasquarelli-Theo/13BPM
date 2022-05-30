import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

// Import fonction d'initialisation du SDK Firebase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
// const firebaseConfig = {
//     PLACE ICI VOTRE CONFIGURATION FIREBASE
// };

// Initialize Firebase
// const appFirebase = initializeApp(firebaseConfig);

createApp(App).mount("#app");

const app = createApp(App);

app.use(router);

app.mount("#app");
