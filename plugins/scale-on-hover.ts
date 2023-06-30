import scaleOnHover from "~/directives/scale-on-hover";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scale-on-hover', scaleOnHover)
})
