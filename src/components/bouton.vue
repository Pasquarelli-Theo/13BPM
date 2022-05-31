<template>
    <button
      type="submit"
      class="focus:shadow-outline m-1 h-7 rounded-xl border-2 border-black bg-white px-5 font-homenaje text-lg text-black transition-colors duration-150 hover:bg-red-700 hover:text-white"
    
    >
      {{ texte }}
    </button>
</template>

<script>
export default {
  props: {
    texte: String,
  },
  components: {},
};
</script>
