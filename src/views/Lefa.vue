<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/lefa_artiste.jpg"
      alt="image du rappeur Lefa"
    />
    <p class="mt-8 ml-5 mr-5 bg-white dark:text-white dark:bg-grey p-2 font-work-sans font-bold">
      Lefa, de son vrai nom Abdel Karim Fall, né le 28 novembre 1985 à Paris,
      est un rappeur français. Il est un des fondateurs et membre du collectif
      de rappeurs parisiens Sexion d'assaut. Absent depuis 2012, Lefa revient en
      juin 2015 et sort son premier album solo, Monsieur Fall, le 29 janvier
      2016, qui est certifié disque d'or quelques mois après sa sortie.<br />
      <br />Lefa est connu pour être talentueux dans tous les domaines. Il est
      aussi réputé pour sa plume que pour sa technicité et ses flow. Depuis son
      retour en 2016 Lefa a sorti chaque années de nouveaux projets avec un
      univers toujours plus marqué.
    </p>
    <div class="flex place-content-center">
      <a href="https://fr-fr.facebook.com/LEFAauthentique/" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/lefaauthentique/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/lefaauthentique" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCnKCBjL2VJipAhyz6n2AeOg"
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
