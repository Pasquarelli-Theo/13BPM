<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/sfera_artiste.jpg"
      alt="image du rappeur Sfera Ebbasta"
    />
    <p class="mt-8 ml-5 mr-5 bg-white p-2 font-work-sans font-bold">
      Sfera Ebbasta, de son vrai nom Gionata Boschetti, né le 7 décembre 1992 à
      Sesto San Giovanni en Lombardie, est un rappeur italien. Aidé par son
      travail avec le producteur Charlie Charles, il est considéré comme l'un
      des pionniers de la trap en Italie. En France, le jeune rappeur se fait
      connaitre à la suite de son apparition dans Anarchie, le premier album de
      SCH sur le titre Cartine Cartier.<br />
      <br />Sfera devient mondialement connu avec son albume Rockstar sur lequel
      on retrouve notamment Quavo. Plus tard il collaborera avec d’autres
      artistes francophone comme Lacrim, Lous and the Yakuza ou Coyote Jo
      Bastard mais également des artistes internationaux tel que Offset, Future
      ou J Balvin.
    </p>
    <div class="flex place-content-center">
      <a href="https://fr-fr.facebook.com/sferaebbastaofficial" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/sferaebbasta/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/sferaebbasta" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCMG7SfUy9pOybrhXEhEkdVQ"
        target="_blank"
        ><img
          src="../../public/icones/youtube.png"
          alt="logo youtube"
          class="ml-5 w-12"
      /></a>
    </div>
    <div class="ml-28 dark:text-white flex">
      <ClockIcon class="w-8" />
      <p class="ml-2 font-viga">Grande scène</p>
    </div>
    <div class="ml-28 dark:text-white flex">
      <LocationMarkerIcon class="w-8" />
      <p class="ml-2 font-viga">Jour 1 - 22h30</p>
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
