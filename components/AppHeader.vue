<script setup lang="ts">
const appConfig = useAppConfig()
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const loading = ref(false)
const email = ref('')
const isOpen = ref(false)

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/')
}

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value })
    if (error) { throw error }
    alert('Check your email for the login link!')
  } catch (error) {
    alert(error)
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <header class="fixed top-0 left-0 right-0 py-2 z-10 backdrop-filter backdrop-blur-[16px] bg-white/90 dark:bg-gray-950/90 border-gray-200 dark:border-gray-900/70">
    <div class="container flex mx-auto flex-row items-center px-2">
      <!-- Head 1/3 -->
      <ClientOnly>
        <div class="flex flex-1 space-x-4 flex-row items-center justify-start">
          <UTooltip text="העבודה הגדולה האחת">
            <UButton
              :icon="'i-heroicons-scale-solid'"
              to="/"
              class=""
              size="3xl"
              aria-label="Theme"
            />
          </UTooltip>
          <!-- <NuxtLink to="/profile">
            <UAvatar alt="לקס רקס" size="sm" chip-color="primary" />
          </NuxtLink> -->
        </div>
      </ClientOnly>
      <!-- Head 2/3 -->
      <div class="flex-1 flex flex-row items-center justify-center">
        <!-- <UTooltip text="העבודה הגדולה האחת">
          <NuxtLink to="/" class="flex items-center justify-center rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 w-12 h-12 my-1">
            <UIcon name="i-heroicons-scale" class="text-3xl" />
          </NuxtLink>
        </UTooltip> -->
      </div>
      <!-- Head 3/3 -->
      <div class="flex flex-1 flex-row items-center justify-end">
        <UTooltip text="מדיה לשיתופים">
          <UButton
            :icon="'i-heroicons-camera-solid'"
            to="/media"
            class="mx-2"
            size="xl"
            aria-label="Theme"
          />
        </UTooltip>

        <UTooltip text="מצב צבע">
          <ColorModeButton class="flex"/>
        </UTooltip>

        <UButton
          :icon="'i-heroicons-bolt-solid'"
          to="/"
          size="xl"
          class="mr-2"
          aria-label="Theme"
        />
        
        <!-- <div v-if="user">
          <UButton
            label="יציאה"
            class="mx-2 font-thin"
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
                    אנא אשר/י יציאה
                  </p>

                  <div>
                    <UButton
                    :label="loading ? 'טוען' : 'אישור יציאה'"
                    :disabled="loading"
                    variant="solid"
                    class="mt-4 text-white dark:text-white font-semibold"
                    color="primary"
                    size="xl"
                    block
                    @click="logout"
                  />
                  <span class="text-xs text-gray-400 dark:text-gray-700 block mt-2">להתראות בקרוב</span>
                </div>
              </UContainer>
            </form>
          </UModal>
        </div> -->
        <div v-if="!user">
          <UButton
            label="כניסה"
            class="mx-2 font-thin"
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
                    <UInput
                    v-model="email"
                    type="email"
                    placeholder='הדוא"ל שלך'
                    size="md"
                  />
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
