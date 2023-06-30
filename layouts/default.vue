<script setup>
import { useRepositoriesStore } from "~/store/useRepositories";
import { useGistsStore } from "~/store/useGists";

const { init: initRepositories } = useRepositoriesStore();
const { init: initGists } = useGistsStore();

initRepositories();
initGists()
</script>
<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
    <Header/>
    <main
        class="grid container flex-grow mx-auto px-5 py-8 backdrop-filter backdrop-blur-lg bg-rgba(255, 255, 255, 0.1)">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

