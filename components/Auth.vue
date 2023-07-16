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
    <UContainer class="max-w-md">
      <!-- <h1 class="text-2xl font-black">
        The One Great Work
      </h1> -->
      <h1 class="text-2xl font-black">
        העבודה הגדולה האחת
      </h1>
      <!-- <p class="my-4 text-sm font-semibold">
        Sign in via magic link with your email below. <br />
        No password required.
      </p> -->
      <p class="my-4 text-sm font-medium">
        היכנס/י באמצעות קישור פלא עם הדוא"ל שלך למטה.<br />
        אין צורך בסיסמה
      </p>
      <div>
        <!-- <UFormGroup name="email" label="Email"> -->
          <UInput
            v-model="email"
            type="email"
            placeholder='הדוא"ל שלך'
            size="xl"
          />
        <!-- </UFormGroup> -->
      </div>
      <div>
        <UButton
          :label="loading ? 'טוען' : 'שלח קישור פלא'"
          :disabled="loading"
          type="submit"
          variant="solid"
          class="my-4 text-white dark:text-white font-semibold"
          color="primary"
          size="xl"
          block
        />
      </div>
    </UContainer>
  </form>
</template>
