<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/nahir_artiste.jpg"
      alt="image du rappeur Nahir"
    />
    <p class="mt-8 ml-5 mr-5 bg-white dark:text-white dark:bg-grey p-2 font-work-sans font-bold">
      Rappeur français d’origine algérienne et congolaise, Nahir vient de
      Bobigny en Seine Saint Denis. Il découvre le rap à neuf ans grâce aux
      grands du quartier et fonde un groupe à seulement 11 ans. En 2018 il
      réalise un featuring important avec Key Largo.
      <br />
      <br />Nahir se fait remarquer grâce à ses talents de kickeur notamment sur
      de drill. Malgré son jeune âge il a déjà réalisé plusieurs gros featuring
      dont Freeze Corleone et Lacrim et à déjà sorti 2 albums et une série de
      freestyles.
    </p>
    <div class="flex place-content-center">
      <a href="https://www.facebook.com/NahirLEDG/" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/nahirofficiel/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/Nahirofficiel" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCU4bVhtI3RX-HwBBaZMfOcA"
        target="_blank"
        ><img
          src="../../public/icones/youtube.png"
          alt="logo youtube"
          class="ml-5 w-12"
      /></a>
    </div>
    <div class="ml-28 dark:text-white flex">
      <ClockIcon class="w-8" />
      <p class="ml-2 font-viga">Petite scène</p>
    </div>
    <div class="ml-28 dark:text-white flex">
      <LocationMarkerIcon class="w-8" />
      <p class="ml-2 font-viga">Jour 2 - 22h30</p>
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
