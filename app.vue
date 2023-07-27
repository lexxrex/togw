<template>
  <AppContainer class="">
    <AppHeader />
      <PageContainer class="">
        <NuxtLoadingIndicator color="#47ffd4" :height="3" />
        <NuxtPage />
      </PageContainer>
    <!-- <AppFooter /> -->
  </AppContainer>
</template>

<script setup lang="ts">
useHead({
  title: 'העבודה הגדולה האחת',
  meta: [
    { name: 'title', content: 'העבודה הגדולה האחת' },
    { name: 'description', content: 'בקבוצת הלמידה של העבודה הגדולה האחת תוכלו לגלות את המפתח הראשי לכל המנעולים על כל הדלתות של כל הכלובים התודעתיים בהם רובנו עדיין נמצאים אך לא מודעים. מכם זה ידרוש זמן, תשומת לב, וכמובן רצון ללמוד איתנו את גוף הידע הנסתר אותו אנו לומדים ומקדמים בקבוצה.' },
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'theme-color', content: '#ffffff' },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://lexxrex.github.io/togw/' },
    { property: 'og:title', content: 'העבודה הגדולה האחת' },
    { property: 'og:description', content: 'באתר ובקבוצת הלמידה של העבודה הגדולה האחת תוכלו לגלות את המפתח הראשי לכל המנעולים על כל הדלתות של כל הכלובים התודעתיים בהם רובנו עדיין נמצאים אך לא מודעים. מכם זה ידרוש זמן, תשומת לב, וכמובן רצון ללמוד איתנו את גוף הידע הנסתר אותו אנו לומדים ומקדמים בקבוצה.' },
    { property: 'og:image', content: 'https://lexxrex.github.io/togw/img/togw-og-black-on-white.jpg' },

    // Twitter
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://lexxrex.github.io/togw/' },
    { property: 'twitter:title', content: 'העבודה הגדולה האחת' },
    { property: 'twitter:description', content: 'באתר ובקבוצת הלמידה של העבודה הגדולה האחת תוכלו לגלות את המפתח הראשי לכל המנעולים על כל הדלתות של כל הכלובים התודעתיים בהם רובנו עדיין נמצאים אך לא מודעים. מכם זה ידרוש זמן, תשומת לב, וכמובן רצון ללמוד איתנו את גוף הידע הנסתר אותו אנו לומדים ומקדמים בקבוצה.' },
    { property: 'twitter:image', content: 'https://lexxrex.github.io/togw/img/togw-og-black-on-white.jpg' },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: './apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: './favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16x', href: './favicon-16x16.png' },
    { rel: 'icon', href: './favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
  ],
  // bodyAttrs: {
  //   class: 'test'
  // },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>

<style lang="postcss">
html {
  @apply scroll-smooth;
}
body {
  @apply bg-white dark:bg-zinc-950 selection:text-black selection:bg-primary-500;
}
</style>