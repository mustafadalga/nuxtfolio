<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi";
import { Gist } from "~/store/useGists";

const props = defineProps({
  gist: {
    type: Object as PropType<Gist>,
    required: true,
  },
});
const router = useRouter();
const handleCardClick = async () => {
  await navigateTo(props.gist.html_url, {
    external: true,
    open: "_blank",
  })
};
</script>

<template>
  <div
      class="overflow-hidden shadow-lg rounded-lg backdrop-filter backdrop-blur-md bg-white bg-opacity-10  rounded-b-lg text-white border border-white border-opacity-20 cursor-pointer transform transition duration-500"
      data-aos="fade-up"
      v-scale-on-hover
      @click.prevent="handleCardClick"
  >
    <div class="w-full h-full grid gap-4">
      <img :alt="gist.description" :src="gist.imageUrl"  class="max-h-64 w-full object-cover"/>
        <p class="w-full px-4 mt-auto mb-4 text-white text-sm lg:text-base font-secondary font-medium line-clamp-2">
          {{ gist.description }}
        </p>
    </div>
  </div>
</template>

