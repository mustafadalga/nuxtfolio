<script setup>
import { ref } from 'vue';
import { useRepositoriesStore } from "~/store/useRepositories";
import MarkdownIt from "markdown-it";
import { useRoute } from 'vue-router';

const { fetchBranch } = useFetchBranch();
const { fetchReadme } = useFetchReadme();
const { state } = useRepositoriesStore();
const route = useRoute();
const branch = ref("");
const readme = ref("");

const { name } = route.params;
branch.value = await fetchBranch(name);
readme.value = await fetchReadme(name, branch.value);
const validRepository = computed(() => branch.value)
const readmeContent = computed(() => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  if (!readme.value) return "";

  return md.render(readme.value);
});

handleInvalidRepository();

async function handleInvalidRepository () {
  if (!validRepository.value) {
    await navigateTo("/");
  }
}

useHead({
  title: `${name} - Mustafa Dalga Project Showcases`,
  meta: [ { name: 'description', content:`${name} - Mustafa Dalga Project Showcases`  } ]
})
</script>

<template>
  <div
      class="grid bg-gray-100 max-w-6xl mx-auto min-h-screen rounded-xl overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white"
  >
    <img
        alt="blog photo"
        src="https://raw.githubusercontent.com/mustafadalga/fly-high/main/frontend/src/assets/images/airplane-4.jpeg"
        class="max-h-96 w-full object-cover"
    />
    <div class="max-w-5xl mx-auto mt-4 p-4 overflow-hidden w-full grid">
      <div class="markdown overflow-x-auto w-full " v-html="readmeContent"></div>
    </div>
  </div>
</template>
