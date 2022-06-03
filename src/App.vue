<template>
  <div class="bg-light_grey dark:bg-dark_grey">
    <header class="sticky top-0 z-40 h-16 w-full bg-white px-3">
      <div class="flex h-full w-full items-center justify-between">
        <div class="grid">
          <span v-if="avatar != null" class="mr-3">
            <img class="avatar h-10 w-auto" :src="avatar" />
            <RouterLink to="/" class="text-xs">{{ name }}</RouterLink>
          </span>
        </div>
        <div v-if="avatar != null" class="w-40">
          <RouterLink to="/">
            <img
              src="../public/icones/Logo.webp"
              alt="Logo Tafari"
              class="hidden"
            />
          </RouterLink>
        </div>
        <div v-else class="w-40">
          <RouterLink to="/">
            <img src="../public/icones/Logo.webp" alt="Logo 13BPM" />
          </RouterLink>
        </div>
        <div class="lg:hidden">
          <MenuIcon
            class="text-blanc w-8 cursor-pointer"
            @click="MenuOpen = !MenuOpen"
          />
        </div>

        <nav
          class="absolute left-0 top-0  h-screen w-full -translate-y-[200%] bg-red-100 pl-2 text-lg lg:relative lg:-top-16 lg:h-min lg:w-fit lg:translate-y-0 lg:bg-transparent"
          :class="MenuOpen && 'translate-y-0'"
        >
          <XIcon
            class="float-right mr-2 mt-3 w-10 lg:hidden"
            @click="MenuOpen = !MenuOpen"
          />
          <ul
            class="mt-32 ml-20 flex flex-col gap-8 py-4 font-archivo-black uppercase text-black md:text-black lg:flex-row lg:text-black"
          >
            <RouterLink to="/" class="transition-colors duration-150 hover:text-red-100 lg:hidden" @click="MenuOpen = !MenuOpen"
              >accueil</RouterLink
            >
            <RouterLink to="/Programmation" @click="MenuOpen = !MenuOpen"
              >programmation</RouterLink
            >
            <RouterLink to="/Artistes" @click="MenuOpen = !MenuOpen"
              >artistes</RouterLink
            >
            <RouterLink to="/Festival" @click="MenuOpen = !MenuOpen"
              >le festival</RouterLink
            >
            <RouterLink to="/Concert" @click="MenuOpen = !MenuOpen"
              >concert</RouterLink
            >
            <RouterLink to="/Contact" @click="MenuOpen = !MenuOpen"
              >contact</RouterLink
            >
            <RouterLink to="/compte" @click="MenuOpen = !MenuOpen"
              >compte</RouterLink
            >
            <RouterLink to="/chat" @click="MenuOpen = !MenuOpen"
              >chat</RouterLink
            >
          </ul>
        </nav>
      </div>
    </header>
    <RouterView />
    <footer class="mt-8 bg-red-100 text-white">
      <div class="flex place-content-center p-10">
        <RouterLink to="/">
          <img src="../public/icones/Logo_blanc.png" alt="Logo 13BPM"
        /></RouterLink>
      </div>
      <div class="flex place-content-center">
        <a href="https://fr-fr.facebook.com/" target="_blank"
          ><img
            src="../public/icones/facebookw.png"
            alt="logo facebook"
            class="mt-2 w-8"
        /></a>
        <a href="https://www.instagram.com/" target="_blank"
          ><img
            src="../public/icones/instagram_w.png"
            alt="logo instagram"
            class="ml-5 mt-2 w-8"
        /></a>
        <a href="https://twitter.com/" target="_blank"
          ><img
            src="../public/icones/twitter_w.png"
            alt="logo twitter"
            class="ml-5 mt-3 w-8"
        /></a>
      </div>
      <div class="flex place-content-center text-base">
        <RouterLink to="/Contact"><p class="m-5">Contact</p></RouterLink>
        <RouterLink to="/MentionsLegales"
          ><p class="m-5">Mentions légales</p></RouterLink
        >
      </div>
    </footer>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
// Fonctions Storage
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
// Import emetteur de main.js
import { emitter } from "./main.js";
export default {
  name: "App",
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      MenuOpen: false,
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté
      name: "Vidéo", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
    };
  },
  mounted() {
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();
    // Ecoute de l'évènement de connexion
    emitter.on("connectUser", (e) => {
      // Récupération du user
      this.user = e.user;
      console.log("App => Reception user connecté", this.user);
      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);
    });
    // Ecoute de l'évènement de deconnexion
    emitter.on("deConnectUser", (e) => {
      // Récupération user
      this.user = e.user;
      console.log("App => Reception user deconnecté", this.user);
      // Réinitialisation infos complémentaires user
      this.userInfo = null;
      this.name = "Vidéo";
      this.avatar = null;
      this.isAdmin = false;
    });
  },
  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },
    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>

<style>
/* Import Styles application */
@import "./assets/style.css";

.avatar {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>
