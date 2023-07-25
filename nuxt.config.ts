// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/togw/',
    head: {
        htmlAttrs: { dir: 'rtl', lang: 'he' },
    },
  },
  // devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/supabase',
    '@nuxthq/ui',
    '@nuxtjs/google-fonts'
    // https://nuxt.com/modules/formkit
    // https://nuxt.com/modules/i18n
    // https://content.nuxtjs.org
  ],
  ui: {
    // safelistColors: ['hover:bg-zinc-200']
  },
  googleFonts: {
    families: {
      Assistant: [500, 700, 800],
      // Fredoka: [400, 500],
      // 'Miriam Libre': [400]
      // 'Josefin+Sans': true,
      // Lato: [100, 300],
      // Raleway: {
      //   wght: [100, 400],
      //   ital: [100]
      // },
    }
  }
  
  // css: ['@/assets/main.css'],
})
