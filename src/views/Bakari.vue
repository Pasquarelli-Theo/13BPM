<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/bakari_artiste.jpg"
      alt="image du rappeur Bakari"
    />
    <p class="mt-8 ml-5 mr-5 bg-white p-2 font-work-sans font-bold">
      Né durant l’année 1996 au Congo Bakari est arrivé en Belgique à l’âge de 7
      ans, il est tout de suite baigné dans la musique grâce à ses parents qui
      laissent tourner les CD de Bob Marley et Koffi Olomidé. C’est à l’âge de
      10 ans que Bakari découvre le rap avec Booba puis avec le rap
      américain.<br />
      <br />Bakari à actuellement sortie 4 projets, Kaléidoscope et Sur écoute :
      Saison 1, 2 et 3. Des projets dans lesquels il montre ses talent avec des
      flow mélodique et quelques titres plus kické.
    </p>
    <div class="flex place-content-center">
      <a href="https://www.facebook.com/lordbak/" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/bakari.4/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/bakari_4" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCAVKTUk2nhuxisCa1tYwuFQ"
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
