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
      class="relative flex flex-col text-[1.5em] gap-10 pb-56 h-screen bg-base300"
    >
      <div
        class="relative uppercase my-32 mx-16 text-[3em] w-fit text-black font-Cheorcy z-10"
      >
        Our Mission
        <div class="w-3 h-16 absolute bg-prime -bottom-16 right-32"></div>
        <div class="h-3 w-52 absolute bg-prime -bottom-16 -right-20"></div>
      </div>
      <!-- mission statement -->
      <div
        class="absolute top-64 font-bold w-2/5 text-justify right-20 text-black font-Bebas_Neue z-10"
      >
        We exist to bring people to a personal relationship with Jesus Christ
        and mem-bership in His family; and to develop a Christ-like character;
        building and restor-ing them through spiritual and economic development
        to become mature Chris- tians, equipped for ministry in the church, the
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
      class="relative flex flex-col text-[1.5em] gap-10 bg-base900 py-3 px-10"
    >
      <!-- <div class="grid grid-cols-3 grid-rows-2 gap-2">
        <div class="bg-sec w-full h-96 overflow-clip" v-for="i in 2"></div>
      </div> -->

      <div class="grid grid-cols-3 grid-rows-2 gap-2">
        <div
          v-for="(source, i) in src"
          :class="
            source
              ? 'w-full h-96 overflow-clip'
              : 'w-full h-96 overflow-clip relative bg-sec'
          "
        >
          <img v-if="source" class="object-contain" :src="source" alt="" />
          <div
            v-if="i == 0"
            class="uppercase flex justify-between items-end pl-10 pr-10 w-full h-full pb-5"
          >
            <span class="font-bold font-Cyberion">Visit Us</span>
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
            class="border-black border-2 p-3 absolute bottom-10 left-1/2 translate-x-[-50%]"
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
      <h1 class="text-black font-bold pl-10">
        Find Your Place at Living Truth Worship Centre
      </h1>

      <HorizontalScroller />
    </section>

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
      <span class="p-10 text-white font-bold text-xl drop-shadow-md"
        >But when he, the Spirit of truth, comes, he will guide you into all the
        truth. He will not speak on his own; he will speak only what he hears,
        and he will tell you what is yet to come.
        <span class="bg-prime block w-fit px-4 py-2">John 16:13.</span></span
      >
    </section>
  </div>
</template>

<script setup lang="ts">
const src = ref([
  '',
  'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc1.jpg',
  'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc2.jpg',
  '',
  'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc3.jpg',
  'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc4.jpg',
])

let if_grab = ref(false)
let show_hover_box = ref(false)

const toggleGrabPointer = () => {
  if_grab.value = !if_grab.value
}
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
