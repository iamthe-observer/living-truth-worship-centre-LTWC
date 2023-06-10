<template>
  <nav ref="navBar" :class="isVisible
    ? 'flex justify-between items-center lg:py-5 lg:px-2 w-full min-h-[128px] fixed z-[100] top-0 text-bold backdrop-blur-lg transition-all duration-200 ease-linear text-white font-Monument tracking-wide navbar'
    : 'flex justify-between items-center w-full min-h-fit fixed z-[100] top-0 text-bold border-y-4 border-base900 transition-all duration-200 bg-base100 ease-linear font-Monument tracking-wide navbar shadow-lg'
    ">
    <!-- logo -->
    <RouterLink v-if="isVisible" to="/" v-motion-slide-left class="opacity-0 logo flex gap-3 items-center">
      <div class="grid place-items-center rounded-full w-10 lg:w-16 aspect-square">
        <img src="https://live.staticflickr.com/65535/52864536397_c81ebaab56_o.png" alt="" class="" />
      </div>
      <span v-if="isVisible" class="text-white text-[.7rem] lg:text-xl inverse-text uppercase lg:w-80 w-fit font-Unbound">
        <Bubbletext :default_clr="'fff'" :ID="'truth'" class="uppercase" :text="`living truth`" :h="'e48157'"
          :h_adj="'f3c9b7'" />
        <br />
        <Bubbletext :default_clr="'fff'" :ID="'centre'" class="uppercase" :text="`worship centre`" :h="'e48157'"
          :h_adj="'f3c9b7'" />
      </span>
      <span v-if="!isVisible" class="text-black text-2xl uppercase w-80 font-bold font-Unbound">LTWC</span>
    </RouterLink>

    <!-- links -->
    <div v-if="!if_md" :class="isVisible
      ? 'flex gap-5 items-center min-h-full pr-10'
      : 'flex gap-5 items-center justify-evenly min-h-full w-full'
      ">
      <RouterLink v-show="isVisible" v-for="(link, i) in links" :to="link.to" :key="i" :class="isVisible
        ? ` text-white linkz${i} inverse-text cursor-pointer opacity-0 relative -top-20 links text-sm hover:bg-prime px-2 py-1 transition-all duration-150 ease-in-out active:bg-transparent active:text-prime hover:shadow-md active:shadow-none`
        : ` linkz${i} cursor-pointer opacity-0 relative -top-20 text-black links text-sm hover:bg-prime hover:text-white px-2 py-1 transition-all duration-150 ease-in-out active:bg-transparent active:text-prime hover:scale-105 hover:shadow-md active:shadow-none`
        ">{{ link.label }}</RouterLink>
      <!-- <RouterLink
        v-show="!isVisible"
        v-for="(link, i) in links.slice(0, -2)"
        :to="link.to"
        :key="i"
        :class="
          link.label.toLowerCase() == $route.name
            ? `linkz${i} cursor-pointer opacity-0 relative -top-20 links text-sm bg-prime text-white transition-all duration-150 ease-in-out active:bg-transparent active:text-prime hover:scale-105 hover:shadow-md active:shadow-none py-4 px-3`
            : `linkz${i} cursor-pointer opacity-0 relative -top-20 text-black links text-sm hover:bg-prime hover:text-white transition-all duration-150 ease-in-out active:bg-transparent active:text-prime hover:scale-105 hover:shadow-md active:shadow-none py-4 px-3`
        "
        >{{ link.label }}</RouterLink
      > -->

      <!-- logo -->
      <RouterLink v-motion-fade v-if="!isVisible" to="/" class="opacity-0 logo flex gap-3 items-center">
        <div class="grid place-items-center rounded-full w-10 aspect-square">
          <img src="https://live.staticflickr.com/65535/52864536397_c81ebaab56_o.png" alt="" class="" />
        </div>
        <span class="text-black text-lg uppercase w-fit font-bold font-Unbound">LTWC</span>
      </RouterLink>

      <RouterLink v-show="!isVisible" v-for="(link, i) in links" :to="link.to" :key="i" :class="link.label.toLowerCase() == $route.name
        ? `linkz${i} cursor-pointer opacity-0 relative -top-20 links text-sm bg-prime text-white transition-all duration-150 ease-in-out active:bg-transparent active:text-prime hover:scale-105 hover:shadow-md active:shadow-none py-4 px-3`
        : `linkz${i} cursor-pointer opacity-0 relative -top-20 text-black links text-sm hover:bg-prime hover:text-white transition-all duration-150 ease-in-out active:bg-transparent active:text-prime hover:scale-105 hover:shadow-md active:shadow-none py-4 px-3`
        ">{{ link.label }}</RouterLink>
      <!-- <span
        :class="
          isVisible
            ? ' text-white opacity-0 side-menu text-lg ml-4 hover:underline cursor-pointer '
            : ' text-black opacity-0 side-menu text-xl ml-4 hover:underline cursor-pointer '
        "
        >Menu</span
      > -->
    </div>

    <RouterLink v-if="if_md && !isVisible" v-motion-fade to="/" class="opacity-0 logo flex gap-3 items-center">
      <div class="grid place-items-center rounded-full w-10 aspect-square">
        <img src="https://live.staticflickr.com/65535/52864536397_c81ebaab56_o.png" alt="" class="" />
      </div>
      <span class="text-black text-lg uppercase w-fit font-bold font-Unbound">LTWC</span>
    </RouterLink>

    <mobileNav :links="links" v-if="if_md" @close="toggle = false" :toggle="toggle">
      <div @click="toggle = !toggle" class="self-center mr-6 w-fit h-full aspect-square"><i
          class="pi pi-angle-down text-3xl font-thin"></i></div>
    </mobileNav>



  </nav>
</template>

<script setup lang="ts">
import { Power3 } from 'gsap'
import { gsap } from 'gsap'
import { useAppStore } from '../store/appStore'

gsap.registerPlugin(ScrollTrigger)

const navBar = ref<HTMLElement>()
const if_md = inject('small_screen')
const toggle = ref(false)


const props = defineProps<{
  isVisible: boolean
}>()

const links = reactive<{ label: string; to: string }[]>([
  { label: 'About', to: '/aboutLTWC' },
  { label: 'Visit', to: '/visit' },
  { label: 'Sundays', to: '/sundays' },
])

onMounted(() => {
  useAppStore().setNavRef(navBar.value!)
  if (!if_md) init_animate()
})

watch(if_md!, (new_val) => {
  if (!new_val) {
    setTimeout(() => {
      init_animate()
    }, 500)
  }
})

function init_animate() {
  gsap.to(`.logo`, {
    opacity: 1,
    duration: 1.6,
    ease: Power3.easeOut,
    scrollTrigger: '.navbar',
  })

  for (let ii = 0; ii < links.length; ii++) {
    gsap.to(`.linkz${ii}`, {
      y: 80,
      opacity: 1,
      ease: Power3.easeOut,
      delay: Number(`0.${ii}`),
      duration: 0.4,
      scrollTrigger: {
        trigger: '.navbar',
      },
    })
  }
}
</script>
