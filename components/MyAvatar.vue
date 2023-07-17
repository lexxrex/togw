<script setup>
// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['path'])
const { path } = toRefs(props)
const supabase = useSupabaseClient()
const src = ref('')

const downloadImage = async () => {
  try {
    const { data, error } = await supabase.storage.from('avatars').download(path.value)
    if (error) { throw error }
    src.value = URL.createObjectURL(data)
  } catch (error) {
    console.error('Error downloading image: ', error.message)
  }
}

downloadImage()

</script>

<template>
  <div class="w-20 h-20">
    <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="rounded-full"
    >
    <div v-else class="rounded-full w-max h-max" />

    <!-- <div style="width: 10em; position: relative;">
      <label class="button primary block" for="single">
        {{ uploading ? 'Uploading ...' : 'Upload' }}
      </label>
      <input
        id="single"
        style="position: absolute; visibility: hidden;"
        type="file"
        arounded-full/*"
        :disabled="uploading"
        @change="uploadAvatar"
      >
    </div> -->
  </div>
</template>
