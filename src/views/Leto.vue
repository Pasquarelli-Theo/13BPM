<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/leto_artiste.jpg"
      alt="image du rappeur Leto"
    />
    <p class="mt-8 ml-5 mr-5 bg-white dark:text-white dark:bg-grey p-2 font-work-sans font-bold">
      De son vrai nom Henoc Pierrick Bofenda, Leto est un artiste-rappeur
      français très connu aujourd’hui dans l’industrie du rap français. Grâce au
      groupe PSO Thug, qu’il a fondé avec son autre compère Aéro, il s’est
      révélé aux mélomanes avant de se frayer son propre chemin en carrière
      solo. Le moins que l’on puisse dire de lui est qu’il parvient à conquérir
      le cœur de son public.
      <br />
      <br />Bien que connu pour ses mélodies, Leto est également un kickeur de
      talent ce qu’il prouve à travers ses derniers albums 100 Visages et 17%.
      Il a également déjà collaboré avec de grands noms du rap français comme
      SCH, Ninho ou Hamza.
    </p>
    <div class="flex place-content-center">
      <a href="https://www.instagram.com/letopsothug/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/Leto_PSOTHUG" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://www.youtube.com/channel/UCP9zhgBhlIwgF5UEf3Pmj8Q" target="_blank"
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
