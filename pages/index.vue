<template>
  <div class="container min-h-screen mx-auto pt-20 px-2">
    <h1
      ref="typingTitle"
      class="
        font-black
        text-6xl
        md:text-8xl
        lg:text-9xl
        tracking-[-0.0125em]
        mt-12
      ">
    </h1>
    <div
      ref="typingBody"
      class="
        font-thin
        text-3xl
        md:text-4xl
        lg:text-5xl
        leading-[2.4rem]
        md:leading-[3rem]
        lg:leading-[4rem]
        mt-12
        md:mt-16
        lg:mt-20
        sm:mb-4
      ">
    </div>
    <div id="media" v-show="showPageItems" class="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-8
      pt-24
    ">
      <a href="/img/media/ogw-allow-continue-chemtrails.jpg" target="_blank"><img src="/img/media/ogw-allow-continue-chemtrails.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/ogw-authority-belief.jpg" target="_blank"><img src="/img/media/ogw-authority-belief.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/ogw-concious-light-darkness.jpg" target="_blank"><img src="/img/media/ogw-concious-light-darkness.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/ogw-critical-mass.jpg" target="_blank"><img src="/img/media/ogw-critical-mass.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/ogw-freedom-politics-slave.jpg" target="_blank"><img src="/img/media/ogw-freedom-politics-slave.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/ogw-human-sickness-dare-look.jpg" target="_blank"><img src="/img/media/ogw-human-sickness-dare-look.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/ogw-natural-law-definition.jpg" target="_blank"><img src="/img/media/ogw-natural-law-definition.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/ogw-need-knowledge.jpg" target="_blank"><img src="/img/media/ogw-need-knowledge.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/ogw-no-man-command-other.jpg" target="_blank"><img src="/img/media/ogw-no-man-command-other.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/ogw-true-self-return-remember.jpg" target="_blank"><img src="/img/media/ogw-true-self-return-remember.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/ogw-truth-singular-perception.jpg" target="_blank"><img src="/img/media/ogw-truth-singular-perception.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-21st-century-illiterate.jpg" target="_blank"><img src="/img/media/togw-21st-century-illiterate.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-age-knowledge-belief-end.jpg" target="_blank"><img src="/img/media/togw-age-knowledge-belief-end.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-all-is-love.jpg" target="_blank"><img src="/img/media/togw-all-is-love.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-anarchy-meaning.jpg" target="_blank"><img src="/img/media/togw-anarchy-meaning.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-anger-justice-right.jpg" target="_blank"><img src="/img/media/togw-anger-justice-right.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-applied-knowledge-power.jpg" target="_blank"><img src="/img/media/togw-applied-knowledge-power.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-consiousness-reponsible-adult.jpg" target="_blank"><img src="/img/media/togw-consiousness-reponsible-adult.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-corrects-you-ego-feel.jpg" target="_blank"><img src="/img/media/togw-corrects-you-ego-feel.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-covid-def.jpg" target="_blank"><img src="/img/media/togw-covid-def.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-ignorance-bad-person.jpg" target="_blank"><img src="/img/media/togw-ignorance-bad-person.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-increase-your-light.jpg" target="_blank"><img src="/img/media/togw-increase-your-light.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-lion-fear-mission-same-place.jpg" target="_blank"><img src="/img/media/togw-lion-fear-mission-same-place.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-lion-knowledge-sheep-information.jpg" target="_blank"><img src="/img/media/togw-lion-knowledge-sheep-information.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-love-fear-illusion-freedom-truth.jpg" target="_blank"><img src="/img/media/togw-love-fear-illusion-freedom-truth.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-love-knowledge-share.jpg" target="_blank"><img src="/img/media/togw-love-knowledge-share.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-man-nature-refuse-be.jpg" target="_blank"><img src="/img/media/togw-man-nature-refuse-be.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-people-power-greater.jpg" target="_blank"><img src="/img/media/togw-people-power-greater.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-privacy-annonymity.jpg" target="_blank"><img src="/img/media/togw-privacy-annonymity.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-real-enemy.jpg" target="_blank"><img src="/img/media/togw-real-enemy.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-right-to-govern.jpg" target="_blank"><img src="/img/media/togw-right-to-govern.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-say-no.jpg" target="_blank"><img src="/img/media/togw-say-no.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-seems-impossible-done.jpg" target="_blank"><img src="/img/media/togw-seems-impossible-done.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-silence-cowardice.jpg" target="_blank"><img src="/img/media/togw-silence-cowardice.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-soft-people-truth.jpg" target="_blank"><img src="/img/media/togw-soft-people-truth.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-strong-inner-wellness.jpg" target="_blank"><img src="/img/media/togw-strong-inner-wellness.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-truth-first-love-second.jpg" target="_blank"><img src="/img/media/togw-truth-first-love-second.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="/img/media/togw-turn-truth-religion.jpg" target="_blank"><img src="/img/media/togw-turn-truth-religion.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
    </div>
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

// ---------------------------------------------------
// Auto scroll
function autoScrolling() {
  window.scrollTo(300,document.body.scrollHeight)
}

// ---------------------------------------------------
// Show page items
var showPageItems = ref(false)

function showPageItemsc() {
  showPageItems.value = true
  // showPageItems = !showPageItems
  // showPageItems ? false : true
}

// ---------------------------------------------------
// Typing: Title
const typingTitlec = function typingTitlef() {
new TypeIt(typingTitle.value, {
  strings: [],
  speed: 120,
  waitUntilVisible: true,
  afterComplete: function (instance) {
    instance.destroy(),
    typingBodyc()
  }
 })
 .pause(3333)
 .type('העבודה </span>')
 .options({ speed: 80 })
 .type('האמיתית ')
 .pause(333)
 .delete(8)
 .type('החשובה ')
 .pause(222)
 .delete(7)
 .pause(140)
 .type('ה')
 .pause(555)
 .type('יחידה')
 .pause(666)
 .delete(7)
 .type(' הגדולה האחת')
 .type('</span>')
 .go()
}

// ---------------------------------------------------
// Typing: Body
const typingBodyc = function typingBodyf() {
  new TypeIt(typingBody.value, {
    strings: [],
    speed: 60,
    waitUntilVisible: true,
    afterStep: () => {
      autoScrolling()
    },
    afterComplete: (instance) => {
      instance.destroy(),
      showPageItemsc(),
      autoScrolling()
      // setTimeout(autoScrolling(), 500)
    }    
  })
  .pause(2222)
  .options({ speed: 30 })
  .type('תודה שהגעתם לאתר של קבוצת ')
  .options({ speed: 50 })
  .type('<a href="https://t.me/theonegreatwork" target="_blank" class="font-black text-primary-500">העבודה הגדולה האחת</a>. ')
  .pause(777)
  .options({ speed: 25 })
  .type('פה תוכלו לרכוש ידע על הכוח של עצמכם ואיך להשתמש בו. ')
  .pause(777)
  .options({ speed: 40 })
  .type('מכם זה ידרוש זמן, ')
  .pause(444)
  .options({ speed: 30 })
  .type('תשומת לב, ')
  .pause(333)
  .type('וכמובן רצון ללמוד איתנו את גוף הידע הנסתר שאנו לומדים ומקדמים בקבוצה. ')
  .pause(500)
  .type('לעזרכם:')
  .options({ speed: 80 })
  .move(-3)
  .type('ת')
  .move(3)
  .pause(500)
  .move(-10)
  .pause(200)
  .type(' ובאתר')
  .pause(200)
  .move(10)
  .type('<br>')
  .type('<br>')
  .options({ speed: 50 })
  .type('<span class="font-bold text-4xl md:text-5xl lg:text-6xl">גוף הידע הנסתר:</span>')
  .type('<br>')
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/4" target="_blank" class="hover:text-primary-500">✅&nbsp; סמינר החוק הטבעי האמיתי</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/58" target="_blank" class="hover:text-primary-500">✅&nbsp; עבודת התזה</a>')
  .type('<br>')
  .options({ speed: 25 })
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
  .type('<a href="https://t.me/therealnaturallaw/143" target="_blank" class="hover:text-primary-500">🙅‍♂️&nbsp; מהו בולשיט העידן החדש?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/144" target="_blank" class="hover:text-primary-500">☠️&nbsp; מהם שבעת החטאים האמיתיים?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/140" target="_blank" class="hover:text-primary-500">🧠&nbsp; מהי לוחמה פסיכולוגית?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/147" target="_blank" class="hover:text-primary-500">💎&nbsp; מהו הטריביום?</a>') 
  .type('<br>')
  .type('<a href="https://t.me/therealnaturallaw/127" target="_blank" class="hover:text-primary-500">🕊&nbsp; מהו הפתרון היחיד לשיעבוד?</a>') 
  .type('<br>')
  .type('<br>')
  .type('<span class="font-bold text-4xl md:text-5xl lg:text-6xl">למידה פוריה !</span>')
  .type('<br>')
  .type('<br>')
  .type('⚖️ 🕊 ❤️')
  .type('<br>')
  .type('<br>')
  .type('והנה מספר קבצי מדיה שיתנו לכם השראה ויעזרו לכם לחדד את המסר כשאתם משתפים עם משפחה וחברים... אז נא להעתיק להדביק ולשתף.')
  .type('<br>')
  .type('<br>')
  .type('🙏')
  .go()
}

</script>

<style lang="postcss">
:root {
  --ti-cursor-color: #47ffd4;
}
</style>