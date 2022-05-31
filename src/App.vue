<template>
  <div class="bg-light_grey">
    <header class="sticky top-0 z-40 mt-2 h-12 w-full bg-white px-3">
      <div class="flex h-full w-full items-center justify-between">
        <div class="flex items-center">
          <RouterLink to="/">
            <div class="w-40">
              <img src="/icones/Logo.webp" alt="Logo 13BPM" />
            </div>
          </RouterLink>
        </div>
        <div class="lg:hidden">
          <MenuIcon class="w-8 cursor-pointer" @click="MenuOpen = !MenuOpen" />
        </div>
        <nav
          class="absolute left-0 top-0 h-screen w-full -translate-y-[200%] bg-red-100 pl-2 text-lg lg:relative lg:top-0 lg:w-fit lg:translate-y-0 lg:bg-transparent"
          :class="MenuOpen && 'translate-y-0'"
        >
        <XIcon
            class="float-right mr-2 mt-1 w-10 lg:hidden"
            @click="MenuOpen = !MenuOpen"
          />
          <ul
            class="text-blanc flex flex-col gap-8 py-4 font-bold uppercase lg:flex-row"
          >
          <RouterLink to="/Home"
              ><p
                class="ml-5 mb-6 mt-10 w-80 -rotate-6 bg-black font-archivo-black text-xl text-white"
              >
                ACCUEIL
              </p></RouterLink
            >
            <RouterLink to="/Programmation"
              ><p
                class="ml-5 mb-3 mt-3 w-80   rotate-6 bg-black font-archivo-black text-xl text-white"
              >
                PROGRAMMATION
              </p></RouterLink
            >
            <RouterLink to="/Artistes"
              ><p
                class="ml-5 mb-3 mt-3 w-80  bg-black font-archivo-black text-xl text-white"
              >
                ARTISTES
              </p></RouterLink
            >
            <RouterLink to="/Festival"
              ><p
                class="ml-5 mb-3 mt-3 w-80 -rotate-6 bg-black font-archivo-black text-xl text-white"
              >
                LE FESTIVAL
              </p></RouterLink
            >
            <RouterLink to="/Concert"
              ><p
                class="ml-5 mb-3 mt-3 w-80 rotate- bg-black font-archivo-black text-xl text-white"
              >
                CONCERTS
              </p></RouterLink
            >
            <RouterLink to="/Contact"
              ><p
                class="ml-5 mb-3 mt-3 w-80 -rotate-3 bg-black font-archivo-black text-xl text-white"
              >
                CONTACT
              </p></RouterLink
            >
          </ul>
        </nav>
      </div>
    </header>
    <RouterView />
    <footer class="mt-8 bg-red-100 text-white">
      <div class="flex place-content-center p-10">
        <RouterLink to="/">
          <img src="/icones/Logo_blanc.png" alt="Logo 13BPM"
        /></RouterLink>
      </div>
      <div class="flex place-content-center">
        <a href="https://fr-fr.facebook.com/" target="_blank"
          ><img
            src="public/icones/facebook_w.png"
            alt="logo facebook"
            class="mt-2 w-8"
        /></a>
        <a href="https://www.instagram.com/" target="_blank"
          ><img
            src="public/icones/instagram_w.png"
            alt="logo instagram"
            class="ml-5 mt-2 w-8"
        /></a>
        <a href="https://twitter.com/" target="_blank"
          ><img
            src="public/icones/twitter_w.png"
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
export default {
  name: "App",
  components: { MenuIcon, XIcon },
  data() {
    return { MenuOpen: false };
  },
};
</script>
