<script lang="ts" setup>
import { PropType } from "nuxt/dist/app/compat/capi";
import { Repository } from "store/useRepositories";

const props = defineProps({
  repository: {
    type: Object as PropType<Repository>,
    required: true,
  },
});
const url = computed(() => `/repository/${props.repository.name}`);
const router = useRouter();
const handleCardClick = () => {
  router.push({ path: url.value });
};
</script>

<template>
  <div
      class="overflow-hidden shadow-lg rounded-lg cursor-pointer transform transition duration-500"
      v-scale-on-hover
      data-aos="fade-up"
      @click.prevent="handleCardClick">
    <div class="w-full block h-full">
      <img
          :alt="repository.name"
          :src="repository.imageUrl"
          class="max-h-64 w-full object-cover"
      />
      <div
          class="backdrop-filter backdrop-blur-md bg-white bg-opacity-10 dark:bg-gray-800 w-full p-4 rounded-b-lg text-white border border-white border-opacity-20">
        <p
            class="text-white text-base lg:text-xl font-secondary font-medium mb-2"
        >
          {{ repository.name }}
        </p>
        <div class="flex items-center justify-end space-x-2 mt-4">
          <div class="flex items-center gap-2">
            <ClientOnly>
              <font-awesome-icon icon="fa fa-star"/>
            </ClientOnly>

            <span>{{ repository.stars }}</span>
          </div>
          <div class="flex items-center gap-2">
            <ClientOnly>
              <font-awesome-icon icon="fa fa-code-fork"/>
            </ClientOnly>
            <span>{{ repository.forks }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

