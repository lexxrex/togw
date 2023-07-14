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
          <Avatar :path="profile['avatar_url']"/>
          {{ profile['username'] }} <br> {{ profile['website'] }}
          <!-- <UAvatar :src="'https://umjsqfwlhbsyfaqlyanw.supabase.co/storage/v1/object/sign/avatars/' + " alt="Avatar" size="xl" /> -->
        </li>
      </ul>
      <p v-else>
        Loading...
      </p>
      {{ profiles }}
    </div>
  </UContainer>

</template>

<script setup lang="ts">
const client = useSupabaseClient()
const baseUrl = 'https://umjsqfwlhbsyfaqlyanw.supabase.co/storage/v1/object/sign/avatars/'

const { data: profiles } = await useAsyncData('profiles', async () => {
  const { data } = await client.from('profiles').select('*')
  return data
})

</script>
