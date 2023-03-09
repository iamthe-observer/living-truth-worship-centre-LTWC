<template>
  <div
    v-dragscroll="true"
    @mousedown="toggleGrabPointer"
    @mouseup="toggleGrabPointer"
    @mouseleave="$event => (if_grab = false)"
    :class="
      if_grab
        ? 'backdrop-blur-xl cursor-grabbing h-[100%] min-w-full px-12 py-10 horizontal_scroll scrollbar-hidden'
        : 'backdrop-blur-xl cursor-grab h-[100%] min-w-full px-12 py-10 horizontal_scroll scrollbar-hidden'
    "
  >
    <div
      v-for="index in num"
      ref="scroll_container"
      class="relative h_scroll_item text-justify group overflow-y-hidden"
    >
      <div
        class="group-hover:opacity-10 group-hover:translate-y-0 translate-y-20 absolute bg-prime inset-0 -z-1 clippy2 opacity-0 transition-all duration-100 ease-in"
      ></div>
      <span :id="`item${index}`" class="text-black"
        >{{ index }}. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Impedit quia pariatur sequi aspernatur dolorum voluptatem cupiditate!
        Quasi veniam rerum magni.</span
      >
    </div>
  </div>

  <div
    class="backdrop-blur-lg self-end mr-20 text-black max-w-[200px] h-fit px-3 py-2 flex justify-between gap-10"
  >
    <span @click="onClick('left')" class="controlll cursor-pointer"
      ><i class="pi pi-arrow-left"></i></span
    ><span @click="onClick('right')" class="controlll cursor-pointer"
      ><i class="pi pi-arrow-right"></i
    ></span>
  </div>
</template>

<script setup lang="ts">
const if_grab = ref()
const indx = ref(0)
const num = 10
const scroll_container = ref<HTMLDivElement>()

onMounted(() => {
  document.querySelectorAll('.controlll').forEach(element => {
    element.addEventListener('click', () => {
      document
        .querySelector('#item-' + indx.value)!
        .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
    })
  })
})

function onClick(direction: 'left' | 'right') {
  if (direction == 'left' && indx.value != 0) {
    indx.value++
    document
      .querySelector('#item-' + indx.value)!
      .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  } else if (direction == 'right' && indx.value <= num) {
    indx.value--
    document
      .querySelector('#item-' + indx.value)!
      .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  }
}

const toggleGrabPointer = () => {
  if_grab.value = !if_grab.value
}
</script>
