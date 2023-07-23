<template>
  <div class="container mx-auto pt-20">

    <div ref="typingHead" class="font-extrabold text-6xl md:text-8xl lg:text-9xl mt-12"></div>
    <div ref="typing" class="font-thin text-3xl md:text-4xl lg:text-5xl leading-[2.4rem] md:leading-[3rem] lg:leading-[3.6rem] mt-12 md:mt-16 lg:mt-20"></div>

  </div>
</template>

<script setup lang="ts">
import TypeIt from 'typeit'

const typing = ref([])
const typingHead = ref([])

onMounted(() => {

  new TypeIt(typingHead.value, {
    strings: [],
    speed: 70,
    waitUntilVisible: true,
    // cursorChar: '&#9878',
    // cursor: {
    //   autoPause: true
    // },
    afterComplete: function (instance) {
      instance.destroy(),
      typeItFunc()
        },
    // afterComplete: () => typeIt()
  })
  .pause(333)
  .type('העבודה החשובה</span>')
  .pause(333)
  .delete(6)
  .pause(140)
  .type('ה')
  .pause(999)
  .type('יחידה')
  .pause(666)
  .delete(7)
  .type(' הגדולה האחת')
  .type('</span>')
  .go()

})

const typeItFunc = function typeIt() {
  new TypeIt(typing.value, {
    strings: [],
    speed: 60,
    waitUntilVisible: true,
    // cursorChar: '&#9878'
  })
  .pause(1000)
  .options({ speed: 40 })
  .type('תודה שהצטרפתם לקבוצת <span class="font-black text-primary-500">העבודה הגדולה האחת</span>. פה תוכלו לרכוש ידע על הכוח של עצמכם ואיך להשתמש בו. מכם זה ידרוש זמן, תשומת לב, וכמובן רצון ללמוד איתנו את גוף הידע הנסתר שאנו לומדים ומקדמים בקבוצה. לעזרכם:')
  .pause(500)
  .move(-2)
  .type('ת')
  .move(2)
  .go()
}


</script>

<style lang="postcss">
:root {
  --ti-cursor-color: #47ffd4;
}
</style>