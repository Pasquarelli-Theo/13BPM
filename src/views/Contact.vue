<template>
  <div>
    <h2
      class="ml-1 mb-6 mt-10 w-80 -rotate-6 bg-black font-archivo-black text-xl text-white"
    >
      CONTACT
    </h2>
    
    <p class="font-viga m-5 text-lg">
      Trouvez nous plus facilement !
    </p>
    <div class="flex place-content-center">
    <img src="../../public/img/plan.jpg">
    </div>


    <p class="font-viga m-5 text-lg">
      Une requête ou une question ? Contactez nous en remplissant les champs du
      formulaire :
    </p>
    <div class="ml-auto mr-auto grid w-3/5">
      <form action="" class="grid-cols-1">
        <div class=" flex items-start rounded-md bg-white">
          <UserIcon class="h-6" /><input
            type="text"
            placeholder="Nom"
            class="text-gray-500 mt-1 w-full rounded-md bg-white text-justify text-sm"
          />
        </div>

        <div class="mt-4 flex items-start rounded-md bg-white">
          <PencilIcon class="h-6" /><input
            type="text"
            placeholder="Email"
            class="text-gray-500 mt- w-full rounded-md bg-white text-justify text-sm"
          />
        </div>

        <div class="mt-4 flex items-start rounded-md bg-white">
          <MailIcon class="h-6" /><textarea
            name="message"
            class="font-open-sans block w-full rounded-md text-sm focus:outline-none"
            rows="3"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button class="mt-4 mb-24 h-6 w-5/6 bg-red-100 text-sm text-white">
          <span class="text-center">Envoyer</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { MailIcon } from "@heroicons/vue/outline";
import { UserIcon } from "@heroicons/vue/outline";
import { PencilIcon } from "@heroicons/vue/outline";
export default {
  name: "App",
  components: {
    MailIcon,
    UserIcon,
    PencilIcon,
  },

  data() {
    return {};
  },
};
</script>
