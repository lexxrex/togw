<template>
  <UContainer>
    <div class="container mx-auto pt-20">
      <div class="m-4">
        <!-- <p v-if="profiles">{{ profiles  }}</p> -->
        <ul v-if="profiles">
          <li v-for="profile in profiles" :key="profile['id']" class="py-4 flex items-center space-x-3">
            <UAvatar :src="profile['avatar_url']" :alt="profile['full_name']" class="ml-4"/>
            <span>{{ profile['full_name'] }}</span>
            <UBadge variant="theme" size="xs" :label="profile['website']" />
          </li>
        </ul>
        <p v-else>
          Loading...
        </p>
        <!-- {{ profiles }} -->
        <!-- <UIcon name="i-heroicons-bars-3" class="text-2xl bg-clr" /> -->
      </div>
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
