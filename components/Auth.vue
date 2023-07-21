<script setup>
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
</script>

<template>
  <form class="flex items-center justify-center" @submit.prevent="handleLogin">
    <UContainer class="max-w-xl text-center">
      <!-- <h1 class="text-2xl font-black">
        The One Great Work
      </h1> -->
      <h1 class="text-3xl font-black">
        <!-- העבודה הגדולה האחת -->
        ההרשמה הגדולה האחת
      </h1>

      <hr class="mb-4 mt-6 border-l-gray-100 dark:border-gray-900">

      <p class="my-4 text-lg text-gray-800 dark:text-gray-300">
        כניסה באמצעות <b>קישור פלא</b> עם הדוא"ל שלך
      </p>
      <div>
        <UInput
          v-model="email"
          type="email"
          placeholder="הדוא&quot;ל שלך"
          size="lg"
        />
        <!-- </UFormGroup> -->
      </div>
      <div>
        <UButton
          :label="loading ? 'טוען' : 'שלח קישור פלא'"
          :disabled="loading"
          type="submit"
          variant="solid"
          class="mt-2"
          color="primary"
          size="xl"
          block
        />
      </div>
      <span class="text-xs text-gray-400 dark:text-gray-700 block mt-2"> אין צורך בסיסמה</span>
    </UContainer>
  </form>
</template>
