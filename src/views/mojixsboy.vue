<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/mojixsboy_artiste.jpg"
      alt="image des rappeurs Moji x Sboy"
    />
    <p class="mt-8 ml-5 mr-5 bg-white dark:text-white dark:bg-grey p-2 font-work-sans font-bold">
      Moji et Sboy sont deux amis d’enfance qui ont grandi ensemble à Liège en
      Belgique. Il se lance dans le rap en formant un duo et post fin 2018,
      alors à peine majeurs, leur tout premier freestyle. Très inspiré par le
      rap américains ils puissent dans le Rap Emo, le Punk Rap ou encore le
      Lo-Fi.<br />
      <br />Leur univers mélancolique à conquis de plus en plus d’auditeur
      depuis les dernières années et avec leur projet Temps d’Aime.
    </p>
    <div class="flex place-content-center">
      <a
        href="https://www.facebook.com/mojisboyoff"
        target="_blank"
        ><img
          src="../../public/icones/facebook.png"
          alt="logo facebook"
          class="w-12"
      /></a>
      <a href="https://www.instagram.com/moji.sboy/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCxuPVeIsOG3jS8PVzE067iQ"
        target="_blank"
        ><img
          src="../../public/icones/youtube.png"
          alt="logo youtube"
          class="ml-5 w-12"
      /></a>
    </div>
    <div class="ml-28 dark:text-white flex">
      <ClockIcon class="w-8" />
      <p class="ml-2 font-viga">Petite scène</p>
    </div>
    <div class="ml-28 dark:text-white flex">
      <LocationMarkerIcon class="w-8" />
      <p class="ml-2 font-viga">Jour 1 - 20h00</p>
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
