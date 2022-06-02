<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/coyote_artiste.jpg"
      alt="image du rappeur Coyote Jo Bastard"
    />
    <p class="mt-8 ml-5 mr-5 bg-white dark:text-white dark:bg-grey p-2 font-work-sans font-bold">
      Coyote Jo Bastard, de son vrai prénom Jonathan, est un rappeur français
      originaire de Paris dans le 17ème. S’il commence à se faire une place au
      sein du rap game français, il a également un sacré pied dans le milieu
      italien. Avec plusieurs collaborations avec Sfera Ebbasta et DrefGold.
      Mais aussi avec Leto, Laylow et Guy2BezBar. Productif et créatif Coyote Jo
      Bastard va sans nul doute prendre de plus en plus d’importance dans le
      paysage du rap français.
    </p>
    <div class="flex place-content-center">
      <a href="https://www.facebook.com/profile.php?id=100057750833796" target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/bastard_jo/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/bastardjo_" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCTD33oqha2In308IjllxgwA"
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
      <p class="ml-2 font-viga">Jour 1 - 19h00</p>
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
