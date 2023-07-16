<script setup>
const user = useSupabaseUser()
</script>

<template>
  <div class="container" style="">
    <Account v-if="user" />
    <Auth v-else />
  </div>
</template>
