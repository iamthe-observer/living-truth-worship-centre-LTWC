<template>
  <div
    ref="home_video"
    class="w-full h-screen bg-red-100 aboslute top-0 grid place-items-center relative overflow-clip"
  >
    <!-- <span class="text-black text-4xl">Hero Video Goes Here</span> -->
    <video
      ref="video_ref"
      id="my-video"
      class="video-js w-full absolute top-0 left-0"
      controls
      autoplay
      loop
      preload="auto"
      width="640"
      height="264"
      data-setup="{}"
    >
      <source src="../assets/video/feature_vid.mp4" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>
    <!-- <video
      :controls="true"
      loop
      class="w-full pointer-events-none absolute top-0 left-0"
    >
      <source src="../assets/video/loop.mp4" />
    </video> -->
    <div
      class="absolute bottom-5 right-5 w-80 aspect-video text-white flex flex-col gap-2 justify-center font-bold drop-shadow-md mix-blend-difference font-Monument tracking-wider"
    >
      <span>Join us for our Service Gatherings on Sunday</span>
      <span
        >We gather each Sunday at 9:30a and 11:45a ET and would love for you to
        join us!</span
      >
      <span class="cursor-pointer"
        >Join Us! <i class="pl-2 pi pi-arrow-right"></i
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const home_video = ref<HTMLDivElement>()
</script>
