<script setup lang="ts">
import AOS from 'aos';
import { useGistsStore } from "~/store/useGists";

const { state, loadMore } = useGistsStore();
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
  title: "Diverse Code Snippets - Programmer's Gists",
  meta: [ { name: 'description', content: "Explore a diverse collection of coding snippets from programmers all around the world. Find solutions, share your own gists, and learn new techniques in our Programmer's Gists collection." } ]
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Gist v-for="gist in state.gists" :gist="gist"/>
  </div>
</template>