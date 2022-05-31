<template>
  <div>
    <h2
      class="ml-1 mb-6 mt-10 w-80 -rotate-6 bg-black font-archivo-black text-xl text-white"
    >
      PROGRAMMATION
    </h2>
    <div class="flex">
      <bouton texte="TOUS"></bouton>
      <RouterLink to="/ProgrammationJ1"
        ><bouton texte="JOUR 1"></bouton
      ></RouterLink>
      <RouterLink to="/ProgrammationJ2"
        ><bouton texte="JOUR 2"></bouton
      ></RouterLink>
    </div>
    <RouterLink to="/sch"
      ><card image="/img/sch.jpg" artiste="SCH"> </card
    ></RouterLink>
    <card image="/img/damso.jpg" artiste="DAMSO"> </card>
    <card image="/img/dinos.jpg" artiste="DINOS"> </card>
    <card image="/img/sfera.jpg" artiste="SFERA EBBASTA"> </card>
    <card image="/img/leto.jpg" artiste="LETO"> </card>
    <card image="/img/ziak.jpg" artiste="ZIAK"> </card>
    <card image="/img/luv.jpg" artiste="LUV RESVAL"> </card>
    <card image="/img/disiz.jpg" artiste="DISIZ"> </card>
    <card image="/img/lefa.jpg" artiste="LEFA"> </card>
    <card image="/img/lujipeka.jpg" artiste="LUJIPEKA"> </card>
    <card image="/img/capo.jpg" artiste="CAPO PLAZA"> </card>
    <card image="/img/nahir.jpg" artiste="NAHIR"> </card>
    <card image="/img/roshi.jpg" artiste="CAPTAINE ROSHI"> </card>
    <card image="/img/coyott.jpg" artiste="COYOTT JO BASTARD"> </card>
    <card image="/img/mojixsboy.jpg" artiste="MOJI X SBOY"> </card>
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
