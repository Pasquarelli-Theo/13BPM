<template>
  <div>
    <h2
      class="ml-1 mb-6 mt-10 w-80 -rotate-6 bg-black font-archivo-black text-xl text-white"
    >
      CONCERT
    </h2>
    <div
      class="grid grid-flow-row-dense grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10"
    >
      <RouterLink to="/Concert"
        ><bouton class="w-24" texte="TOUS"></bouton
      ></RouterLink>
      <RouterLink to="/ConcertJ1"
        ><bouton class="w-24" texte="JOUR 1"></bouton
      ></RouterLink>
      <bouton class="w-24" texte="JOUR 2"></bouton>
      <RouterLink to="/ConcertGS"
        ><bouton class="w-32" texte="GRANDE SCÈNE"></bouton
      ></RouterLink>
      <RouterLink to="/ConcertPS"
        ><bouton class="w-32 ml-9" texte="PETITE SCÈNE"></bouton
      ></RouterLink>
    </div>
    <div
      class="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
    <card2
      image="/img/disiz.jpg"
      artiste="DISIZ"
      jour="Jour 2"
      heure="Petite scène - 19h00"
    >
    </card2>
    <card2
      image="/img/bakari.jpg"
      artiste="BAKARI"
      jour="Jour 2"
      heure="Petite scène - 20h00"
    >
    </card2>
    <card2
      image="/img/ziak.jpg"
      artiste="ZIAK"
      jour="Jour 2"
      heure="Grande scène - 20h00"
    >
    </card2>
    <card2
      image="/img/lefa.jpg"
      artiste="LEFA"
      jour="Jour 2"
      heure="Grande scène - 21h30"
    >
    </card2>
    <card2
      image="/img/roshi.jpg"
      artiste="CAPTAINE ROSHI"
      jour="Jour 2"
      heure="Petite scène - 21h30"
    >
    </card2>
    <card2
      image="/img/lujipeka.jpg"
      artiste="LUJIPEKA"
      jour="Jour 1"
      heure="Petite scène - 22h30"
    >
    </card2>
    <card2
      image="/img/dinos.jpg"
      artiste="DINOS"
      jour="Jour 2"
      heure="Grande scène - 22h30"
    >
    </card2>
    <card2
      image="/img/damso.jpg"
      artiste="DAMSO"
      jour="Jour 2"
      heure="Grande scène - 00h00"
    >
    </card2>
  </div>
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
