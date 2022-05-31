<template>
  <div>
    <img
      class="w-full"
      src="/public/img/sch_partiste.jpg"
      alt="image du rappeur SCH"/>
    <p class="mt-8 ml-5 mr-5 bg-white p-2 font-work-sans font-bold">
      Julien Schwarzer plus connu sous le pseudonyme SCH est un rappeur français
      originaire de Marseille. Le rappeur d’origine allemande du côté de son
      père, s’inspire d’influences provenant des Etats-Unis comme Eminem et 50
      Cent mais également de Joe Dassin ou Elton John.<br />
      <br />À l’âge de 15 ans, il fait ses débuts dans le rap en postant la
      plupart de ses sons sur son blog personnel. Il publie quelques singles sur
      YouTube en 2014-2015, ce qui fait qu’il est remarqué par Lacrim, la star
      du rap français. Il intervient en 2015 sur la mixtape R.I.P.R.O Vol. 1 de
      ce dernier ; ce qui le propulsa dans sa carrière. Suite à sa mixtape
      sortie en 2015 grâce à laquelle il connaît le succès il deviennt un figure
      du rap français et réalise en 2021 le deuxième meilleur démarrage pour un
      album rap avec JULIUS 2 qui s’écoule à 63 851 exemplaires en une semaine.
    </p>
    <div class="flex place-content-center">
      <a href="https://fr-fr.facebook.com/schmathafack" target="_blank"
        ><img src="public/icones/facebook.png" alt="logo facebook" class="w-12"
      /></a>
      <a href="https://www.instagram.com/sch/?hl=fr" target="_blank"
        ><img
          src="public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/sch_mathafack" target="_blank"
        ><img
          src="public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCeBu6AFsaPVElhFzlj5hetg/videos?app=desktop"
        target="_blank"
        ><img
          src="public/icones/youtube.png"
          alt="logo youtube"
          class="ml-5 w-12"
      /></a>
    </div>
    <div class="ml-28 flex">
      <ClockIcon class="w-8" />
      <p class="ml-2 font-viga">Grande scène</p>
    </div>
    <div class="ml-28 flex">
      <LocationMarkerIcon class="w-8" />
      <p class="ml-2 font-viga">Jour 1 - 00h00</p>
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
