<script setup lang="ts">
const isMenuOpen = ref(false);
const router = useRouter();
const links = [
  {
    text: "Repositories",
    path: "/",
  },
  {
    text: "About Me",
    path: "/about",
  },
  {
    text: "Blog",
    path: "/blog",
  },
  {
    text: "Gists",
    path: "/gists",
  },
  {
    text: "CV",
    path: "/cv",
  },
  {
    text: "Contact",
    path: "/contact",
  },
]
const handleLink = (path: string) => {
  isMenuOpen.value = false;
  router.push({ path: path })
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}


</script>

<template>
  <nav
      class="sticky top-0 w-full flex gap-5 md:gap-12 z-50 h-16 md:h-20 backdrop-filter backdrop-blur-md bg-white/[0.1] text-white shadow-lg flex items-center justify-between px-8 md:px-24">
    <NuxtLink to="/" class="text-2xl font-primary font-bold text-white">
      <ClientOnly>
        <font-awesome-icon icon="fa fa-briefcase"/>
      </ClientOnly>
    </NuxtLink>
    <div class="md:hidden">
      <IconBar @click="toggleMenu"/>
    </div>
    <div :class="isMenuOpen ? 'grid-rows-[1fr]':'grid-rows-[0fr]'"
         class="absolute md:relative top-16 md:top-0 left-0 grid w-full md:flex bg-black bg-opacity-50 md:bg-transparent md:bg-transparent text-black md:text-white transition-all duration-500 overflow-hidden">
      <div
          class="w-full md:w-auto grid md:flex md:gap-8 font-secondary text-base text-center bg-white md:bg-transparent transition-all duration-500 overflow-hidden">
        <button v-for="link in links" @click="handleLink(link.path)" class="px-4 py-2 md:py-0 md:px-0">
          {{ link.text }}
        </button>
      </div>
    </div>
  </nav>
</template>
