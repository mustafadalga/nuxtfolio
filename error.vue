<script setup>
definePageMeta({
  layout: "default"
})

useHead({
  title: "404 Not Found - Page Not Available",
  meta: [
    { name: 'description', content: "Oops! The page you are looking for could not be found!" }
  ]
})
</script>
<template>
  <div>
    <NuxtLayout>
      <div class="text-white grid place-items-center">
        <div class="grid place-items-center gap-3">
          <h1 class="text-4xl md:text-5xl xl:text-7xl">404</h1>
          <h2 class="text-base md:text-xl xl:text-2xl">Oops! The page you're looking for doesn't exist.</h2>
          <nuxt-link to="/"
                     class="text-center rounded-xl px-8 py-2 w-48 md:w-56 border border-solid border-white transition-all duration-300 hover:shadow-lg text-xs md:text-sm lg:text-base">
            Go Back to Home
          </nuxt-link>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>