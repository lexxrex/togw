<script setup lang="ts">
const appConfig = useAppConfig()
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
// const colorMode = useColorMode()

// const toggleDark = () => {
//   colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
// }

// const colorModeIcon = computed(() => colorMode.preference === 'dark' ? 'i-heroicons-outline-moon' : 'i-heroicons-outline-sun')

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/')
}

// const db = useSupabaseClient()
// const baseUrl = 'https://umjsqfwlhbsyfaqlyanw.supabase.co/storage/v1/object/sign/avatars/'

// const { data: profiles } = await useAsyncData('profiles', async () => {
//   const { data } = await db.from('profiles').select('*')
//   return data
// })

</script>

<template>
    <header class="fixed top-0 left-0 right-0 py-4 border-b backdrop-filter backdrop-blur-[16px] bg-white/70 dark:bg-zinc-950/70 border-zinc-200 dark:border-zinc-900/70">
    <div class="container flex mx-auto flex-row items-center px-2">
      <!-- Head 1/3 -->
      <ClientOnly>
        <div class="flex space-x-4 flex-row items-center">
          <UAvatar alt="לקס רקס" size="sm" chip-color="primary" />
          <!-- <UButton
            :icon="'i-heroicons-cog-6-tooth'"
            aria-label="Theme"
          /> -->
          <!-- <UButton
            :icon="'i-heroicons-bolt'"
            to="/"
            aria-label="Theme"
          /> -->
        </div>
      </ClientOnly>
      <!-- Head 2/3 -->
      <div class="flex-1 flex flex-row items-center justify-center">
        <UButton
          :icon="'i-heroicons-scale'"
          to="/"
          size="xl"
          aria-label="Theme"
        />
        <!-- <NuxtLink to="/">
          <img :src="appConfig.logomark" alt="logo" class="w-12 h-12 rounded-full"/>
        </NuxtLink> -->
      </div>
      <!-- Head 3/3 -->
      <div class="flex flex-row items-center">
        <ColorModeButton class="flex"/>
        <UButton
          v-if="user"
          label="יציאה"
          class="font-semibold"
          color="white"
          variant="outline"
          @click="logout"
          />
        <UButton
          v-else
          label="כניסה"
          class="font-medium mx-2"
          color="white"
          variant="outline"
          to="/profile"
          />
      </div>
    </div>
  </header>
</template>
