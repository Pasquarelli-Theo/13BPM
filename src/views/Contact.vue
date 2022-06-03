<template>
  <div class="dark:text-white">
    <h2
      class="ml-1 mb-6 mt-10 w-80 -rotate-6 bg-black font-archivo-black text-xl text-white"
    >
      CONTACT
    </h2>
    <div class="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    <div >
    <p class="font-viga m-5 text-lg">
      Trouvez nous plus facilement !
    </p>
    <div class="flex place-content-center">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11623.305960936545!2d5.364706235930674!3d43.25505811618938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c76ccecfb6d5%3A0x17f2517923877d35!2sPlages%20du%20Prado!5e0!3m2!1sfr!2sfr!4v1654263581949!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>

<div>
    <p class="font-viga m-5 text-lg">
      Une requête ou une question ? Contactez nous en remplissant les champs du
      formulaire :
    </p>
    <div class="ml-auto mr-auto grid w-3/5">
      <form action="" class="grid-cols-1">
        <div class=" flex items-start rounded-md bg-white dark:bg-grey">
          <UserIcon class="h-6 mr-2" /><input
            type="text"
            placeholder="Nom"
            class="text-gray-500 mt-1 w-full rounded-md bg-white dark:bg-grey text-justify text-sm"
          />
        </div>

        <div class="mt-4 flex items-start rounded-md bg-white dark:bg-grey">
          <PencilIcon class="h-6 mr-2" /><input
            type="text"
            placeholder="Email"
            class="text-gray-500 mt- w-full rounded-md bg-white dark:bg-grey text-justify text-sm"
          />
        </div>

        <div class="mt-4 flex items-start rounded-md bg-white dark:bg-grey">
          <MailIcon class="h-6 mr-2" /><textarea
            name="message"
            class="font-open-sans block w-full dark:bg-grey rounded-md text-sm focus:outline-none"
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
