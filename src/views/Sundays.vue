<template>
  <main class="pt-[59px] sundays-page bg-base300">
    <section class="relative">
      <div
        class="absolute -bottom-8 left-10 flex flex-col w-max text-prime text-[3em] font-Monument drop-shadow-lg z-50 gap-1 font-light leading-tight"
      >
        <span>{{ data?.title[0] }}<br />{{ data?.title[1] }}</span>
      </div>

      <div class="h-[80vh] w-full overflow-clip shadow-lg">
        <img
          src="../assets/edited/02.webp"
          class="h-full w-full object-cover -z-1"
          alt=""
          srcset=""
        />
      </div>
    </section>

    <!-- section for content -->
    <section class="pt-32 flex-col flex gap-32">
      <div class="flex gap-32 h-max">
        <!-- left side -->
        <div
          class="w-[45%] h-full flex flex-col gap-20 font-Monument pl-10 tracking-wide text-2xl"
        >
          <span class="w-full">{{ data?.section1.intro }}</span>
          <div class="w-full">
            <img src="../assets/edited/06.jpg" alt="" class="object-contain" />
          </div>
        </div>
        <!-- right side -->
        <div class="w-[55%] min-h-full text-2xl flex flex-col gap-8">
          <p class="font-Unbound">
            {{ data?.section1.p1 }}
          </p>
          <p class="font-Unbound font-light">
            {{ data?.section1.p2 }}
          </p>

          <div class="flex flex-col gap-10">
            <div v-for="info in data?.section1.FAQ" class="">
              <h1 class="font-Monument text-base900 text-xl mb-2">
                {{ info.q }}
              </h1>
              <p
                class="relative before:absolute before:contents-[''] before:top-3 before:left-10 before:w-2 before:aspect-square before:rounded-full before:bg-prime font-Unbound text-[.7em] px-10 pl-20"
              >
                {{ info.a }}
              </p>
            </div>
          </div>

          <p class="font-Monument text-2xl">
            We can't wait to see you this Sunday!
          </p>
        </div>
      </div>

      <div class="flex gap-32 h-max">
        <!-- left side -->
        <div class="w-[55%] min-h-full text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit totam
          aspernatur sapiente voluptatibus molestiae magni ullam atque nulla
          error sequi aperiam eos minima, aut vel, ratione, maiores nemo
          obcaecati illo consequatur id odio deleniti voluptates possimus
          reprehenderit! Ea temporibus cumque nesciunt dolore, perferendis qui
          eos libero numquam ut quidem aspernatur quod, doloribus optio tempore
          sint minima similique sit exercitationem. Corporis pariatur quae
          dolore. Eaque aperiam incidunt repellat explicabo officia velit nulla
          reiciendis aliquid, magnam aut fugiat nihil soluta temporibus quasi
          veniam, magni commodi est. Molestiae deserunt, voluptatibus laudantium
          iste iusto repudiandae voluptatum adipisci reprehenderit quibusdam
          quaerat nostrum illum est obcaecati architecto possimus inventore quod
          minima, ducimus pariatur fugit. Odit, beatae cum. Quidem hic est,
          provident corporis nemo ratione amet incidunt! Quisquam reprehenderit
          consequuntur fuga dolore in illum, esse corporis minima dolores aut
          ducimus qui ad quaerat sunt numquam alias pariatur voluptas iste
          cumque eligendi incidunt velit quibusdam sapiente veniam. Suscipit
          voluptate eum beatae quasi ducimus eveniet fuga voluptatibus nostrum
          eius facilis, earum ipsum! Voluptas placeat culpa facere officiis
          aliquid perspiciatis quo deleniti fugit dignissimos cumque magni nemo
          alias blanditiis ducimus sed voluptatum sequi, necessitatibus a dicta
          esse quia ratione beatae illo. Odio qui repudiandae ipsum nobis rerum
          consequuntur eaque explicabo!
        </div>
        <!-- right side -->
        <div class="w-[45%] h-full flex flex-col gap-20">
          <span class="w-full"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque molestiae ratione hic ad dicta dolorem exercitationem
            fuga aspernatur, neque error.</span
          >
          <div class="w-full">
            <img src="../assets/edited/01.webp" alt="" class="object-contain" />
          </div>
        </div>
      </div>
    </section>

    <!-- TODO crop imageY to be more visible on the page -->
    <section class="py-32 px-20 flex-col flex gap-10 h-max">
      <div class="relative w-full h-full">
        <img
          src="../assets/edited/08.jpg"
          alt=""
          class="object-contain -translate-x-5 -translate-y-5 brightness-90 shadow-lg w-full"
        />
        <img
          src="../assets/edited/08.jpg"
          alt=""
          class="object-contain absolute inset-0 translate-x-5 translate-y-5 shadow-lg w-full brightness-50"
        />
        <div
          class="absolute top-1/2 right-[30%] translate-x-1/2 -translate-y-1/2 w-[45%] h-[60%] flex flex-col justify-center p-10"
        >
          <Bubbletext
            default_clr="fff"
            ID="1"
            text="GET WEEKLY UPDATES FROM LIVING TRUTH MINISTRIES"
            class="text-[3.5em] font-Unbound uppercase drop-shadow-md"
            :h="'e48157'"
            :h_adj="'f3c9b7'"
          />

          <span class="text-white drop-shadow-md"
            >Join our House News email list to stay up-to-date on all things
            Passion City.</span
          >
          <span
            class="flex items-center gap-3 text-white drop-shadow-md hover:text-base300 w-fit cursor-pointer"
            >Sign Up <i class="pi pi-angle-double-right"></i
          ></span>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { useAppStore } from '../store/appStore'

const { navPadding, siteData } = storeToRefs(useAppStore())
const data = computed(() => siteData.value.sundays)

onMounted(() => {
  useTitle('LTWC | Sundays')

  window.scrollTo({
    top: 0,
  })

  useAppStore().setIsVisible(false)
})
</script>

<style scoped></style>
