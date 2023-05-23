<script setup lang="ts">
import { useAppStore } from '../store/appStore'
import gsap from 'gsap'
import { CSSProperties } from 'vue'
import Loader from '../../index'
import { useRoute } from 'vue-router'

const { src, siteData: data } = storeToRefs(useAppStore())

const quote_ref = ref<HTMLElement>()
const classer = ref<{}>()
const target_ref = ref<HTMLDivElement>()
const content_container = ref<HTMLDivElement>()
const route = useRoute()
// const data = reactive(allData.home!)

onMounted(() => {
  useTitle('LTWC | Welcome!')

  watchEffect(() => {
    if (route.name === 'home' && content_container.value != undefined) {
      window.scrollTo({
        top: 0,
      })
    }
  })

  useIntersectionObserver(target_ref, ([{ isIntersecting }]) => {
    if (isIntersecting && route.name == 'home') {
      useAppStore().setIsVisible(isIntersecting)
    } else {
      useAppStore().setIsVisible(isIntersecting)
    }
  })
})

function initAnimatedBg() {
  const app_container = document.querySelector('#app_container')
  const div = document.createElement('div')
  div.setAttribute('id', 'container')
  div.setAttribute(
    'class',
    'touch-none fixed inset-0 w-full overflow-hidden p-0 m-0'
  )
  app_container?.appendChild(div)

  return Loader('home')
}

function removeAnimatedBg() {
  const app_container = document.querySelector('#app_container')
  app_container?.removeChild(document.querySelector('#container')!)
}

onBeforeUnmount(() => {
  removeAnimatedBg()
})

onMounted(() => {
  useAppStore().setIsVisible(true)

  initAnimatedBg()

  gsap.to('.drag_img', {
    opacity: 1,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.drag_img',
      start: 'top 80%',
    },
    markers: true,
  })

  gsap.to('.verse', {
    opacity: 1,
    x: -16,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: '.verse',
      start: 'top 60%',
      end: 'end 60%',
    },
  })

  gsap.to('.frame', {
    opacity: 0.3,
    duration: 1,
    delay: 0.1,
    scrollTrigger: {
      trigger: '.frame',
      start: 'top 60%',
      end: 'end 60%',
    },
  })

  gsap.to('.holdbible', {
    opacity: 1,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.holdbible',
      start: 'top 60%',
      end: 'end 60%',
    },
  })

  gsap.to('.mission_title', {
    opacity: 1,
    x: 80,
    duration: 2,
    scrollTrigger: {
      trigger: '.mission_title',
      start: 'top 80%',
      end: 'end 60%',
    },
  })

  gsap.to('.mission_text', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.mission_text',
      start: 'top 80%',
      end: 'end 60%',
    },
  })

  runParallax(quote_ref, classer)
})

function runParallax(
  target: Ref<HTMLElement | undefined>,
  classer: globalThis.Ref<{} | undefined>
) {
  const { tilt, roll, source } = useParallax(target)
  const isHovered = useElementHover(target)

  const cardParallax = computed<CSSProperties>(() => ({
    transform: `rotateX(${roll.value * 30}deg) rotateY(${
      tilt.value * 30
    }deg) scale(110%)`,
    transition: '.3s ease-out all',
    left: '25%',
    opacity: '70%',
    perspective: 100,
  }))

  watchEffect(() => {
    if (isHovered.value) {
      classer.value = cardParallax.value
    } else {
      classer.value = {
        opacity: '30%',
        left: '25%',
        transition: '.3s ease-out all',
        transform: `rotateX(${0 * 20}deg) rotateY(${0 * 20}deg)`,
      }
    }
  })
}
</script>

<template>
  <div class="target w-full h-40 absolute top-32" ref="target_ref"></div>

  <div
    ref="content_container"
    class="w-full h-full relative flex flex-col bg-transparent z-10"
  >
    <HomeVideo />
    <!-- scroll quick alerts and news -->
    <div
      class="wrapper border-y-4 border-white shadow-2xl bg-prime text-white font-bold grid place-items-center py-2"
    >
      <div class="marquee">
        <p class="" v-for="ann in data.home?.announcements">{{ ann }}</p>
      </div>
    </div>

    <!-- introduction -->
    <section
      class="relative flex flex-col items-center justify-center text-[1.5em] py-28 h-screen bg-base300"
    >
      <!-- heading -->
      <div
        class="relative uppercase self-start text-[2.8em] w-[700px] flex justify-center text-black font-Unbound z-10 mission-trigger -left-20"
      >
        <Bubbletext
          :default_clr="'000'"
          :ID="'mission'"
          class="tracking-wider mission text-center font-light mission_title opacity-0"
          :text="data.home?.mission_statement.title!"
          :clrs="{
            h: [205, 205, 205],
            h_adj: [155, 155, 155],
          }"
        />
      </div>
      <!-- mission statement -->
      <div
        class="absolute left-[35%] top-40% -translate-x-1/2 -translate-y-1/2"
      >
        <div class="w-3 h-16 bg-prime"></div>
        <div class="h-3 w-80 bg-prime"></div>
      </div>

      <div
        class="self-end w-2/4 text-justify right-20 text-black font-Unbound font-normal drop-shadow-lg hover:scale-105 transition-transform peer duration-150 ease-in-out text-xl z-10 pr-24 mission_text opacity-0"
      >
        {{ data.home?.mission_statement.body[0] }}
        <span class="">
          {{ data.home?.mission_statement.body[1] }}
        </span>
      </div>
      <!-- background image -->
      <div
        class="peer-hover:opacity-5 transition-opacity duration-500 ease-out opacity-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img
          src="https://live.staticflickr.com/65535/52864536387_b8d4d45fae_o.png"
          alt=""
        />
      </div>
    </section>
    <!-- <QuickNavigationBox /> -->

    <!-- showcase images -->
    <section
      ref="test"
      class="relative flex flex-col text-[1.5em] gap-10 bg-base900 py-7 px-10"
    >
      <!-- <div class="grid grid-cols-3 grid-rows-2 gap-2">
        <div class="bg-sec w-full h-96 overflow-clip" v-for="i in 2"></div>
      </div> -->

      <div class="grid grid-cols-3 grid-rows-2 gap-2">
        <div
          v-for="(source, i) in src"
          :ref="`parallax_img${i}`"
          :class="
            source
              ? 'w-full h-96 flex justify-center items-center overflow-hidden img_item perspective'
              : 'w-full h-96 relative overflow-hidden img_item perspective'
          "
        >
          <img
            v-if="source"
            class="object-cover shrink-0 w-full h-full"
            :src="source"
            alt=""
          />
          <div
            v-if="i == 0"
            class="uppercase flex justify-between items-end px-6 w-full h-full pb-5 bg-prime"
          >
            <span
              v-motion-slide-visible-left
              class="text-white font-bold bubble-text font-Unbound"
              >Visit Us</span
            >
            <svg
              v-motion-slide-visible-top
              class="w-16 aspect-square"
              fill="#fff"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 476.213 476.213"
              xml:space="preserve"
              stroke="#fff"
              stroke-width="0.004762130000000001"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <polygon
                  points="287.5,384.394 253.107,418.787 253.107,0 223.107,0 223.107,418.787 188.713,384.394 167.5,405.606 238.107,476.213 308.713,405.606 "
                ></polygon>
              </g>
            </svg>
          </div>
          <!-- screenshot of location of church #links you to google map location -->
          <div
            v-if="i == 3"
            class="uppercase flex justify-between items-end h-full group"
          >
            <img
              class="object-cover w-full h-full group-hover:scale-110 transition-all duration-200 ease-out brightness-50 group-hover:brightness-90"
              src="https://live.staticflickr.com/65535/52865504755_fdc1f77d16_o.png"
              alt=""
            />
            <RouterLink
              to="/visit"
              class="group-hover:text-3xl transition-all duration-300 ease-out"
            >
              <button
                class="transition-all duration-200 ease-in-out border-base900 group-hover:py-10 group-hover:bottom-0 group-hover:w-full text-white group-hover:border-prime group-hover:bg-prime group-hover:text-white border-[5px] font-bold font-Unbound px-3 py-1 absolute z-50 bottom-10 left-1/2 translate-x-[-50%] w-[80%]"
              >
                Find Us!
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- quick navigation section -->
    <section
      class="flex flex-col text-[1.5em] py-12 min-h-screen overflow-x-hidden justify-center bg-base100"
    >
      <header
        v-motion-fade
        class="text-black text-[1em] pl-10 font-Unbound flex gap-10 items-center"
      >
        <Bubbletext
          :default_clr="'000'"
          :ID="'Find'"
          class="font-light"
          :text="data.home?.quick_nav_section.title!"
        />
        <svg
          fill="#000000"
          width="80px"
          height="80px"
          viewBox="-2.4 -2.4 28.80 28.80"
          id="right-arrow"
          data-name="Flat Line"
          xmlns="http://www.w3.org/2000/svg"
          class="icon flat-line"
          transform="rotate(0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#000"
            stroke-width="0.4800000000000001"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <line
              id="primary"
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              style="
                fill: none;
                stroke: #000000;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 0.792;
              "
            ></line>
            <polyline
              id="primary-2"
              data-name="primary"
              points="18 15 21 12 18 9"
              style="
                fill: none;
                stroke: #000000;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 0.792;
              "
            ></polyline>
          </g>
        </svg>
      </header>

      <HorizontalScroller :content="data.home?.quick_nav_section.body!" />

      <div
        class="flex w-full items-center justify-end gap-2 relative pr-10 mt-1"
      >
        <img
          class="w-6 aspect-square drag_img"
          src="../assets/icons/drag-left-svgrepo-com.svg"
          alt=""
        />
        <span class="drag_txt font-Unbound font-lighter text-sm"
          >Drag to Scroll</span
        >
        <img
          class="drag_img w-6 aspect-square"
          src="../assets/icons/drag-right-svgrepo-com.svg"
          alt=""
        />
      </div>
    </section>

    <!-- bible quote -->
    <section
      ref="quote_ref"
      class="spikes_container h-screen quotes flex items-center w-full relative"
    >
      <img
        src="https://live.staticflickr.com/65535/52918754843_2c8497cb25_o.png"
        class="-rotate-12 -translate-x-20 holdbible opacity-0"
        alt=""
        srcset=""
      />

      <div
        :style="classer"
        class="border-[10px] border-collapse border-prime w-1/2 h-1/2 absolute translate-x-1/2 -z-1 frame opacity-0 perspective"
      ></div>
      <span
        class="p-10 text-white font-bold text-3xl tracking-wide drop-shadow-md font-Gloock verse opacity-0 translate-x-40 leading-9"
        >{{ data.home?.bible_verse.quote }}
        <span class="bg-prime block w-fit px-4 py-2 mt-2"
          >{{ data.home?.bible_verse.loc }}
        </span></span
      >
    </section>
    <Footer />
  </div>
</template>

<style scoped>
.mission_title {
  cursor: url(../assets/icons/circle.svg);
}

.perspective {
  transform: perspective(3000px);
}
.wrapper {
  max-width: 100%;
  overflow: hidden;
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 50s linear infinite;
}

.marquee p {
  display: inline-block;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
