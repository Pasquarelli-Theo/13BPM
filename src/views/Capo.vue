<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/capo_artiste.jpg"
      alt="image du rappeur Capo Plaza"
    />
    <p class="mt-8 ml-5 mr-5 dark:text-white dark:bg-grey bg-white p-2 font-work-sans font-bold">
      Capo Plaza, de son vrai nom Luca D'Orso, né le 20 avril 1998 à Salerne en
      Campanie, est un rappeur italien. Il écrit ses premiers textes en 2011 à
      13 ans, il crée sa chaîne Youtube en 2013 pour y poster ses clips sous le
      nom de Capo Plaza en références à ses graffitis.
      <br />
      <br />Depuis 2015 il a enchaîné les succès grâce à ses textes matures sur
      son vécu difficile et son envie de réussir. À seulement 24 ans Capo a déjà
      collaboré avec de nombreux artistes comme Sfera Ebbasta ou Gué Pequeno en
      Italie mais aussi Aya Nakamura, SCH et Ninho.
    </p>
    <div class="flex place-content-center">
      <a href="https://www.facebook.com/CapoPlaza" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/capoplaza/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/Capo_Plaza" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCpzFPW_8KhW7M10biWXS5lg"
        target="_blank"
        ><img
          src="../../public/icones/youtube.png"
          alt="logo youtube"
          class="ml-5 w-12"
      /></a>
    </div>
    <div class="ml-28 flex">
      <ClockIcon class="w-8" />
      <p class="ml-2 font-viga">Petite scène</p>
    </div>
    <div class="ml-28 flex">
      <LocationMarkerIcon class="w-8" />
      <p class="ml-2 font-viga">Jour 1 - 21h30</p>
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
