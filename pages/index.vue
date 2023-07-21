<template>
  <div class="container mx-auto pt-20">
    <h1 class="flex flex-row justify-center min-h-screen font-extrabold text-8xl mt-24">
      העבודה הגדולה האחת
      <!-- <span class="text-[12rem]">העבודה</span>
      <span class="text-[32rem]">הגדולה</span>
      <span class="text-[16rem]">האחת</span>  -->
    </h1>
  </div>

</template>

<script setup lang="ts">
const client = useSupabaseClient()
const baseUrl = 'https://umjsqfwlhbsyfaqlyanw.supabase.co/storage/v1/object/sign/avatars/'

const { data: profiles } = await useAsyncData('profiles', async () => {
  const { data } = await client.from('profiles').select('*')
  return data
})

</script>
