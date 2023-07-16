<script setup lang="ts">
const appConfig = useAppConfig()
const client = useSupabaseAuthClient()
const user = useSupabaseUser()

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/')
}

const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value })
    if (error) { throw error }
    alert('Check your email for the login link!')
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}

const isOpen = ref(false)
// const colorMode = useColorMode()

// const toggleDark = () => {
//   colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
// }

// const colorModeIcon = computed(() => colorMode.preference === 'dark' ? 'i-heroicons-outline-moon' : 'i-heroicons-outline-sun')

// const db = useSupabaseClient()
// const baseUrl = 'https://umjsqfwlhbsyfaqlyanw.supabase.co/storage/v1/object/sign/avatars/'

// const { data: profiles } = await useAsyncData('profiles', async () => {
//   const { data } = await db.from('profiles').select('*')
//   return data
// })

</script>

<template>
    <header class="fixed top-0 left-0 right-0 py-2 border-b backdrop-filter backdrop-blur-[16px] bg-white/70 dark:bg-zinc-950/70 border-zinc-200 dark:border-zinc-900/70">
    <div class="container flex mx-auto flex-row items-center px-2">
      <!-- Head 1/3 -->
      <ClientOnly>
        <div class="flex flex-1 space-x-4 flex-row items-center justify-start">
          <UAvatar alt="לקס רקס" size="sm" chip-color="green" />
          <!-- <UButton
            :icon="'i-heroicons-cog-6-tooth'"
            aria-label="Theme"
          /> -->
        </div>
      </ClientOnly>
      <!-- Head 2/3 -->
      <div class="flex-1 flex flex-row items-center justify-center">
        <UButton
          :icon="'i-heroicons-scale'"
          to="/"
          size="3xl"
          aria-label="Theme"
        />
        <!-- <NuxtLink to="/">
          <img :src="appConfig.logomark" alt="logo" class="w-12 h-12 rounded-full"/>
        </NuxtLink> -->
      </div>
      <!-- Head 3/3 -->
      <div class="flex flex-1 flex-row items-center justify-end">
        <UButton
          :icon="'i-heroicons-bolt-solid'"
          to="/"
          aria-label="Theme"
        />
        <ColorModeButton class="flex"/>
        <UButton
          v-if="user"
          label="יציאה"
          class="font-semibold"
          color="white"
          variant="outline"
          @click="logout"
          />
          <div v-else>
            <UButton
              label="כניסה"
              class="font-medium mx-2"
              color="white"
              variant="link"
              @click="isOpen = true"
              />

            <UModal v-model="isOpen">
              <form class="flex items-center justify-center" @submit.prevent="handleLogin">
                <UContainer class="text-center py-4">
                  <h1 class="text-2xl font-black text-zinc-900 dark:text-zinc-200 py-2">
                    העבודה הגדולה האחת
                  </h1>
                  <hr class="my-3 border-l-zinc-100 dark:border-zinc-900"/>
                  <p class="my-6 text-md text-zinc-800 dark:text-zinc-300">
                    היכנס/י באמצעות קישור פלא עם הדוא"ל שלך
                  </p>
                  <div>
                    <!-- <UFormGroup name="email" label="Email"> -->
                      <UInput
                        v-model="email"
                        type="email"
                        placeholder='הדוא"ל שלך'
                        size="md"
                      />
                    <!-- </UFormGroup> -->
                  </div>
                  <div>
                    <UButton
                      :label="loading ? 'טוען' : 'שלח קישור פלא'"
                      :disabled="loading"
                      type="submit"
                      variant="solid"
                      class="mt-4 text-white dark:text-white font-semibold"
                      color="primary"
                      size="xl"
                      block
                    />
                    <span class="text-xs text-gray-400 dark:text-gray-700 block mt-2"> אין צורך בסיסמה</span>
                  </div>
                </UContainer>
              </form>
            </UModal>
          </div>
      </div>
    </div>
  </header>
</template>
