<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/lujipeka_artiste.jpg"
      alt="image du rappeur Lujipeka"
    />
    <p class="mt-8 ml-5 mr-5 bg-white dark:text-white dark:bg-grey p-2 font-work-sans font-bold">
      Lujipeka, de son vrai nom Lucas Taupin, est né et a grandi à Rennes, en
      Bretagne et découvre le rap grâce à Booba et son single Pitbull. Luji
      commence dès 14 ans à composer des instru et c’est aulycée qu’il rencontre
      ceux avec qui il faudra le groupe Colombine notament Foda C et Lorenzo.<br />
      <br />Le groupe connait un grand succès de 2014 jusqu’à 2019 années durant
      laquelle le groupe se sépare. Depuis 2020 Lujipeka a démarré une carrière
      solo. Il a sorti un EP, P.E.K.A, une mixtape L.U.J.I et enfin l’album
      Montagnes Russes en 2021.
    </p>
    <div class="flex place-content-center">
      <a href="https://www.facebook.com/Lujipeka" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/lujipeka/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/luji357" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UC-4NatkpQeYGNjFY4brrJzw"
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
