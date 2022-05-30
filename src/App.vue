<template>
  <div class="bg-light_grey">
    <header class="sticky top-0 z-40 h-12 w-full bg-white mt-3 px-3">
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
          class="bg-vert absolute left-0 top-16 w-full -translate-y-[200%] pl-2 text-lg lg:relative lg:top-0 lg:w-fit lg:translate-y-0 lg:bg-transparent"
          :class="MenuOpen && 'translate-y-0'"
        >
          <ul
            class="text-blanc flex flex-col gap-8 py-4 font-bold uppercase lg:flex-row"
          >
            <RouterLink to="/Programmation">Programmation</RouterLink>
            <RouterLink to="/Artistes">Artistes</RouterLink>
            <RouterLink to="/Festival">Le festival</RouterLink>
            <RouterLink to="/Concert">Concert</RouterLink>
          </ul>
        </nav>
      </div>
    </header>
    <RouterView />
    <footer class="bg-red-100 text-white">
      <div class="flex place-content-center">
      <a href="https://fr-fr.facebook.com/" target="_blank"
        ><img src="public/icones/facebook_w.png" alt="logo facebook" class="w-8 mt-2"
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
    <div class=" flex place-content-center text-base">
      <RouterLink to="/Contact"><p class="m-5">Contact</p></RouterLink>
      <RouterLink to="/MentionsLegales"><p class="m-5">Mentions légales</p></RouterLink>
    </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>
