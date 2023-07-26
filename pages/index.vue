<template>
  <div id="hero" class="container min-h-screen mx-auto pt-20 px-2">
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
      :class="isDoneTyping ? 'mb-4' : 'mb-24 md:mb-36 lg:mb-48'"
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
      ">
    </div>
    <div id="media" v-show="isDoneTyping" class="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-8
      pt-24
    ">
      <a href="./img/media/ogw-allow-continue-chemtrails.jpg" target="_blank"><img src="/img/media/ogw-allow-continue-chemtrails.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/ogw-authority-belief.jpg" target="_blank"><img src="/img/media/ogw-authority-belief.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/ogw-concious-light-darkness.jpg" target="_blank"><img src="/img/media/ogw-concious-light-darkness.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/ogw-critical-mass.jpg" target="_blank"><img src="/img/media/ogw-critical-mass.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/ogw-freedom-politics-slave.jpg" target="_blank"><img src="/img/media/ogw-freedom-politics-slave.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/ogw-human-sickness-dare-look.jpg" target="_blank"><img src="/img/media/ogw-human-sickness-dare-look.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/ogw-natural-law-definition.jpg" target="_blank"><img src="/img/media/ogw-natural-law-definition.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/ogw-need-knowledge.jpg" target="_blank"><img src="/img/media/ogw-need-knowledge.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/ogw-no-man-command-other.jpg" target="_blank"><img src="/img/media/ogw-no-man-command-other.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/ogw-true-self-return-remember.jpg" target="_blank"><img src="/img/media/ogw-true-self-return-remember.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/ogw-truth-singular-perception.jpg" target="_blank"><img src="/img/media/ogw-truth-singular-perception.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-21st-century-illiterate.jpg" target="_blank"><img src="/img/media/togw-21st-century-illiterate.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-age-knowledge-belief-end.jpg" target="_blank"><img src="/img/media/togw-age-knowledge-belief-end.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-all-is-love.jpg" target="_blank"><img src="/img/media/togw-all-is-love.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-anarchy-meaning.jpg" target="_blank"><img src="/img/media/togw-anarchy-meaning.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-anger-justice-right.jpg" target="_blank"><img src="/img/media/togw-anger-justice-right.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-applied-knowledge-power.jpg" target="_blank"><img src="/img/media/togw-applied-knowledge-power.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-consiousness-reponsible-adult.jpg" target="_blank"><img src="/img/media/togw-consiousness-reponsible-adult.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-corrects-you-ego-feel.jpg" target="_blank"><img src="/img/media/togw-corrects-you-ego-feel.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-covid-def.jpg" target="_blank"><img src="/img/media/togw-covid-def.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-ignorance-bad-person.jpg" target="_blank"><img src="/img/media/togw-ignorance-bad-person.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-increase-your-light.jpg" target="_blank"><img src="/img/media/togw-increase-your-light.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-lion-fear-mission-same-place.jpg" target="_blank"><img src="/img/media/togw-lion-fear-mission-same-place.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-lion-knowledge-sheep-information.jpg" target="_blank"><img src="/img/media/togw-lion-knowledge-sheep-information.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-love-fear-illusion-freedom-truth.jpg" target="_blank"><img src="/img/media/togw-love-fear-illusion-freedom-truth.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-love-knowledge-share.jpg" target="_blank"><img src="/img/media/togw-love-knowledge-share.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-man-nature-refuse-be.jpg" target="_blank"><img src="/img/media/togw-man-nature-refuse-be.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-people-power-greater.jpg" target="_blank"><img src="/img/media/togw-people-power-greater.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-privacy-annonymity.jpg" target="_blank"><img src="/img/media/togw-privacy-annonymity.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-real-enemy.jpg" target="_blank"><img src="/img/media/togw-real-enemy.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-right-to-govern.jpg" target="_blank"><img src="/img/media/togw-right-to-govern.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-say-no.jpg" target="_blank"><img src="/img/media/togw-say-no.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-seems-impossible-done.jpg" target="_blank"><img src="/img/media/togw-seems-impossible-done.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-silence-cowardice.jpg" target="_blank"><img src="/img/media/togw-silence-cowardice.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-soft-people-truth.jpg" target="_blank"><img src="/img/media/togw-soft-people-truth.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-strong-inner-wellness.jpg" target="_blank"><img src="/img/media/togw-strong-inner-wellness.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-truth-first-love-second.jpg" target="_blank"><img src="/img/media/togw-truth-first-love-second.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
      <a href="./img/media/togw-turn-truth-religion.jpg" target="_blank"><img src="/img/media/togw-turn-truth-religion.jpg" class="p-1 hover:bg-black dark:hover:bg-white rounded-md" alt="media" loading="lazy" /></a>
    </div>
    <footer v-if="isDoneTyping" class="flex mx-auto flex-col justify-start px-2 mt-48 border-t border-gray-200 dark:border-gray-900">
      <div class="flex flex-col justify-start">

        <!-- BRANDIG -->
        <NuxtLink to="#hero" class="flex flex-1 flex-col justify-center mx-auto">
          <div class="mx-auto -mt-20 w-36 h-36 lg:w-36 lg:h-36 bg-[url('/img/togw-logomark-app-black-on-white.jpg')] dark:bg-[url('/img/togw-logomark-app-white-on-zinc.jpg')] bg-contain" />
          <h2 class="mt-4 font-black text-2xl md:text-3xl text-center">העבודה הגדולה האחת</h2>
        </NuxtLink>

        <!-- TELEGRAM -->
        <UButton to="https://t.me/theonegreatwork" target="_blank" label="בטלגרם" color="primary" variant="solid" size="md" class="mx-auto mt-3 mb-6 hover:scale-[1.1] hover:rotate-[6deg]"/>
        
        <!-- QUOTE -->
        <p class="mx-auto mt-4 mb-2 font-thin text-sm text-center tracking-wider text-gray-500">הכל זה אהבה, פחד הוא אשליה, כל היצורים חופשיים והאמת לעולם לא ניתנת להכחדה</p>
        <!-- LOVELEX -->
        <NuxtLink to="https://t.me/lexxrex" target="_blank" class="mx-auto mt-0 mb-4 font-thin text-xs">
            <!-- Made with 🧠 from ❤️ for ⚖️ by Lex -->
            Made with ❤️ by Lex
            <!-- נוצר מ- ❤️ ע"י לקס -->
        </NuxtLink>

        <!-- <div class="flex justify-start">

          <div class="flex-1">
            <p class="mb-4">שלום אחד וכולם,</p>
            <p class="mb-4">גוף הידע המשותף פה מהווה את המפתח הראשי לכל המנעולים על כל הדלתות של כל הכלובים התודעתיים בהם רובנו עדיין נמצאים ואפילו לא מודעים. כל מי שיבחר 
              <NuxtLink to="https://youtu.be/_GzPYIt7lHM" target="_blank">ללמוד</NuxtLink>
              ולהשתמש בו, יוכל להשתחרר ולעזור לשחרר את התודעה של כל אחד ואחת מאיתנו ממערכות השליטה המחשבתית והתודעתית אליהן נחשפנו מלידה. וכקולקטיב, להיות חלק מהפתרון שיוביל לשינוי במצב הפיזי הקיים בחברה - מעבדות לחירות.
            </p>
            <p>היציאה מעבדות לחירות יכולה להתממש ולהתקיים רק ע״י למידה, הבנה ועשייה של 
              <NuxtLink to="https://t.me/therealnaturallaw/69" target="_blank">העבודה הגדולה האחת</NuxtLink>.
              העבודה הגדולה האחת מתחילה בלמידה יסודית ועצמאית של החוק הטבעי האמיתי. וממשיכה בלעזור ולהעניק ידע שמשחרר את התודעה ממקום של אחריות מוסרית ואהבה לאחר. אלו גם המניעים להקמת ערוץ החוק הטבעי האמיתי והבסיס שמחבר בין חברי הקבוצה של העבודה הגדולה האחת.
            </p>
          </div>

          <div class="flex-1">
            2
          </div>

        </div> -->

      </div>
    </footer>
  </div>
</template>

<script setup lang="js">
import TypeIt from 'typeit'

const typingBody = ref([])
const typingTitle = ref([])

onMounted(() => {
  isTypingTitle()
  // isTypingBody()

})

// ---------------------------------------------------
// SCROLL TO BOTTOM
function initAutoScrollToBottom() {
  window.scrollTo(0,document.body.scrollHeight)
}

// ---------------------------------------------------
// SHOW PAGE ITEMS
// var showPageItems = ref(false)

// function initShowPageItems() {
//   showPageItems.value = true
// }

// ---------------------------------------------------
// EMIT: Typing has completed
const emit = defineEmits(['doneTyping'])
const isDoneTyping = ref(false)


const emitDoneTyping = () => {
  emit('doneTyping', isDoneTyping.value = true)
  // emit('doneTyping', event.target.value)
}

// ---------------------------------------------------
// TYPING: Title
const isTypingTitle = function initTypingTitle() {
  new TypeIt(typingTitle.value, {
    strings: [],
    speed: 120,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      instance.destroy(),
      isTypingBody()
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
// TYPING: Body
const isTypingBody = function initTypingBody() {
  new TypeIt(typingBody.value, {
    strings: [],
    speed: 60,
    waitUntilVisible: true,
    afterStep: () => {
      initAutoScrollToBottom()
    },
    afterComplete: (instance) => {
      instance.destroy(),
      // initShowPageItems(),
      initAutoScrollToBottom(),
      emitDoneTyping()
      // setTimeout(initAutoScrollToBottom(), 500)
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
  .type('והנה מספר <a href="#media" alt="Media" class="font-semibold text-primary-500">קבצי מדיה</a> שיתנו לכם השראה ויעזרו לכם לחדד את המסר כשאתם משתפים עם משפחה וחברים...')
  .type('<br>')
  .type('<br>')
  .type('🙏 👇')
  .go()
}

</script>

<style lang="postcss">
:root {
  --ti-cursor-color: #47ffd4;
}
</style>