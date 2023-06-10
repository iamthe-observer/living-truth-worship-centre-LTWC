<template>
  <teleport to="body">
    <Loading v-if="loading_app"></Loading>
  </teleport>

  <div v-if="!loading_app" class="church relative min-w-full h-full bg-transparent z-10">
    <!-- <Canvas></Canvas> -->
    <Navbar :is-visible="isVisible" />

    <router-view v-slot="{ Component }">
      <!-- <keep-alive> -->
      <component :is="Component" />
      <!-- </keep-alive> -->
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { useAppStore } from './store/appStore'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

gsap.registerPlugin(ScrollTrigger)

const breakpoints = useBreakpoints(breakpointsTailwind)
const if_sm = breakpoints.smaller('lg')
const if_md = breakpoints.smaller('md')

provide('small_screen', if_sm)
provide('nav_screen', if_md)

const { isVisible } = storeToRefs(useAppStore())
const loading_app = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading_app.value = false
  }, 0)
})
</script>
