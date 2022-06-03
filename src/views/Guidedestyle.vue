<template>
  <div>
    <h2 class="font-archivo-black text-3xl">Guide de style</h2>
    <h3 class="m-3 font-homenaje text-xl">Composants</h3>
    <card image="/img/sch.jpg" artiste="SCH"> </card>
    <card2
      image="/img/sch.jpg"
      artiste="SCH"
      jour="Jour 1"
      heure="Grande scène - 00h00"
    >
    </card2>
    <bouton class="w-24" texte="TOUS"></bouton>

    <h3 class="m-3 font-homenaje text-xl">Couleur</h3>
    <p class="w-24 bg-black text-white">#000000</p>
    <p class="w-24 bg-dark_grey text-white">#1C1C1C</p>
    <p class="w-24 bg-grey">#707070</p>
    <p class="w-24 bg-gray">#a0a0a0</p>
    <p class="w-24 bg-light_grey">#F3F4F6</p>
    <p class="w-24 bg-white">#ffffff</p>
    <p class="w-24 bg-red-100 text-white">#8a0202</p>

    <h3 class="m-3 font-homenaje text-xl">Font</h3>
    <p class="font-work-sans text-xl">13BPM</p>
    <p class="font-viga text-xl">13BPM</p>
    <p class="font-homenaje text-xl">13BPM</p>
    <p class="font-nunito text-xl">13BPM</p>
    <p class="font-archivo-black text-xl">13BPM</p>

    <h3 class="m-3 font-homenaje text-xl">Icones</h3>
    <LocationMarkerIcon class="w-8" />
    <ClockIcon class="w-8" />
    <UserIcon class="mr-2 h-6" />
    <PencilIcon class="mr-2 h-6" />
    <MailIcon class="mr-2 h-6" />
  </div>
</template>

<script>
import card2 from "../components/card2.vue";
import card from "../components/card.vue";
import bouton from "../components/bouton.vue";
import {
  ClockIcon,
  LocationMarkerIcon,
  MailIcon,
  UserIcon,
  PencilIcon,
} from "@heroicons/vue/outline";

export default {
  name: "App",
  components: {
    card2,
    card,
    bouton,
    ClockIcon,
    LocationMarkerIcon,
    MailIcon,
    UserIcon,
    PencilIcon,
  },

  data() {
    return {};
  },
};
</script>
