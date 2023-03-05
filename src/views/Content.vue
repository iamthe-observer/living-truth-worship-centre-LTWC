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
      class="relative flex flex-col text-[1.5em] gap-10 pb-20 bg-base300"
    >
      <div class="relative uppercase my-24 mx-16 text-[3em] w-fit text-black">
        Our Mission
        <div class="w-3 h-16 absolute bg-sec -bottom-16 right-32"></div>
        <div class="h-3 w-64 absolute bg-sec -bottom-16 -right-32"></div>
      </div>
      <!-- mission statement -->
      <div
        class="absolute top-40 font-bold w-2/5 text-justify right-20 text-black"
      >
        We exist to bring people to a personal relationship with Jesus Christ
        and mem- bership in His family; and to develop a Christ-like character;
        building and restor- ing them through spiritual and economic development
        to become mature Chris- tians, equipped for ministry in the church, the
        community, and around the world, in order to declare God's
        <span class="uppercase italic">glory.</span>
      </div>
      <QuickNavigationBox />
    </section>
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
              : 'w-full h-96 overflow-clip bg-sec'
          "
        >
          <img :src="source" alt="" />
          <div v-if="i == 0">Hello</div>
          <div v-if="i == 3">Bye</div>
        </div>
      </div>
    </section>
    <!-- quick navigation section -->
    <section
      class="flex flex-col text-[1.5em] my-8 gap-10 py-3 min-h-[500px] overflow-x-hidden"
    >
      <h1 class="text-white font-bold pl-10">
        Find Your Place at Living Truth Worship Centre
      </h1>

      <div class="backdrop-blur-lg h-[100%] w-full p-8 ml-32">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
        facilis. Quia quam laboriosam libero obcaecati eos? Magni tempora
        maiores iste architecto ut non repudiandae, praesentium voluptatibus, et
        mollitia explicabo repellendus omnis. Error dolorem qui nam totam
        magnam! Iure dolore, aut laborum sapiente, dolores repudiandae quos,
        magnam quod aliquam earum iste adipisci ea inventore explicabo eveniet
        id optio laboriosam iusto! Pariatur facere placeat at cupiditate,
        eveniet reiciendis expedita? Vero earum aperiam consectetur odio enim.
        Vero, quibusdam debitis obcaecati excepturi quia mollitia accusantium,
        facere laudantium doloribus vitae tenetur accusamus eius, perferendis
        voluptates laborum veniam ut harum velit impedit! Recusandae qui labore
        sunt.
      </div>
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
