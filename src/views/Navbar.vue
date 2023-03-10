<template>
  <nav
    :class="
      isVisible
        ? 'flex justify-between items-center p-10 w-full h-32 fixed z-20 top-0 text-bold backdrop-blur-lg transition-all duration-200 ease-linear text-white font-Monument tracking-wide'
        : 'flex justify-between items-center p-10 w-full h-16 fixed z-20 top-0 text-bold border-y-4 border-black transition-all duration-200 bg-base100 ease-linear font-Monument tracking-wide'
    "
  >
    <!-- logo -->
    <div class="opacity-0 logo flex gap-3 items-center">
      <div class="grid place-items-center rounded-full w-16 aspect-square">
        <img src="../assets/result.png" alt="" class="" />
      </div>
      <span
        v-if="isVisible"
        class="text-white text-xl inverse-text uppercase w-80 font-Unbound"
        >living truth<br />worship centre</span
      >
      <span
        v-if="!isVisible"
        class="text-black text-2xl uppercase w-80 font-bold font-Unbound"
        >LTWC</span
      >
    </div>

    <!-- links -->
    <div class="flex gap-5 items-center h-full">
      <RouterLink
        to="/"
        v-for="(link, i) in links"
        :key="i"
        :class="
          isVisible
            ? ` text-white linkz${i} inverse-text cursor-pointer opacity-0 relative -top-20 links text-sm`
            : ` linkz${i} cursor-pointer opacity-0 relative -top-20 text-black links text-sm`
        "
        >{{ link }}</RouterLink
      >
      <span
        :class="
          isVisible
            ? ' text-white opacity-0 side-menu text-lg ml-4 hover:underline cursor-pointer font-bold'
            : ' text-black opacity-0 side-menu text-xl ml-4 hover:underline cursor-pointer font-bold'
        "
        >Menu</span
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Power3 } from 'gsap'
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin)

const props = defineProps<{
  isVisible: boolean
}>()
const links = reactive(['Sundays', 'Messages', 'Events', 'Ministries', 'Give'])

onMounted(() => {
  init_animate()
})

function init_animate() {
  gsap.to(`.side-menu`, {
    opacity: 1,
    duration: 2.3,
  })

  gsap.to(`.logo`, {
    opacity: 1,
    duration: 1.6,
    ease: Power3.easeOut,
  })
  for (let ii = 0; ii < links.length; ii++) {
    gsap.to(`.linkz${ii}`, {
      y: 80,
      opacity: 1,
      ease: Power3.easeOut,
      delay: Number(`0.${ii}`),
      duration: 0.4,
    })
  }
}
</script>
