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
      <bouton class="w-24" texte="TOUS"></bouton>
      <RouterLink to="/ProgrammationJ1"
        ><bouton class="w-24" texte="JOUR 1"></bouton
      ></RouterLink>
      <RouterLink to="/ProgrammationJ2"
        ><bouton class="w-24" texte="JOUR 2"></bouton
      ></RouterLink>
    </div>
    <div
      class="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <RouterLink to="/sch"
        ><card image="/img/sch.jpg" artiste="SCH"> </card
      ></RouterLink>
      <RouterLink to="/Damso"
        ><card image="/img/damso.jpg" artiste="DAMSO"> </card
      ></RouterLink>
      <RouterLink to="/Dinos"
        ><card image="/img/dinos.jpg" artiste="DINOS"> </card
      ></RouterLink>
      <RouterLink to="/Sfera"
        ><card image="/img/sfera.jpg" artiste="SFERA EBBASTA"> </card
      ></RouterLink>
      <card image="/img/leto.jpg" artiste="LETO"> </card>
      <card image="/img/ziak.jpg" artiste="ZIAK"> </card>
      <card image="/img/luv.jpg" artiste="LUV RESVAL"> </card>
      <card image="/img/disiz.jpg" artiste="DISIZ"> </card>
      <RouterLink to="/Lefa"
        ><card image="/img/lefa.jpg" artiste="LEFA"> </card
      ></RouterLink>
      <card image="/img/lujipeka.jpg" artiste="LUJIPEKA"> </card>
      <card image="/img/capo.jpg" artiste="CAPO PLAZA"> </card>
      <card image="/img/nahir.jpg" artiste="NAHIR"> </card>
      <card image="/img/roshi.jpg" artiste="CAPTAINE ROSHI"> </card>
      <card image="/img/coyott.jpg" artiste="COYOTE JO BASTARD"> </card>
      <card image="/img/mojixsboy.jpg" artiste="MOJI X SBOY"> </card>
      <card image="/img/bakari.jpg" artiste="BAKARI"> </card>
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
