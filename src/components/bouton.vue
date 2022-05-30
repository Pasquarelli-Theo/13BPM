<template>
  <div>
    <button
      type="submit"
      class="focus:shadow-outline w-32 m-1 font-homenaje h-10 bg-white px-5 border-2 rounded-xl border-black text-lg text-black transition-colors duration-150 hover:bg-red-700 hover:text-white"
    >
      {{ texte }}
    </button>
  </div>
</template>

<script>
export default {
    props: {
    texte: String,
  },
  components: {},
};
</script>
