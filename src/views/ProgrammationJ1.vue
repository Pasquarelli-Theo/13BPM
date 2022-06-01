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
        ><bouton class="w-24" texte="TOUS"></bouton></RouterLink
      ><bouton class="w-24" texte="JOUR 1"></bouton>
      <RouterLink to="/ProgrammationJ2"
        ><bouton class="w-24" texte="JOUR 2"></bouton
      ></RouterLink>
    </div>
    <div
      class="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <RouterLink to="../public/sch"
        ><card image="/img/sch.jpg" artiste="SCH"> </card
      ></RouterLink>
      <RouterLink to="/Sfera"
        ><card image="/img/sfera.jpg" artiste="SFERA EBBASTA"> </card
      ></RouterLink>
      <RouterLink to="/Leto"
        ><card image="/img/leto.jpg" artiste="LETO"> </card
      ></RouterLink>
      <RouterLink to="/Luv"
        ><card image="/img/luv.jpg" artiste="LUV RESVAL"> </card
      ></RouterLink>
      <RouterLink to="/Capo"
        ><card image="/img/capo.jpg" artiste="CAPO PLAZA"> </card
      ></RouterLink>
      <RouterLink to="/Nahir"
        ><card image="/img/nahir.jpg" artiste="NAHIR"> </card
      ></RouterLink>
      <RouterLink to="/Coyote"
        ><card image="/img/coyott.jpg" artiste="COYOTE JO BASTARD"> </card
      ></RouterLink>
      <RouterLink to="/mojixsboy"
        ><card image="/img/mojixsboy.jpg" artiste="MOJI X SBOY"> </card
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
