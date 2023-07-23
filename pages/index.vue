<template>
  <div class="container mx-auto pt-20">

    <h1 ref="typingTitle" class="font-extrabold text-6xl md:text-8xl lg:text-9xl mt-12"></h1>
    <div ref="typingBody" class="font-thin text-3xl md:text-4xl lg:text-5xl leading-[2.4rem] md:leading-[3rem] lg:leading-[3.6rem] mt-12 md:mt-16 lg:mt-20 sm:mb-24 md:mb-36 lg:mb-48"></div>

  </div>
</template>

<script setup lang="ts">
import TypeIt from 'typeit'

const typingBody = ref([])
const typingTitle = ref([])

onMounted(() => {
  typingTitlec()
  // typingBodyc()

})

const typingTitlec = function typingTitlef() {
new TypeIt(typingTitle.value, {
  strings: [],
  speed: 100,
  waitUntilVisible: true,
  afterComplete: function (instance) {
    instance.destroy(),
    typingBodyc()
  }
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
}

const typingBodyc = function typingBodyf() {
  new TypeIt(typingBody.value, {
    strings: [],
    speed: 60,
    waitUntilVisible: true,
    afterStep: () => {
      autoScrolling()
    },
    afterComplete: function (instance) {
      instance.destroy()
    }    
  })
  .pause(1000)
  .options({ speed: 100 })
  .type('תודה שהגעתם לאתר קבוצת ')
  .options({ speed: 40 })
  .type('<span class="font-black text-primary-500">העבודה הגדולה האחת</span>. ')
  .pause(999)
  .options({ speed: 80 })
  .type('פה תוכלו לרכוש ידע על הכוח של עצמכם ואיך להשתמש בו. ')
  .pause(666)
  .options({ speed: 60 })
  .type('מכם זה ידרוש זמן, תשומת לב, וכמובן רצון ללמוד איתנו את גוף הידע הנסתר שאנו לומדים ומקדמים בקבוצה. ')
  .pause(500)
  .type('לעזרכם:')
  .options({ speed: 120 })
  .move(-2)
  .type('ת')
  .move(2)
  .pause(500)
  .move(-10)
  .pause(200)
  .type(' ובאתר')
  .pause(200)
  .move(10)
  .type('<br>')
  .type('<br>')
  .type('<span class="font-bold text-4xl md:text-5xl lg:text-6xl">גוף הידע הנסתר:</span>')
  .type('<br>')
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/4" target="_blank" class="hover:text-primary-500">✅&nbsp; סמינר החוק הטבעי האמיתי</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/58" target="_blank" class="hover:text-primary-500">✅&nbsp; עבודת התזה</a>')
  .type('<br>')
  .options({ speed: 20 })
  .type('<a href="https://t.me/therealnaturallaw/54" target="_blank" class="hover:text-primary-500">✅&nbsp; כל השקופיות</a>')
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/64" target="_blank" class="hover:text-primary-500">✅&nbsp; שאלות עזר</a>') 
  .type('<br>')
  .type('<br>')
  .type('<span class="font-bold text-4xl md:text-5xl lg:text-6xl">ידע נלווה לחוק הטבעי האמיתי:</span>')
  .type('<br>')
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/1224" target="_blank" class="hover:text-primary-500">⚖️&nbsp; מהי האמת?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/69" target="_blank" class="hover:text-primary-500">👑&nbsp; מהי העבודה הגדולה האחת?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/101" target="_blank" class="hover:text-primary-500">👁&nbsp; מה זה אומר להיות ער באמת?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/94" target="_blank" class="hover:text-primary-500">😈&nbsp; מה זה שטניזם באמת?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/81" target="_blank" class="hover:text-primary-500">❤️&nbsp; מהי אהבת אמת?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/110" target="_blank" class="hover:text-primary-500">😱&nbsp; מהו הפחד מהקרבה?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/135" target="_blank" class="hover:text-primary-500">🛠&nbsp; מהי עבודת הצללים?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/138" target="_blank" class="hover:text-primary-500">😡&nbsp; מהי המתנה המקודשת של כעס?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/113" target="_blank" class="hover:text-primary-500">🙅‍♀️&nbsp; מהי הנשיות הבלתי מקודשת?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/143" target="_blank" class="hover:text-primary-500">🙅‍♂️&nbsp; מהו בולשיט העידן החדש ודיכוי הזכריות הקדושה?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/144" target="_blank" class="hover:text-primary-500">☠️&nbsp; מהם שבעת החטאים האמיתיים?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/140" target="_blank" class="hover:text-primary-500">🧠&nbsp; מהי לוחמה פסיכולוגית?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/147" target="_blank" class="hover:text-primary-500">💎&nbsp; מהו הטריביום?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/127" target="_blank" class="hover:text-primary-500">🕊&nbsp; מהו הפתרון היחיד לשיעבוד?</a>') 
  .type('<br>')
  .go()
}

function autoScrolling() {
  window.scrollTo(0,document.body.scrollHeight);
}


</script>

<style lang="postcss">
:root {
  --ti-cursor-color: #47ffd4;
}
</style>