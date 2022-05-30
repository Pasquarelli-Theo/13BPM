<template>
  <div class="bg-light_grey">
    <header class="sticky top-0 z-40 h-12 w-full bg-white px-3">
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
            <RouterLink to="/programme">Programmation</RouterLink>
            <RouterLink to="/artistes">Artistes</RouterLink>
            <RouterLink to="/festival">Le festival</RouterLink>
            <RouterLink to="/concert">Concert</RouterLink>
          </ul>
        </nav>
      </div>
    </header>
    <RouterView />
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
