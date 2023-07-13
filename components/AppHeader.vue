<script setup lang="ts">
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
</script>

<template>
  <div>
    <Title>Nuxt 3 x Supabase</Title>
    <div class="flex items-center md:justify-between justify-center">
      <div class="hidden md:block">
        <button
          label="Source"
          variant="transparent"
          target="_blank"
          to="https://github.com/nuxt-modules/supabase/tree/main/demo"
          icon="i-heroicons-outline-external-link"
        />
        <button
          label="Hosted on Netlify"
          variant="transparent"
          target="_blank"
          to="https://netlify.com"
          icon="i-heroicons-outline-external-link"
        />
      </div>
      <div class="flex items-center">
        <!-- <UButton
          variant="transparent"
          :icon="colorModeIcon"
          @click="toggleDark"
        /> -->
        <button
          v-if="user"
          class="u-text-white"
          variant="transparent"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>