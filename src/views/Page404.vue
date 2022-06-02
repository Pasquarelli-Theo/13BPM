<template>
  <h1 class="m-5 dark:text-white   text-center font-viga text-3xl">Error 404</h1>
  <div
    class="grid dark:text-white grid-flow-row-dense grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
  >
    <div class="flex place-content-center">
      <img src="../../public/img/404.png" class="mb-0 h-2/3 w-auto" />
    </div>
    <div>
      <p class="m-5 font-homenaje text-2xl">
        Oups, on dirait que c'était pas prévu !
      </p>
      <p class="m-5 font-nunito text-lg">
        Nous sommes désolé laa page que vous cherché n'existe pas. Dirigez-vous
        vers la page d'accueil ou contactez-nous en cas de question !
      </p>
      <div class="flex place-content-center">
        <RouterLink to="/"
          ><bouton class="mr-3 h-12 w-32" texte="Accueil"></bouton
        ></RouterLink>
        <RouterLink to="/Contact"
          ><bouton class="ml-3 h-12 w-32" texte="Nous contacter"></bouton
        ></RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import bouton from "../components/bouton.vue";

export default {
  name: "App",
  components: {
    bouton,
  },

  data() {
    return {};
  },
};
</script>
