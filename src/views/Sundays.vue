<template>
  <main class="pt-[59px] sundays-page bg-base300">
    <section class="relative">
      <div
        class="absolute -bottom-8 left-10 flex flex-col w-max text-prime text-[3em] font-Monument drop-shadow-lg z-50 gap-1 font-light leading-tight"
      >
        <span>{{ data?.title[0] }}<br />{{ data?.title[1] }}</span>
      </div>

      <div class="h-[80vh] w-full overflow-clip shadow-lg">
        <img
          src="https://live.staticflickr.com/65535/52865514555_4b3f8457be_o.jpg"
          class="h-full w-full object-cover -z-1"
          alt=""
          srcset=""
        />
      </div>
    </section>

    <!-- section for content -->
    <section class="pt-32 flex-col flex gap-32">
      <div class="flex gap-32 h-max">
        <!-- left side -->
        <div
          class="w-[45%] h-full flex flex-col gap-20 font-Monument pl-10 tracking-wide text-2xl"
        >
          <span class="w-full">{{ data?.section1.intro }}</span>
          <div class="w-full">
            <img
              src="https://live.staticflickr.com/65535/52865514565_275c50ef28_o.jpg"
              alt=""
              class="object-contain"
            />
          </div>
        </div>
        <!-- right side -->
        <div class="w-[55%] min-h-full text-2xl flex flex-col gap-8">
          <p class="font-Unbound">
            {{ data?.section1.p1 }}
          </p>
          <p class="font-Unbound font-light">
            {{ data?.section1.p2 }}
          </p>

          <div class="flex flex-col gap-10">
            <div v-for="info in data?.section1.FAQ" class="">
              <h1 class="font-Monument text-base900 text-xl mb-2">
                {{ info.q }}
              </h1>
              <p
                class="relative before:absolute before:contents-[''] before:top-3 before:left-10 before:w-2 before:aspect-square before:rounded-full before:bg-prime font-Unbound text-[.7em] px-10 pl-20"
              >
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
        class="min-h-[55vh] bg-base900 flex justify-evenly items-center p-10"
      >
        <div class="flex-1 text-white flex flex-col gap-4 font-Monument">
          <span class="text-4xl tracking-wide">CONNECT WITH US</span>
          <div class="max-w-[20%] w-full h-2 bg-prime"></div>
          <span class="text-xl tracking-wider"
            >FIND YOUR PLACE AT <br />
            LIVING TRUTH WORSHIP CENTRE</span
          >
        </div>

        <div class="flex-1 w-full h-full bg-white">
          <img
            src="https://live.staticflickr.com/65535/52865540210_d5010dea3e_o.jpg"
            alt=""
          />
        </div>
      </section>

      <section class="flex h-96 my-10">
        <div class="pl-10 w-fit h-full opacity-60">
          <img
            src="https://live.staticflickr.com/65535/52918680615_ecab3c105c_o.png"
            alt=""
            class="object-center"
          />
        </div>

        <div
          class="welcome_container w-full font-Monument mx-10 flex-col flex justify-center items-center relative"
        >
          <div class="topbox absolute top-0 left-0 w-1/3 h-2 bg-prime"></div>

          <div class="welcome_text flex flex-col gap-3 text-4xl">
            <span>WELCOME TO OUR PLACE OF WORSHIP.</span>
            <span class="text-xl"
              >THERE'S A PLACE DESIGNED JUST FOR YOU AT
              <span class="font-bold text-prime">LTWC</span>.</span
            >
          </div>

          <div
            class="bottombox absolute bottom-0 right-0 w-1/3 h-2 bg-prime"
          ></div>
        </div>
      </section>

      <section class="text-white w-full h-max py-10 px-10 bg-base900 relative">
        <Bubbletext
          :class="'font-Unbound text-3xl'"
          :text="data?.section2.expect_head!"
          ID="12"
          default_clr="fff"
        >
        </Bubbletext>

        <div class="grid grid-cols-3 gap-8 w-full min-h-[400px] mt-10">
          <div
            v-for="(expectation, idx) in data?.section2.expectations"
            class="border-t-8 border-prime w-full h-48 flex flex-col gap-3"
          >
            <p class="font-Monument text-2xl pt-3">{{ expectation.title }}</p>
            <span class="font-Outfit text-lg">{{ expectation.body }}</span>
          </div>

          <div class="col-span-3 flex gap-3 w-full h-56">
            <div
              v-for="(str, idx) in pix_str"
              :class="
                idx == 2
                  ? 'w-full border-prime border-8'
                  : 'w-full bg-green-700'
              "
            >
              <img
                class="object-cover w-full h-full"
                v-if="idx == 2 ? false : true"
                :src="str"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- TODO crop imageY to be more visible on the page -->
    <section class="py-32 px-20 flex-col flex gap-10 h-max">
      <div class="relative w-full h-full">
        <img
          src="https://live.staticflickr.com/65535/52865279829_5b074e256f_o.jpg"
          alt=""
          class="object-contain -translate-x-5 -translate-y-5 brightness-90 shadow-lg w-full"
        />
        <img
          src="https://live.staticflickr.com/65535/52865279829_5b074e256f_o.jpg"
          alt=""
          class="object-contain absolute inset-0 translate-x-5 translate-y-5 shadow-lg w-full brightness-50"
        />
        <div
          class="absolute top-1/2 right-[30%] translate-x-1/2 -translate-y-1/2 w-[45%] h-[60%] flex flex-col justify-center p-10"
        >
          <Bubbletext
            default_clr="fff"
            ID="1"
            text="GET WEEKLY UPDATES FROM LIVING TRUTH MINISTRIES"
            class="text-[3.5em] font-Unbound uppercase drop-shadow-md"
            :h="'e48157'"
            :h_adj="'f3c9b7'"
          />

          <span class="text-white drop-shadow-md"
            >Join our House News email list to stay up-to-date on all things
            Passion City.</span
          >
          <span
            @click="goToSignUp"
            class="flex items-center gap-3 text-white drop-shadow-md hover:text-base300 w-fit cursor-pointer"
            >Sign Up <i class="pi pi-angle-double-right"></i
          ></span>
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
