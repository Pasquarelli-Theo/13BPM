<template>
  <div>
    <img
      class="w-full"
      src="../../public/img/luv_artiste.jpg"
      alt="image du rappeur SCH"
    />
    <p class="mt-8 ml-5 mr-5 bg-white p-2 font-work-sans font-bold">
      Luv Resval est né le 6 janvier 1998 et a grandit dans l’Essonne. Très
      jeune, il se met au rap avec des séries de freestyles sur YouTube. Le 1er
      décembre, il entame la série de freestyles ¥. Il fait une démonstration de
      performance sur des vidéos très courtes (moins de 2min). Ces freestyles
      vont lui permettre d’avoir ses premiers fans. A ce jour, le son ¥10 cumule
      plus d’un millions de vues.<br />
      <br />Luv Resval est un rappeur diversifié, qui gère aussi bien le rap que
      le chant. Très rapidement il s’est fait repérer par l’empereur Alkpote qui
      l’a pris sous son aile. La notoriété de ce rappeur ne cesse de croître et
      s’il continue dans cette lancée, il peut espérer une bonne carrière dans
      le rap.
    </p>
    <div class="flex place-content-center">
      <a href="https://www.instagram.com/luvresval/?hl=fr" target="_blank"
        ><img
          src="../../public/icones/instagram.png"
          alt="logo instagram"
          class="ml-5 mt-2 w-8"
      /></a>
      <a href="https://twitter.com/LuvResval6" target="_blank"
        ><img
          src="../../public/icones/twitter.png"
          alt="logo twitter"
          class="ml-5 mt-2 w-8"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCPj63YTEirrOXgCp5xiBYJQ"
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
