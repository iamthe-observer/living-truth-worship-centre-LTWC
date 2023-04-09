<template>
  <div
    v-dragscroll.x="true"
    class="pl-10 relative w-full h-[400px] flex gap-3 overflow-x-scroll overflow-y-hidden transition-all duration-200 will-change-transform cursor-pointer select-none active:cursor-grabbing scrollbar-hidden"
  >
    <div
      v-motion-fade
      v-for="(cont, ii) in content"
      class="flex flex-col flex-wrap justify-center h-full min-w-[400px] rounded-lg p-3 transition-all duration-200 ease-in-out relative group z-20 group"
      :key="ii"
    >
      <div
        class="overlay-clippy clippy3 group-hover:opacity-10 group-hover:translate-y-0 translate-y-20 absolute bg-prime inset-0 -z-1 opacity-0 transition-all duration-100 ease-in flex flex-col items-center"
      ></div>

      <header class="text-2xl text-prime font-Monument">{{ cont.head }}</header>

      <span class="font-Outfit">{{ cont.info }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: {
    head: string
    info: string
  }[]
}>()
</script>

<style scoped>
@keyframes circle-in-top-right {
  from {
    clip-path: circle(0%);
  }
  to {
    clip-path: circle(150% at top right);
  }
}

[transition-style='in:circle:top-right'] {
  animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) circle-in-top-right both;
}
</style>
