<script setup lang="ts">
const formEmbedCode = `<iframe
 src="https://docs.google.com/forms/d/e/1FAIpQLSeQnNnwvAX2mpcYRKzUbGSTX8xy2ly9BG5T3j_bTghlY-sleA/viewform?embedded=true"
 class="w-full h-full"
  width="640" height="824" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;

useHead({
  title: "Mustafa Dalga - Contact",
  meta: [ { name: 'description', content: "Get in touch with Mustafa Dalgan through this contact form. Your feedback, inquiries and suggestions are welcome."} ]
})
</script>

<template>
    <div v-html="formEmbedCode"
    class="mx-auto w-full"></div>
</template>