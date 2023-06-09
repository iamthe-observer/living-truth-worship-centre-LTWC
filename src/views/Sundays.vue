<template>
  <main class="lg:pt-[59px] pt-5 sundays-page bg-base300">
    <section class="relative h-screen">
      <div v-if='!if_sm'
        class="absolute bottom-[15%] left-10 flex flex-col w-max text-prime text-[3em] font-Monument drop-shadow-xl z-50 gap-1 font-light leading-tight">
        <span v-motion-slide-left><span class="text-white drop-shadow-lg">{{ data?.title[0] }}</span><br />{{
          data?.title[1] }}</span>
      </div>

      <div class="lg:h-[80%] h-full w-full overflow-clip shadow-lg relative">
        <div v-if='if_sm'
          class="absolute bottom-10 right-4 flex flex-col items-end w-max text-prime text-right text-[1.5em] font-Monument drop-shadow-lg z-50 gap-1 font-light leading-tight">
          <span v-motion-slide-left class="">
            {{ data?.title[0] }}
          </span>
          <span class="w-2/3">{{ data?.title[1] }}</span>
        </div>

        <img v-motion-fade src="https://live.staticflickr.com/65535/52865514555_4b3f8457be_o.jpg"
          class="h-full w-full object-cover -z-1" alt="" srcset="" />
      </div>
    </section>

    <!-- section for content -->
    <section class="pt-10 flex-col flex gap-32">
      <div class="flex lg:flex-row flex-col lg:gap-32 gap-20 h-max">
        <!-- left side -->
        <div
          class="lg:w-[45%] mx-auto lg:mx-0 w-[90%] h-full flex flex-col lg:gap-20 gap-10 font-Monument lg:pl-10 p-0 tracking-wide text-2xl">
          <span class="w-full first-letter:text-[1.6em] first-letter:font-thin">Building a community founded on the truth
            of
            Christ's
            teachings,where <span class="text-prime uppercase">love</span>, <span
              class="text-prime uppercase">faith</span> and
            <span class="text-prime uppercase">service</span> come together to make a positive impact on the world.</span>
          <div class="w-full">
            <img src="https://live.staticflickr.com/65535/52865514565_275c50ef28_o.jpg" alt="" class="object-contain" />
          </div>
        </div>
        <!-- right side -->
        <div class="lg:w-[55%] w-[90%] lg:mx-0 mx-auto min-h-full text-2xl flex flex-col gap-8">
          <p class="font-Unbound">
            {{ data?.section1.p1 }}
          </p>
          <p class="font-Unbound font-light lg:text-md text-[.8em]">
            {{ data?.section1.p2 }}
          </p>

          <div class="flex flex-col gap-10">
            <div v-for="info in data?.section1.FAQ" class="">
              <h1 class="font-Monument text-prime text-xl mb-2">
                {{ info.q }}
              </h1>
              <p
                class="relative lg:before:absolute lg:before:contents-[''] lg:before:top-3 lg:before:left-10 lg:before:w-2 lg:before:aspect-square lg:before:rounded-full lg:before:bg-prime font-Unbound text-[.7em] lg:px-10 px-0 lg:pl-20 pl-4">
                {{ info.a }}
              </p>
            </div>
          </div>

          <p class="font-Monument text-2xl">
            We can't wait to see you this Sunday!
          </p>
        </div>
      </div>
    </section>

    <main class="pt-[59px] flex flex-col bg-transparent z-50 isolate">
      <section
        class="min-h-[55vh] bg-base900 flex lg:flex-row flex-col lg:gap-0 gap-10 justify-evenly items-center lg:px-10 lg:py-10 px-[5%] py-10">
        <div v-if="if_sm" class="flex-1 w-full h-full bg-white">
          <img src="https://live.staticflickr.com/65535/52865540210_d5010dea3e_o.jpg" alt="" />
        </div>

        <div class="flex-1 text-white flex flex-col gap-4 font-Monument">
          <span class="text-4xl tracking-wide">CONNECT WITH US</span>
          <div class="max-w-[20%] w-full h-2 bg-prime"></div>
          <span class="text-xl tracking-wider">FIND YOUR PLACE AT THE <br />
            LIVING TRUTH WORSHIP CENTRE</span>
        </div>

        <div v-if="!if_sm" class="flex-1 w-full h-full bg-white">
          <img src="https://live.staticflickr.com/65535/52865540210_d5010dea3e_o.jpg" alt="" />
        </div>
      </section>

      <section class="flex h-96 my-10 text-center">
        <div v-if="!if_sm" class="lg:pl-10 w-fit h-full opacity-60">
          <img src="https://live.staticflickr.com/65535/52918680615_ecab3c105c_o.png" alt="" class="object-center" />
        </div>

        <div class="welcome_container w-full font-Monument mx-10 flex-col flex justify-center items-center relative">
          <div class="topbox absolute top-0 left-0 w-1/3 h-2 bg-prime"></div>

          <div class="welcome_text flex flex-col gap-3 text-xl lg:text-4xl">
            <span>WELCOME TO OUR PLACE OF WORSHIP.</span>
            <span class="text-[.8em] lg:[line-height:inherit;] [line-height:17px;]">THERE'S A PLACE DESIGNED JUST FOR YOU
              AT
              <span class="font-bold text-prime">LTWC</span>.</span>
          </div>

          <div class="bottombox absolute bottom-0 right-0 w-1/3 h-2 bg-prime"></div>
        </div>
      </section>

      <section class="text-white w-full h-full py-10 lg:px-10 px-[5%] bg-base900 relative">
        <Bubbletext :class="'font-Unbound text-3xl lg:text-left text-center'" :text="data?.section2.expect_head!" ID="12"
          default_clr="fff">
        </Bubbletext>

        <div class="lg:grid flex flex-col lg:grid-cols-3 gap-8 w-full lg:min-h-[400px] mt-10">
          <div v-for="(expectation, idx) in data?.section2.expectations" :key="idx"
            class="border-t-8 border-prime w-full lg:h-48 h-full flex flex-col gap-3">
            <p class="font-Monument text-2xl pt-3">{{ expectation.title }}</p>
            <span class="font-Outfit text-lg">{{ expectation.body }}</span>
          </div>

          <div class="col-span-3 lg:flex grid grid-cols-2 gap-3 w-full lg:h-56 h-full">
            <div v-for="(str, idx) in pix_str" :class="idx == 2
              ? 'w-full border-prime border-8'
              : 'w-full bg-green-700'
              ">
              <img class="object-cover w-full h-full" v-if="idx == 2 ? false : true" :src="str" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>

    <section class="py-32 lg:px-20 px-5 flex-col flex gap-10 h-max">
      <div class="relative w-full lg:h-full h-96">
        <img src="https://live.staticflickr.com/65535/52865279829_5b074e256f_o.jpg" alt=""
          class="object-cover lg:-translate-x-5 -translate-x-2 lg:-translate-y-5 -translate-y-2 brightness-90 shadow-lg w-full h-full lg:h-fit" />
        <img src="https://live.staticflickr.com/65535/52865279829_5b074e256f_o.jpg" alt=""
          class="object-cover absolute inset-0 lg:translate-x-5 translate-x-2 lg:translate-y-5 translate-y-2 shadow-xl w-full h-full lg:h-fit brightness-50" />
        <div
          class="absolute top-1/2 lg:right-[30%] right-1/2 translate-x-1/2 -translate-y-1/2 lg:w-[45%] w-[100%] h-[60%] flex flex-col justify-center p-10 lg:text-left text-center">
          <Bubbletext default_clr="fff" ID="1" text="GET WEEKLY UPDATES FROM LIVING TRUTH MINISTRIES"
            class="lg:text-[3.5em] text-md font-Unbound uppercase drop-shadow-md" :h="'e48157'" :h_adj="'f3c9b7'" />

          <span class="lg:text-2xl text-white text-sm font-Outfit drop-shadow-md">Join our House
            News email list to
            stay
            up-to-date on all things
            Passion City.</span>
          <span @click="goToSignUp"
            class="flex items-center justify-center lg:justify-start gap-3 drop-shadow-md hover:text-base300 lg:w-fit w-full cursor-pointer text-white font-Outfit">Sign
            Up <i class="font-prime pi pi-angle-double-right"></i></span>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { useAppStore } from '../store/appStore'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const { navPadding, siteData } = storeToRefs(useAppStore())
const data = computed(() => siteData.value.sundays)
const if_sm = inject('small_screen')

const goToSignUp = () =>
  document
    .getElementsByClassName('footer-container')[0]
    .scrollIntoView({ behavior: 'smooth', block: 'start' })

onMounted(() => {
  useTitle('LTWC | Sundays')

  window.scrollTo({
    top: 0,
  })

  useAppStore().setIsVisible(false)

  gsap.to('.topbox', {
    x: 400,
    scrollTrigger: {
      trigger: '.welcome_container',
      start: 'top 80%',
      end: 'top 12%',
      scrub: 3,
    },
  })

  gsap.to('.bottombox', {
    x: -400,
    scrollTrigger: {
      trigger: '.welcome_text',
      start: 'top 80%',
      end: 'top 12%',
      scrub: 3,
    },
  })
})

const pix_str = ref([
  'https://live.staticflickr.com/65535/52919403396_3dbb94148d_o.png',
  'https://live.staticflickr.com/65535/52865280994_2ee59efb3f_o.jpg',
  '',
  'https://live.staticflickr.com/65535/52864570107_e0bc628f1b_o.jpg',
])
</script>

<style scoped></style>
