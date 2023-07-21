<template>
  <AppContainer>
    <AppHeader />
    <PageContainer>
      <NuxtLoadingIndicator
        color="#47ffd4"
        height="3"
      />
      <NuxtPage />
    </PageContainer>
  </AppContainer>
</template>

<style lang="postcss">
body {
  @apply bg-white dark:bg-zinc-950;
}
</style>