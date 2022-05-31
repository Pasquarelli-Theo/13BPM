<template>
  <div>
    <img src="../../public/img/imgHome.png" />
    <div>
      <p class="mt-9 ml-5 mr-5 bg-white p-2 font-nunito font-bold">
        Du 11 au 12 Juin à la plage du Prado dans le 8e arrondissement de
        Marseille se déroulera la première édition du festival 100% RAP 13BPM.
        Deux journées complètes de concerts sur 2 scènes de concerts. Retrouver
        certains des plus grands rappeurs francophones avec Damso et SCH,
        découvrez le future de la scène rap avec Bakari et le duo Moji x Sboy et
        voyagez en Italie avec Sfera Ebbasta et Capo Plaza.
      </p>
    </div>
    <h2
      class="ml-1 mb-6 mt-12 w-80 -rotate-6 bg-black font-archivo-black text-xl text-white"
    >
      D'AUTRES INFORMATIONS
    </h2>
    <RouterLink to="/Programmation"
      ><div class="mb-10 flex place-content-center">
        <img src="../img/vers-prog.png" class="w-9/12" /></div
    ></RouterLink>
    <RouterLink to="/Festival"
      ><div class="flex place-content-center">
        <img
          src="public/img/delta-festival-aix-marseille.jpg"
          class="w-9/12"
        /></div
    ></RouterLink>
  </div>
</template>

<script>
import card from "../components/card.vue";

export default {
  name: "App",
  components: {
    card,
  },

  data() {
    return {};
  },
};
</script>
