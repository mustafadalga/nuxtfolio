<script setup lang="ts">
import AOS from 'aos';
import { useRepositoriesStore } from "~/store/useRepositories";
const { state,loadMore } = useRepositoriesStore();
const isLoaded = ref(true);

const handleScroll = async () => {
  const nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
  if (!isLoaded.value) return;

  if (nearBottom) {
    isLoaded.value = false;
    await loadMore();
    isLoaded.value = true;

    AOS.refresh();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  AOS.init({
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disable: false,
    startOffset: 120,
    once: false,
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

useHead({
  title: "Mustafa Dalga - Project Showcases",
  meta: [ { name: 'description', content: "Explore the project showcases of Mustafa Dalga, demonstrating his software development skills and creativity. Discover a range of projects from web applications to innovative software solutions." } ]
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <Repository v-for="repo in state.repositories" :repository="repo"/>
  </div>
</template>
