<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/roshi_artiste.jpg"
      alt="image du rappeur Captaine Roshi"
    />
    <p class="mt-8 ml-5 mr-5 bg-white dark:text-white dark:bg-grey p-2 font-work-sans font-bold">
      Captaine Roshi a grandi au Congo avant de débarquer en France à l’âge de
      11 ans pour suivre sa mère et son frère malade. Trimballé d’hôtel en hôtel
      il s’évade de sa chambre en se construisant un monde imaginaire érigé
      autour des jeux vidéo et des mangas. Rapidement le rap deviendra une
      troisième alternative.<br />
      <br />Captaine Roshi a un style très identifiable de par sa voix cassé,
      ses flow et ses gimmicks uniques parfois inspirés de la pop culture. Des
      gimmicks qui contrastent avec les paroles crus et les prods traps de ses
      titres.
    </p>
    <div class="flex place-content-center">
      <a href="https://www.facebook.com/CaptaineRoshi9/" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/captaine.roshi/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/captaineroshi" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCFBYWlRe1XabmimvGhG3IFA"
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
      <p class="ml-2 font-viga">Jour 2 - 21h30</p>
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
