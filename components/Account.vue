<!-- eslint-disable camelcase -->
<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_path = ref('')
const fullname = ref('')

loading.value = true

const { data } = await supabase
  .from('profiles')
  .select('username, website, avatar_url, full_name')
  .eq('id', user.value.id)
  .single()

if (data) {
  username.value = data.username
  website.value = data.website
  avatar_path.value = data.avatar_url
  fullname.value = data.full_name
}

loading.value = false

async function updateProfile () {
  try {
    loading.value = true
    const user = useSupabaseUser()

    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date()
    }

    const { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal' // Don't return the value after inserting
    })

    if (error) { throw error }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut () {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) { throw error }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>

    <Avatar :path="avatar_path" />
    <h1 class="text-xl font-bold">{{ fullname }}</h1>

    <div class="">
      {{ '@' + username }}
    </div>

    <div>
      {{ user.email }}
    </div>

    <NuxtLink :to="website" target="_blank">
      <UBadge variant="theme" size="xs" :label="website" />
      </NuxtLink>

  </div>

</template>
