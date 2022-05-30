<template>
  <figure
    class="m-5 grid grid-flow-row-dense grid-cols-3 rounded-lg bg-red-100"
  >
    <img
      class="col-span-3 h-48 w-full rounded-t-lg object-cover"
      :src="image"
      alt=""
    />

    <figcaption
      class="relative contents w-full rounded-lg border-2 border-t-0 border-indigo-100 p-5 pt-8"
    >
      <section class="w-full">
        <div class="w-full text-center">
          <h3 class="font-homenaje text-3xl text-white">{{ artiste }}</h3>
          <hr class="mb-4 ml-4  w-full border-indigo-100" />
        </div>
      </section>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    artiste: String,
    image: String,
  },
  components: {},
};
</script>
