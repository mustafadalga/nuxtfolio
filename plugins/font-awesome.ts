import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCodeFork,faStar,faLanguage,faBriefcase } from '@fortawesome/free-solid-svg-icons'

library.add(faCodeFork,faStar,faLanguage,faBriefcase)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
