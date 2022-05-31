<template>
<div>
  <h2
    class="ml-1 mb-6 mt-10 w-80 -rotate-6 bg-black font-archivo-black text-xl text-white"
  >
    CONCERT
  </h2>
  <div class="flex">
  <bouton texte="TOUS"></bouton>
  <RouterLink to="/ConcertJ1"
      ><bouton texte="JOUR 1"></bouton></RouterLink>
  <RouterLink to="/ConcertJ2"
      ><bouton texte="JOUR 2"></bouton></RouterLink>
      <RouterLink to="/ConcertGS"
      ><bouton texte="GRANDE SCÈNE"></bouton></RouterLink>
      <RouterLink to="/ConcertPS"
      ><bouton texte="PETITE SCÈNE"></bouton></RouterLink>
  </div>
  <RouterLink to="/sch"><card2 image="/img/sch.jpg" artiste="SCH" jour="Jour 1" heure="Grande scène - 00h00"> </card2></RouterLink>
  <card2 image="/img/damso.jpg" artiste="DAMSO" jour="Jour 2" heure="Grande scène - 00h00"> </card2>
  <card2 image="/img/dinos.jpg" artiste="DINOS" jour="Jour 2" heure="Grande scène - 22h30"> </card2>
  <card2 image="/img/sfera.jpg" artiste="SFERA EBBASTA" jour="Jour 1" heure="Grande scène - 22h30"> </card2>
  <card2 image="/img/leto.jpg" artiste="LETO" jour="Jour 1" heure="Grande scène - 21h30"> </card2>
  <card2 image="/img/ziak.jpg" artiste="ZIAK" jour="Jour 2" heure="Grande scène - 20h00"> </card2>
  <card2 image="/img/luv.jpg" artiste="LUV RESVAL" jour="Jour 2" heure="Grande scène - 20h00"> </card2>
  <card2 image="/img/disiz.jpg" artiste="DISIZ" jour="Jour 2" heure="Petite scène - 19h00"> </card2>
  <card2 image="/img/lefa.jpg" artiste="LEFA" jour="Jour 2" heure="Grande scène - 21h30"> </card2>
  <card2 image="/img/lujipeka.jpg" artiste="LUJIPEKA" jour="Jour 1" heure="Petite scène - 22h30"> </card2>
  <card2 image="/img/capo.jpg" artiste="CAPO PLAZA" jour="Jour 1" heure="Petite scène - 21h30"> </card2>
  <card2 image="/img/nahir.jpg" artiste="NAHIR" jour="Jour 1" heure="Petite scène - 22h30"> </card2>
  <card2 image="/img/roshi.jpg" artiste="CAPTAINE ROSHI" jour="Jour 2" heure="Petite scène - 21h30"> </card2>
  <card2 image="/img/coyott.jpg" artiste="COYOTT JO BASTARD" jour="Jour 1" heure="Petite scène - 19h00"> </card2>
  <card2 image="/img/mojixsboy.jpg" artiste="MOJI X SBOY" jour="Jour 1" heure="Petite scène - 20h00"> </card2>
  <card2 image="/img/bakari.jpg" artiste="BAKARI" jour="Jour 2" heure="Petite scène - 20h00"> </card2>
</div>
</template>

<script>
import card2 from "../components/card2.vue";
import bouton from "../components/bouton.vue";

export default {
  name: "App",
  components: {
    card2,
    bouton,
  },

  data() {
    return {};
  },
};
</script>