<template>
<div>
  <h2
    class="ml-1 mb-6 mt-10 w-3/4 -rotate-6 bg-black font-archivo-black text-xl text-white"
  >
    PROGRAMMATION
  </h2>
  <div class="flex">
    <RouterLink to="/Programmation"><bouton texte="TOUS"></bouton></RouterLink>
    <RouterLink to="/ProgrammationJ1">
      <bouton texte="JOUR 1"></bouton> </RouterLink
    ><bouton texte="JOUR 2"></bouton>
  </div>
  <card image="/img/damso.jpg" artiste="DAMSO"> </card>
  <card image="/img/dinos.jpg" artiste="DINOS"> </card>
  <card image="/img/ziak.jpg" artiste="ZIAK"> </card>
  <card image="/img/disiz.jpg" artiste="DISIZ"> </card>
  <card image="/img/lefa.jpg" artiste="LEFA"> </card>
  <card image="/img/lujipeka.jpg" artiste="LUJIPEKA"> </card>
  <card image="/img/roshi.jpg" artiste="CAPTAINE ROSHI"> </card>
  <card image="/img/bakari.jpg" artiste="BAKARI"> </card>
</div>
</template>

<script>
import card from "../components/card.vue";
import bouton from "../components/bouton.vue";

export default {
  name: "App",
  components: {
    card,
    bouton,
  },

  data() {
    return {};
  },
};
</script>
