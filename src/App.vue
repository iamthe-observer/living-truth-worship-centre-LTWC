<template>
  <div class="relative w-full h-full bg-transparent">
    <!-- <Canvas></Canvas> -->
    <Navbar :is-visible="isVisible" />

    <div class="target w-full h-40 absolute top-32" ref="target_ref"></div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from './store/appStore'

const { isVisible } = storeToRefs(useAppStore())
const target_ref = ref<HTMLDivElement>()

useIntersectionObserver(target_ref, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    useAppStore().setIsVisible(isIntersecting)
  } else {
    useAppStore().setIsVisible(isIntersecting)
  }
})
</script>
