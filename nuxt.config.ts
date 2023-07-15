// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/supabase',
    '@nuxthq/ui'
    // https://nuxt.com/modules/formkit
    // https://nuxt.com/modules/i18n
    // https://content.nuxtjs.org
  ],
  ui: {
    safelistColors: ['hover:bg-zinc-200']
  }
  // css: ['@/assets/main.css'],
})
