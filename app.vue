<template>
  <AppContainer class="">
    <AppHeader />
      <PageContainer class="">
        <NuxtLoadingIndicator
          color="#47ffd4"
          height="3"
        />
        <NuxtPage />
      </PageContainer>
    <!-- <AppFooter /> -->
  </AppContainer>
</template>

<script setup lang="ts">
useHead({
  title: 'העבודה הגדולה האחת',
  meta: [
    { name: 'description', content: 'האתר הרשמי של קבוצת העבודה הגדולה האחת בטלגרם' },
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'theme-color', content: '#ffffff' }
  ],
  link: [
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16x', href: '/favicon-16x16.png' },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
  ],
  bodyAttrs: {
    // class: 'test'
  },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>


<style lang="postcss">
html {
  @apply scroll-smooth;
}
body {
  @apply bg-white dark:bg-zinc-950;
}
</style>