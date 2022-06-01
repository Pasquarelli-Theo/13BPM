<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/damso_artiste.jpg"
      alt="image du rappeur Damso"
    />
    <p class="mt-8 ml-5 mr-5 bg-white p-2 font-work-sans font-bold">
      Né le 10 mai 1992 à Kinshasa, William Kalumbi A.K.A Damso est un
      rappeur-beatmaker belgo-congolais. Ses parents ont fui la République
      démocratique du Congo en conflit armé et s’installent à Bruxelles quand il
      avait neuf ans. Damso commence le rap en 2006 avec son groupe O.P.G.
      Pourtant, c’est en solo avec sa première mixtape Salle d’Attente en 2014
      qu’il se révèle au grand public. Très vite, il est remarqué par Booba et
      leur collaboration sur Pinnochio en 2015, finit par convaincre tout le
      monde de son talent.
      <br />
      <br />Damso est monté en puissance depuis sa signature chez Universal en
      2016. Il est le rappeur le plus écouté au monde sur Spotify avec 14
      millions de streamings en 24 heures. Damso se démarque par son rap
      anxieux, mélancolique et la profondeur de ses textes sombres et parfois
      outranciers. Le tout avec des figures de style qui révolutionnent le rap
      francophone.
    </p>
    <div class="flex place-content-center">
      <a href="https://fr-fr.facebook.com/schmathafack" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://fr-fr.facebook.com/THEDAMSO" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/thedamso?lang=fr" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCxsYR3_7CKZeRfdJpqGxmdw"
        target="_blank"
        ><img
          src="../../public/icones/youtube.png"
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
      <p class="ml-2 font-viga">Jour 2 - 00h00</p>
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
