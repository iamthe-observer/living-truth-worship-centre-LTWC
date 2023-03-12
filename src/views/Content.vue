<template>
  <div class="w-full h-full relative flex flex-col bg-transparent z-10">
    <HomeVideo />
    <!-- scroll quick alerts and news -->
    <div
      class="wrapper border-y-4 border-black bg-sec text-white font-bold grid place-items-center py-2"
    >
      <div class="marquee">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut
          suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          volutpat, ante eu bibendum tincidunt, sem lacus vehicula augue, ut
          suscipit.
        </p>
      </div>
    </div>

    <!-- introduction -->
    <section
      class="relative flex flex-col items-center justify-center text-[1.5em] py-28 h-screen bg-base300"
    >
      <!-- heading -->
      <div
        class="relative uppercase self-start text-[2.8em] pl-24 text-black font-Unbound z-10"
      >
        <Bubbletext :text="`Our Mission`" />
      </div>
      <!-- mission statement -->
      <div
        class="absolute left-[35%] top-40% -translate-x-1/2 -translate-y-1/2"
      >
        <div class="w-3 h-16 bg-prime"></div>
        <div class="h-3 w-80 bg-prime"></div>
      </div>
      <div
        class="self-end w-2/4 text-justify right-20 text-black font-Bebas_Neue font-bold text-3xl z-10 pr-24"
      >
        We exist to bring people to a personal relationship with Jesus Christ
        and membership in His family; and to develop a Christ-like character;
        building and restoring them through spiritual and economic development
        to become mature Christians, equipped for ministry in the church, the
        community, and around the world, in order to declare God's
        <span class="">glory.</span>
      </div>
      <!-- background image -->
      <div
        class="opacity-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img src="../assets/sunrise.png" alt="" />
      </div>
    </section>
    <!-- <QuickNavigationBox /> -->

    <!-- showcase images -->
    <section
      class="relative flex flex-col text-[1.5em] gap-10 bg-base900 py-7 px-10"
    >
      <!-- <div class="grid grid-cols-3 grid-rows-2 gap-2">
        <div class="bg-sec w-full h-96 overflow-clip" v-for="i in 2"></div>
      </div> -->

      <div class="grid grid-cols-3 grid-rows-2 gap-2">
        <div
          v-for="(source, i) in src"
          :ref="i == 0 || i == 3 ? '' : `img`"
          :class="
            source
              ? 'w-full h-96 overflow-clip img_item'
              : 'w-full h-96 overflow-clip relative bg-sec img_item'
          "
        >
          <img v-if="source" class="object-contain" :src="source" alt="" />
          <div
            v-if="i == 0"
            class="uppercase flex justify-between items-end pl-10 pr-10 w-full h-full pb-5"
          >
            <span class="font-bold bubble-text font-Unbound">Visit Us</span>
            <svg
              class="w-20 aspect-square"
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 476.213 476.213"
              xml:space="preserve"
              stroke="#000000"
              stroke-width="0.004762130000000001"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <polygon
                  points="287.5,384.394 253.107,418.787 253.107,0 223.107,0 223.107,418.787 188.713,384.394 167.5,405.606 238.107,476.213 308.713,405.606 "
                ></polygon>
              </g>
            </svg>
          </div>
          <!-- screenshot of location of church #links you to google map location -->
          <button
            class="border-black border-[5px] font-bold font-Outfit px-3 py-1 absolute bottom-10 left-1/2 translate-x-[-50%] w-[80%]"
            v-if="i == 3"
          >
            Check it out!
          </button>
        </div>
      </div>
    </section>

    <!-- quick navigation section -->
    <section
      class="flex flex-col text-[1.5em] gap-10 py-12 min-h-screen overflow-x-hidden justify-center bg-base100"
    >
      <h1 class="text-black text-[.8em] font-bold pl-10 font-Unbound">
        Find Your Place at Living Truth Worship Centre
      </h1>

      <HorizontalScroller />
    </section>

    <section class="h-10 flex">
      <img
        v-for="i in 80"
        class="w-10"
        src="../assets/icons/Spike-light.svg"
        alt=""
      />
    </section>

    <!-- bible quote -->
    <section class="h-screen flex items-center w-full relative">
      <img
        src="../assets/bible2.png"
        class="-rotate-12 -translate-x-20"
        alt=""
        srcset=""
      />

      <div
        class="border-[10px] border-prime opacity-30 w-1/2 h-1/2 absolute translate-x-1/2 -z-1"
      ></div>
      <span
        class="p-10 text-white font-bold text-3xl tracking-wide drop-shadow-md font-Gloock"
        >But when he, the Spirit of truth, comes, he will guide you into all the
        truth. He will not speak on his own; he will speak only what he hears,
        and he will tell you what is yet to come.
        <span class="bg-prime block w-fit px-4 py-2">John 16:13.</span></span
      >
    </section>

    <section class="h-10 flex">
      <img
        v-for="i in 80"
        class="w-10 rotate-180"
        src="../assets/icons/Spike-dark.svg"
        alt=""
      />
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '../store/appStore'

const { src } = storeToRefs(useAppStore())
</script>

<style scoped>
.wrapper {
  max-width: 100%;
  overflow: hidden;
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 50s linear infinite;
}

.marquee p {
  display: inline-block;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
