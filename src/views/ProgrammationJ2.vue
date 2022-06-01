<template>
  <div>
    <h2
      class="ml-1 mb-6 mt-10 w-80 -rotate-6 bg-black font-archivo-black text-xl text-white"
    >
      PROGRAMMATION
    </h2>
    <div
      class="grid grid-flow-row-dense grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10"
    >
      <RouterLink to="/Programmation"
        ><bouton class="w-24" texte="TOUS"></bouton
      ></RouterLink>
      <RouterLink to="/ProgrammationJ1">
        <bouton class="w-24" texte="JOUR 1"></bouton> </RouterLink
      ><bouton class="w-24" texte="JOUR 2"></bouton>
    </div>
    <div
      class="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <RouterLink to="/Damso"
        ><card image="/img/damso.jpg" artiste="DAMSO"> </card
      ></RouterLink>
      <RouterLink to="/Dinos"
        ><card image="/img/dinos.jpg" artiste="DINOS"> </card
      ></RouterLink>
      <RouterLink to="/Ziak"
        ><card image="/img/ziak.jpg" artiste="ZIAK"> </card
      ></RouterLink>
      <RouterLink to="/Disiz"
        ><card image="/img/disiz.jpg" artiste="DISIZ"> </card
      ></RouterLink>
      <RouterLink to="/Lefa"
        ><card image="/img/lefa.jpg" artiste="LEFA"> </card
      ></RouterLink>
      <RouterLink to="/Lujipeka"
        ><card image="/img/lujipeka.jpg" artiste="LUJIPEKA"> </card
      ></RouterLink>
      <RouterLink to="/Roshi"
        ><card image="/img/roshi.jpg" artiste="CAPTAINE ROSHI"> </card
      ></RouterLink>
      <RouterLink to="/Bakari"
        ><card image="/img/bakari.jpg" artiste="BAKARI"> </card
      ></RouterLink>
    </div>
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
