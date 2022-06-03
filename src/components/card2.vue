<template>
  <figure
    class="m-10 grid grid-flow-row-dense grid-cols-1 rounded-b-lg rounded-t-xl bg-red-100"
  >
    <img
      class="col-span-3 h-48 w-full rounded-t-lg object-cover hover:blur-sm"
      :src="image"
      alt=""
    />

    <figcaption
      class="relative contents w-full rounded-lg border-2 border-t-0 border-indigo-100 p-5 pt-8"
    >
      <section class="w-full">
        <div class="w-full text-center">
          <h3 class="font-homenaje text-3xl text-white">{{ artiste }}</h3>
          <hr class="mb-2 ml-6 mr-6 border-white" />
          <p class="text-s font-work-sans text-white">{{ jour }}</p>
          <p class="text-s mb-3 font-work-sans text-white">{{ heure }}</p>
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
    heure: String,
    jour: String,
  },
  components: {},
};
</script>
