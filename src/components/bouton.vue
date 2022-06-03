<template>
    <slot><button
      type="submit"
      class="focus:shadow-outline text-center m-1 h-7 rounded-xl border-2 border-black px-5 font-homenaje text-lg text-black transition-colors duration-150 hover:bg-red-100 hover:text-white"
    
    >
      {{ texte }}
    </button>
    </slot>
</template>

<script>
export default {
  props: {
    texte: String,
  },
  components: {},
};
</script>
