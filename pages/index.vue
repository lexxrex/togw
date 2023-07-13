<template>
  <UContainer>
    <ColorModeButton />
    <div class="m-4">
      <p class="text-2xl font-bold text-black dark:text-white">
        Home
      </p>
      <!-- <p v-if="profiles">{{ profiles  }}</p> -->
      <ul v-if="profiles">
        <li v-for="profile in profiles" :key="profile['id']">
          {{ profile['username'] }} <br> {{ profile['website'] }}
        </li>
      </ul>
      <p v-else>
        Loading...
      </p>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const client = useSupabaseClient()

const { data: profiles } = await useAsyncData('profiles', async () => {
  const { data } = await client.from('profiles').select('*')
  return data
})

</script>
