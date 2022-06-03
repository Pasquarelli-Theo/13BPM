<template>
  <div>
    <img
      class="w-full"
      src="/img/ziak_artiste.jpg"
      alt="image du rappeur Ziak"
    />
    <p class="mt-8 ml-5 mr-5 bg-white p-2 font-work-sans font-bold">
      Ziak est un rappeur français extrêmement mystérieux, en effet nous ne
      connaissons rien de lui. Le rappeur au bandanna a posté ses premiers clips
      sur Youtube en 2020 et il y a directement montré son univers sombre,
      agressif et menaçant. Après avoir sorti quelques single, Ziak a dévoilé
      son premier album Akimbo en 2021 et réalise le dixième meilleur démarrage
      de 2021 pour un album de rap français avec 18 766 exemplaires en une
      semaine.
    </p>
    <div class="flex place-content-center">
      <a href="https://www.facebook.com/Ziakimbo/" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/ziakimbo/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/ZiakimboCC" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://www.youtube.com/c/ZiakCC" target="_blank"
        ><img
          src="../../public/icones/youtube.png"
          alt="logo youtube"
          class="ml-5 w-12"
      /></a>
    </div>
    <div class="ml-28 flex dark:text-white">
      <ClockIcon class="w-8" />
      <p class="ml-2 font-viga">Grande scène</p>
    </div>
    <div class="ml-28 flex dark:text-white">
      <LocationMarkerIcon class="w-8" />
      <p class="ml-2 font-viga">Jour 2 - 20h00</p>
    </div>
  </div>
</template>

<script>
import { ClockIcon, LocationMarkerIcon } from "@heroicons/vue/outline";
export default {
  name: "App",
  components: {
    ClockIcon,
    LocationMarkerIcon,
  },

  data() {
    return {};
  },
};
</script>
