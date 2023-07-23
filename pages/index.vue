<template>
  <div class="container mx-auto pt-20">
    <!-- <h1 class="flex flex-row font-extrabold text-8xl mt-12"> -->
      <!-- העבודה הגדולה האחת -->
      <!-- <span class="text-[12rem]">העבודה</span>
      <span class="text-[32rem]">הגדולה</span>
      <span class="text-[16rem]">האחת</span>  -->
    <!-- </h1> -->

    <UButton label="המשך" @click="typeIt()"/>
    <div ref="typingHead" class="font-extrabold text-8xl mt-12"></div>
    <div ref="typing" class="text-4xl mt-24"></div>

</div>

</template>

<script setup lang="ts">

import TypeIt from 'typeit'

const typing = ref([])
const typingHead = ref([])

onMounted(() => {

  new TypeIt(typingHead.value, {
    strings: [],
    speed: 100,
    waitUntilVisible: true,
    // cursorChar: '&#9878',
    // cursor: {
    //   autoPause: true
    // },
    afterComplete: function (instance) {
      instance.destroy()
        },
    // afterComplete: () => typeIt()
  })
  .pause(333)
  .type('<span class="text-8xl font-black">העבודה החשובה ה</span>')
  .pause(333)
  .delete(9)
  .type(' הכי')
  .pause(444)
  .delete(3)
  .type('ההכי חשובה')
  .pause(2222)
  .delete(10)
  .type('ה')
  .pause(999)
  .type('יחידה')
  .pause(666)
  .delete(7)
  .type(' הגדולה')
  .pause(1222)
  .type(' ה')
  .pause(11)
  .type('א')
  .pause(222)
  .type('ח')
  .pause(66)
  .type('ת')
  .pause(22)
  .type('</span>')
  .go()

})

function typeIt() {
  new TypeIt(typing.value, {
    strings: [],
    speed: 30,
    waitUntilVisible: true,
    // cursorChar: '&#9878'
  })
  .pause(1000)
  .options({ speed: 80 })
  .type('תודה שהצטרפתם לקבוצת <span class="font-black text-primary-500">העבודה הגדולה האחת</span>. פה תוכלו לרכוש ידע על הכוח של עצמכם ואיך להשתמש בו. מכם זה ידרוש זמן, תשומת לב, וכמובן רצון ללמוד איתנו את גוף הידע הנסתר שאנו לומדים ומקדמים בקבוצה. לעזרכם:')
  .pause(500)
  .move(-2)
  .type('ת')
  .move(2)
  .go()
}



// const client = useSupabaseClient()
// const baseUrl = 'https://umjsqfwlhbsyfaqlyanw.supabase.co/storage/v1/object/sign/avatars/'

// const { data: profiles } = await useAsyncData('profiles', async () => {
//   const { data } = await client.from('profiles').select('*')
//   return data
// })

</script>

<style lang="postcss">
:root {
  --ti-cursor-color: #47ffd4;
}
</style>