<template>
  <span
    @mouseleave="removeClasses"
    ref="container"
    class="bubble-text font-extralight"
  >
    <span
      ref="hover_spans"
      v-for="(txt, i) in text.split('')"
      @mouseleave="removeClasses"
      class="transition-all duration-200 ease-out"
      @mouseover="$event => setHoverStyle($event, i)"
      :key="i"
      >{{ txt }}</span
    >
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
const container = ref<HTMLSpanElement>()
const hover_spans = ref<HTMLSpanElement[]>([])

function removeClasses() {
  hover_spans.value.forEach(span => {
    span.classList.remove('hover')
    span.classList.remove('hover-adj')
  })
}
function setHoverStyle(e: MouseEvent, idx: number) {
  removeClasses()
  // @ts-ignore
  e.target!.classList.add('hover')
  // @ts-ignore
  e.target!.classList.add('cursor-pointer')
  hover_spans.value[idx - 1].classList.add('hover-adj')
  hover_spans.value[idx + 1].classList.add('hover-adj')
}
</script>

<style scoped>
.hover {
  @apply font-bold;
}

.hover-adj {
  @apply font-normal;
}
</style>
