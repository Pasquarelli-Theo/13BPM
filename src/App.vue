<template>
  <div class="bg-light_grey">
    <header class="sticky top-0 z-40 h-16 w-full bg-white px-3">
      <div class="flex h-full w-full items-center justify-between">
        <div class="flex items-center">
          <RouterLink to="/">
            <div class="w-40">
              <img src="../public/icones/Logo.webp" alt="Logo Tafari" />
            </div>
          </RouterLink>
        </div>
        <div class="lg:hidden">
          <MenuIcon class="w-8 cursor-pointer" @click="MenuOpen = !MenuOpen" />
        </div>
        <nav
          class="absolute left-0 top-0 h-screen w-full -translate-y-[200%] bg-red-100 pl-2 text-lg lg:relative lg:-top-16 lg:h-min lg:w-fit lg:translate-y-0 lg:bg-transparent"
          :class="MenuOpen && 'translate-y-0'"
        >
          <XIcon
            class="float-right mr-2 mt-3 w-10 lg:hidden"
            @click="MenuOpen = !MenuOpen"
          />
          <ul
            class="mt-32 ml-20 flex flex-col gap-8 py-4 font-bold uppercase text-white md:text-black lg:flex-row lg:text-black"
          >
            <RouterLink
              to="/"
              class="lg:hidden"
              @click="MenuOpen = !MenuOpen"
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
import { MenuIcon } from "@heroicons/vue/outline";
import { XIcon } from "@heroicons/vue/outline";
import { ref } from "vue";
const menuVisible = ref(true);
export default {
  name: "App",
  components: { MenuIcon, XIcon },
  data() {
    return { MenuOpen: false };
  },
};
</script>
