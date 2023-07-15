<template>
  <UContainer>
    <ColorModeButton />
    <div class="m-4">
      <p class="text-2xl font-bold">
        Home
      </p>
      <!-- <p v-if="profiles">{{ profiles  }}</p> -->
      <ul v-if="profiles">
        <li v-for="profile in profiles" :key="profile['id']">
          <Avatar :path="profile['avatar_url']"/>
          {{ profile['username'] }} <br> {{ profile['website'] }}
        </li>
      </ul>
      <p v-else>
        Loading...
      </p>
      {{ profiles }}
      <UIcon name="i-heroicons-bars-3" class="text-2xl bg-clr" />
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
