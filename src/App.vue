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
import Loader from '../index'

const { isVisible } = storeToRefs(useAppStore())
const target_ref = ref<HTMLDivElement>()

onMounted(() => {
  const app_container = document.querySelector('#app_container')
  const div = document.createElement('div')
  div.setAttribute('id', 'container')
  div.setAttribute(
    'class',
    'touch-none fixed inset-0 w-full overflow-hidden p-0 m-0'
  )
  app_container?.appendChild(div)
  Loader()
})

useIntersectionObserver(target_ref, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    useAppStore().setIsVisible(isIntersecting)
  } else {
    useAppStore().setIsVisible(isIntersecting)
  }
})
</script>
