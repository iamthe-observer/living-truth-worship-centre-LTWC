<template>
  <main class="pt-[59px] flex flex-col bg-base900">
    <!-- map section -->
    <section
      class="min-h-[75vh] bg-base900 flex justify-evenly items-center p-10 py-32"
    >
      <div
        class="text-head text-white font-Unbound text-[3.5em] flex flex-col [line-height:0;]"
      >
        <span class="warp-text">{{ visitData?.head_text[0] }}</span>
        <span class="warp-text">{{ visitData?.head_text[1] }}</span>
        <span class="warp-text text-prime">{{ visitData?.head_text[2] }}</span>

        <span
          v-motion-slide-left
          class="leading-tight text-4xl"
          v-if="animation_done"
          ><Bubbletext
            :text="visitData?.head_text[3]!"
            ID="rock"
            default_clr="fff"
          />
          <svg
            class="animated-arrow icon flat-line inline-block"
            fill="#fff"
            width="120px"
            height="120px"
            viewBox="-2.4 -2.4 28.80 28.80"
            id="right-arrow"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#fff"
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
                  stroke: #fff;
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
                  stroke: #fff;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 0.792;
                "
              ></polyline>
            </g>
          </svg>
        </span>
      </div>

      <div
        class="map-container bg-base300 hover:scale-110 transition-all duration-500 ease-in-out"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.5921512871546!2d-79.71325138101865!3d43.71909411492406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3dc4a2d9a599%3A0xeb6009c0f2222661!2sClark%20Blvd%2C%20Brampton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sgh!4v1679394148613!5m2!1sen!2sgh"
          width="600"
          height="400"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

    <section
      class="max-h-screen py-32 px-10 flex flex-col gap-10 bg-base900 relative isolate"
    >
      <div class="absolute -z-1 top-0 right-0 w-3/4 h-full clip-para">
        <img
          class="object-cover w-full h-full"
          src="../assets/edited/02.webp"
          alt="image of the church"
          srcset=""
        />
      </div>
      <!-- <h1 class="w-full text-4xl font-Unbound">Details</h1> -->
      <Bubbletext
        :default_clr="'fff'"
        :ID="'details'"
        class="tracking-wider mission text-center font-Unbound w-fit text-4xl hover-unerline-animation"
        :text="visitData?.details.title!"
        :clrs="{
          h: [205, 205, 205],
          h_adj: [155, 155, 155],
        }"
      />

      <div class="flex flex-col w-full">
        <!-- details for sunday service -->
        <div v-for="info in visitData?.details.info" class="w-2/5 font-Outfit">
          <p
            class="p-4 border-l-4 border-white transition-all duration-200 hover:border-l-8 ease-out hover:border-prime text-white"
          >
            <span class="block font-bold text-xl">{{ info.head }}</span>
            <span class="block">{{ info.body }}</span>
          </p>
        </div>
      </div>
    </section>

    <section
      class="text-white max-h-screen flex justify-between mt-32 px-10 min-h-[1900px] gap-3 bg-base900 relative isolate"
    >
      <div class="w-3/5 flex flex-col">
        <h1 class="font-Monument text-[2em]">
          {{ visitData?.expectations.title }}
        </h1>
        <p class="text-md font-Unbound">
          {{ visitData?.expectations.title_exp }}
        </p>

        <div class="w-full h-full gap-7 grid grid-cols-2 pr-5 mt-10">
          <div
            class="border-t-8 border-prime flex flex-col gap-5 py-8"
            v-for="info in visitData?.expectations.info"
          >
            <h1 class="font-Monument text-2xl">{{ info.head }}</h1>
            <p class="font-Unbound font-light">
              {{ info.body }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex-1 image_container">
        <img
          src="https://live.staticflickr.com/65535/52864536457_2a4b9c119b_o.jpg"
          alt=""
          class="image w-[85%] mx-auto"
        />
      </div>
    </section>

    <section
      class="my-32 max-h-screen py-32 px-10 flex flex-col gap-3 bg-base900 relative isolate"
    >
      <div class="absolute -z-1 top-0 right-0 w-3/4 h-full clip-para">
        <img
          class="object-cover w-full h-full"
          src="../assets/edited/03.webp"
          alt="image of the church"
          srcset=""
        />
      </div>
      <!-- <h1 class="w-full text-4xl font-Unbound">Details</h1> -->
      <Bubbletext
        :default_clr="'fff'"
        :ID="'details'"
        class="tracking-wider mission text-center font-Unbound w-fit text-4xl hover-unerline-animation"
        :text="`Content`"
        :clrs="{
          h: [205, 205, 205],
          h_adj: [155, 155, 155],
        }"
      />

      <div class="flex gap-6 w-full">
        <!-- details for sunday service -->
        <div class="w-2/5 pt-10">
          <p
            class="p-4 border-l-4 border-white transition-all duration-200 hover:border-l-8 ease-out hover:border-prime text-white"
          >
            <span class="block font-bold text-xl">Main Service</span>
            <span class="block">9:15am • 11:00am • 4:30pm</span>
          </p>
        </div>
      </div>
    </section>

    <section
      class="my-32 max-h-screen py-32 px-10 flex flex-col items-end gap-3 bg-base900 relative isolate"
    >
      <div class="absolute -z-1 top-0 left-0 w-3/4 h-full clip-para-reverse">
        <img
          class="object-cover w-full h-full"
          src="../assets/edited/05.jpg"
          alt="image of the church"
          srcset=""
        />
      </div>
      <!-- <h1 class="w-full text-4xl font-Unbound">Details</h1> -->
      <Bubbletext
        :default_clr="'fff'"
        :ID="'details'"
        class="tracking-wider mission text-center font-Unbound w-fit text-4xl hover-unerline-animation"
        :text="`Content`"
        :clrs="{
          h: [205, 205, 205],
          h_adj: [155, 155, 155],
        }"
      />

      <div class="flex gap-6 w-full justify-end">
        <!-- details for sunday service -->
        <div class="w-2/5 pt-10 text-right">
          <p
            class="p-4 border-r-4 border-white transition-all duration-200 hover:border-r-8 ease-out hover:border-prime text-white"
          >
            <span class="block font-bold text-xl">Main Service</span>
            <span class="block">9:15am • 11:00am • 4:30pm</span>
          </p>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { useAppStore } from '../store/appStore'
// @ts-ignore
import SplitTextJS from 'split-text-js'
// gsap.registerPlugin(ScrollTrigger)

const { siteData: data } = storeToRefs(useAppStore())
const visitData = computed(() => data.value.visit)

const animation_done = ref(false)

onMounted(() => {
  useTitle('LTWC | Visit')

  window.scrollTo({
    top: 0,
  })

  watchEffect(() => {
    if (animation_done.value == true) {
      setTimeout(() => {
        let tween = gsap.fromTo(
          '.animated-arrow',
          {
            opacity: 1,
            duration: 1.3,
            x: 0,
            repeat: -1,
          },
          {
            opacity: 0,
            duration: 1.3,
            x: 80,
            repeat: -1,
          }
        )
      }, 500)
    }
  })

  setTimeout(() => (animation_done.value = true), 4000)
  useAppStore().setIsVisible(false)
  const titles = gsap.utils.toArray('.warp-text')
  const tl = gsap.timeline()

  titles.forEach(title => {
    const splitTitle = new SplitTextJS(title)

    tl.from(
      splitTitle.chars,
      {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.03,
      },
      '<'
    ).to(
      splitTitle.chars,
      {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.03,
      },
      '<1'
    )
  })

  setTimeout(() => {
    gsap.to('.image', {
      scrollTrigger: {
        trigger: '.image_container',
        start: 'top 12%',
        // @ts-ignore
        end: () =>
          `+=${document.querySelector('.image_container')!.clientHeight * 0.7}`,
        scrub: 3,
        pin: true,
      },
    })
  }, 500)
})
</script>
