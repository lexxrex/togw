<script setup lang="ts">
// const appConfig = useAppConfig()
// const client = useSupabaseAuthClient()
// const user = useSupabaseUser()
// const supabase = useSupabaseClient()
// const loading = ref(false)
// const email = ref('')
const isOpen = ref(false)
const appConfig = useAppConfig()

// const logout = async () => {
//   await client.auth.signOut()
//   navigateTo('/')
// }

// const handleLogin = async () => {
//   try {
//     loading.value = true
//     const { error } = await supabase.auth.signInWithOtp({ email: email.value })
//     if (error) { throw error }
//     alert('Check your email for the login link!')
//   } catch (error) {
//     alert(error)
//   } finally {
//     loading.value = false
//   }
// }

</script>

<template>
  <header class="fixed top-0 left-0 right-0 py-2 z-10 backdrop-filter backdrop-blur-[16px] bg-white/80 dark:bg-gray-950/80 border-gray-200 dark:border-gray-900/70">
    <div class="container flex mx-auto flex-row items-center px-2">
      <!-- Head 1/3 -->
      <ClientOnly>
        <div class="flex flex-1 space-x-4 flex-row items-center justify-start">

          <div>
            <UTooltip text="העבודה הגדולה האחת">
              <UButton
                :icon="'i-heroicons-scale-solid'"
                size="2xl"
                aria-label="Theme"
                @click="isOpen = true"
              />
              <UModal v-model="isOpen">
                <!-- Content -->
                <UContainer class="pt-8">
                  <div class="mx-auto w-36 h-36 md:w-42 md:h-42 lg:w-40 lg:h-40 bg-[url('/img/togw-logomark-app-black-on-white.jpg')] dark:bg-[url('/img/togw-logomark-app-white-on-zinc.jpg')] bg-contain" />

                  <UBadge :label="appConfig.version" color="red" size="xs" class="absolute top-4 end-4" />

                  <h1 class="text-center text-3xl font-black text-zinc-900 dark:text-zinc-200 pt-4">
                    העבודה הגדולה האחת
                  </h1>
                  <span class="text-sm text-center text-gray-600 dark:text-gray-300 tracking-wide block mt-2">
                    האתר הרשמי של קבוצת העבודה הגדולה
                  </span>
                  
                  <hr class="my-4 border-l-zinc-100 dark:border-zinc-900"/>
                  
                  <div class="flex flex-col md:flex-row max-w-xl text-gray-600 dark:text-gray-400">
                    <p class="flex-1 p-2">
                      <span class="font-semibold tracking-wide text-black dark:text-white">העבודה הגדולה</span>
                       מתמצה בניסיון להביא אנשים להכרה שעליהם לזנוח את הדתות השקריות שבהן הם מאמינים - 
                      האמונות השקריות והדוגמטיות המונעות את התפתחות התודעה, עקב מניעת קבלתו של ידע
                      <a href="https://t.me/therealnaturallaw/4" alt="החוק הטבעי האמיתי" class="text-primary-700 dark:text-primary-500" >
                        החוק הטבעי האמיתי
                      </a>
                      והבנתו.
                    </p>

                    <p class="flex-1 p-2">
                      <span class="font-semibold tracking-wide text-black dark:text-white">האחת</span>,
                       כי המשימה המפרכת הזו מהווה גם את 
                       <a href="https://t.me/therealnaturallaw/127" alt="הפתרון היחיד לשיעבוד" class="text-primary-700 dark:text-primary-500" >
                        הפתרון היחיד
                      </a>
                       שאם כל אחד ואחת מאיתנו נבחר לפעול למענו, נוכל ביחד לממש שינוי אמיתי ולייצר מציאות של אמת, מוסר, חופש ואהבה.
                    </p>
                  </div>

                  <NuxtLink to="https://t.me/lexxrex" target="_blank" class="flex justify-center mx-auto mt-4 mb-4 font-thin text-xs text-gray-500">
                    <!-- Made with 🧠 from ❤️ for ⚖️ by Lex -->
                    Made with ❤️ by Lex
                    <!-- נוצר מ- ❤️ ע"י לקס -->
                  </NuxtLink>

                  <!-- <div class="flex flex-col md:flex-row items-center">
                    <div class="flex-1 py-4">
                    <UButton
                      label="ללמוד את החוק הטבעי"
                      variant="outline"
                      class="font-semibold"
                      color="gray"
                      size="sm"
                      block
                    />
                  </div>
                  <div class="flex-1 flex-shrink py-4">
                    <UButton
                      label="להפיץ ולשתף את הידע הנסתר"
                      variant="outline"
                      class="font-semibold"
                      color="gray"
                      size="sm"
                      block
                    />
                    </div>
                  </div> -->
                </UContainer>
              </UModal>
            </UTooltip>
          </div>


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
        <UTooltip text="ללמוד">
          <UButton
            :icon="'i-heroicons-bolt-solid'"
            to="/welcome#hero"
            size="xl"
            class="ms-1 me-1"
            aria-label="Theme"
          />
        </UTooltip>
        <UTooltip text="לשתף">
          <UButton
            :icon="'i-heroicons-camera-solid'"
            to="/welcome#media"
            class="me-1"
            size="xl"
            aria-label="Theme"
          />
        </UTooltip>


        <UTooltip text="מצב צבע" class="ms-1">
          <ColorModeButton/>
        </UTooltip>
        
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
        <!-- <div v-if="!user">
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
        </div> -->
      </div>
    </div>
  </header>
</template>
