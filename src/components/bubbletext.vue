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
      class="transition-all duration-200 ease-out cursor-pointer"
      @mouseover="$event => setHoverStyle($event, i)"
      :key="i"
      >{{ txt }}</span
    >
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
  h?: string
  h_adj?: string
  ID: string
  default_clr: string
}>()

const container = ref<HTMLSpanElement>()
const hover_spans = ref<HTMLSpanElement[]>([])

onMounted(() => {
  hover_spans.value.forEach(span => {
    span.style.color = `#${props.default_clr}`
  })
})

function removeClasses() {
  hover_spans.value.forEach(span => {
    span.classList.remove('hover')
    span.classList.remove('hover-adj')
    span.style.color = `#${props.default_clr}`
  })
}
function setHoverStyle(e: MouseEvent, idx: number) {
  removeClasses()
  // @ts-ignore
  e.target.style.color = `#${props.h}`
  // @ts-ignore
  e.target!.classList.add('hover')

  if (hover_spans.value[idx - 1]) {
    hover_spans.value[idx - 1].classList.add('hover-adj')
    hover_spans.value[idx - 1].style.color = `#${props.h_adj}`
  }
  if (hover_spans.value[idx + 1]) {
    hover_spans.value[idx + 1].classList.add('hover-adj')
    hover_spans.value[idx + 1].style.color = `#${props.h_adj}`
  }
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
