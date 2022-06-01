<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/dinos_artiste.jpg"
      alt="image du rappeur SCH"
    />
    <p class="mt-8 ml-5 mr-5 bg-white p-2 font-work-sans font-bold">
      Dinos, de son vrai nom Jules Jomby, né à Douala capitale économique du
      Cameroun, quitte son pays natale pour la France à l’âge de 4 ans, il passe
      son enfance au quartier des “4 000” à La Courneuve. En parallèle du succès
      de ses apparitions au Rap Contenders, il lance un projet dénommé Thumps
      Up, en 2011 et commence à se faire connaître son EP Apparence en 2015 et
      son single Namek.<br />
      <br />Dinos est un rappeur qui se base sur des morceaux principalement
      mélancoliques mais aussi des musiques rythmées, cette différence s’est
      principalement fait ressentir dans l’album Imany Deluxe. Les sujets variés
      portent à la réflexion, notamment sur la religion, les déceptions
      amoureuses ou encore l’environnement dans lequel on vit, orchestré par la
      société.
    </p>
    <div class="flex place-content-center">
      <a href="https://fr-fr.facebook.com/DinosOfficiel/" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/dinospichichi/?hl=fr " target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/PunchyDinos?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCjxmwiojC51I3AxgM1h7ROQ"
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
      <p class="ml-2 font-viga">Jour  - 22h30</p>
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
