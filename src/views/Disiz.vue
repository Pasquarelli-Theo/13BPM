<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/disiz_artiste.jpg"
      alt="image du rappeur Disiz"
    />
    <p class="mt-8 ml-5 mr-5 bg-white dark:text-white dark:bg-grey p-2 font-work-sans font-bold">
      Disiz ou Disiz la Peste, de son vrai nom Sérigne M'Baye Gueye, né le 22
      mars 1978 à Amiens est un rappeur, écrivain et comédien français. Il
      publie son premier album Le Poisson rouge, le 23 octobre 2000, qui
      contient le single J'pète les plombs inspiré, un très grand succès à la
      vente avec 500 000 singles vendus.<br />
      <br />Le 26 mars 2012 il entame la trilogie Lucide avec l’EP Lucide, puis
      Extra-Lucide la même années et enfin Transe-Lucide en 2014. Après une
      pause de 4 ans Disiz revient avec l’album Amour, un album presque sans rap
      qui marque un tournant et probablement la fin du rap pour l’ancien Disiz
      la Peste.
    </p>
    <div class="flex place-content-center">
      <a href="https://www.facebook.com/DisizFr" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/disizfr/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/Disizfr" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/c/DisizFr"
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
      <p class="ml-2 font-viga">Jour 2 - 19h00</p>
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
