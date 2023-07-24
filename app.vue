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
    <AppFooter />
  </AppContainer>
</template>

<style lang="postcss">
html {
  @apply scroll-smooth;
}
body {
  @apply bg-white dark:bg-zinc-950;
}
</style>