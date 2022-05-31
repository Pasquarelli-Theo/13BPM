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
      ><card image="../public/img/sch.jpg" artiste="SCH"> </card
    ></RouterLink>
    <card image="../public/img/damso.jpg" artiste="DAMSO"> </card>
    <card image="../public/img/dinos.jpg" artiste="DINOS"> </card>
    <card image="../public/img/sfera.jpg" artiste="SFERA EBBASTA"> </card>
    <card image="../public/img/leto.jpg" artiste="LETO"> </card>
    <card image="../public/img/ziak.jpg" artiste="ZIAK"> </card>
    <card image="../public/img/luv.jpg" artiste="LUV RESVAL"> </card>
    <card image="../public/img/disiz.jpg" artiste="DISIZ"> </card>
    <card image="../public/img/lefa.jpg" artiste="LEFA"> </card>
    <card image="../public/img/lujipeka.jpg" artiste="LUJIPEKA"> </card>
    <card image="../public/img/capo.jpg" artiste="CAPO PLAZA"> </card>
    <card image="../public/img/nahir.jpg" artiste="NAHIR"> </card>
    <card image="../public/img/roshi.jpg" artiste="CAPTAINE ROSHI"> </card>
    <card image="../public/img/coyott.jpg" artiste="COYOTT JO BASTARD"> </card>
    <card image="../public/img/mojixsboy.jpg" artiste="MOJI X SBOY"> </card>
    <card image="../public/img/bakari.jpg" artiste="BAKARI"> </card>
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
