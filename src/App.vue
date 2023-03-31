<template>
  <teleport to="body">
    <Loading v-if="loading_app"></Loading>
  </teleport>

  <div v-if="!loading_app" class="relative w-full h-full bg-transparent z-10">
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

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin)

const { isVisible } = storeToRefs(useAppStore())
const loading_app = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading_app.value = false
  }, 0)
})
</script>
