<template>
  <div v-if="!if_sm" class="footer-container w-full h-[800px] bg-base900 flex flex-col text-white">
    <div class="relative w-full flex justify-between items-center p-10 h-[40%]">
      <!-- top half -->
      <div class="absolute sm:w-[60%] w-full h-fit bg-base100 -bottom-1/2 left-1/2 -translate-x-1/2">
        <form action="" class="flex flex-col w-full p-12 h-full bg-white text-black">
          <h1 class="font-Unbound text-3xl text-center mb-3">
            <Bubbletext :default_clr="'000'" :ID="'Sign'" text="Sign Up for Encouragement & News" />
          </h1>
          <div class="grid grid-cols-2 h-full font-Poppins text-md">
            <label class="font-normal">First Name<input placeholder="Ransford" class="block w-full" type="text" /></label>
            <label class="font-normal">Last Name<input placeholder="Smith" class="block w-full" type="text" /></label>
            <label class="font-normal">Email<input placeholder="email@email.com" class="block w-full"
                type="text" /></label>
            <label class="">
              <span class="opacity-0">Jesus is King</span>
              <span
                class="transition-all duration-300 ease-out hover:shadow-xl hover:shadow-prime hover:scale-95 active:text-black cursor-pointer font-Unbound min-h-[55%] border-[3px] border-prime bg-prime text-white text-center px-2 py-1 focus:outline-4 rounded-none focus:rounded-none focus:outline-offset-4">Send
                Me Updates</span>
            </label>
          </div>
        </form>
      </div>
    </div>

    <!-- bottom half -->
    <div class="flex justify-center items-center border-t-4 h-full">
      <div class="border-[4px] w-4/5 h-[45%] flex">
        <div class="flex-1 flex flex-col border-r-4">
          <div class="border-b-4 h-[65%] p-3 font-Unbound uppercase">
            <span class="font-bold text-xl">Living Truth<br />Worship Centre</span>
            <span class="block font-Outfit mt-3">+1 490-554-5543</span>
            <span class="block font-Outfit">ltwc-main@ltwc.com</span>
          </div>
          <div class="flex-1 flex gap-8 justify-center items-center">
            <img
              class="w-8 aspect-square stroke-white hover:scale-110 transition-all duration-150 ease-out cursor-pointer"
              src="../assets/icons/facebook-boxed-svgrepo-com.svg" />
            <img
              class="w-10 aspect-square stroke-white hover:scale-110 transition-all duration-150 ease-out cursor-pointer"
              src="../assets/icons/instagram-svgrepo-com.svg" />
            <img
              class="w-10 aspect-square stroke-white hover:scale-110 transition-all duration-150 ease-out cursor-pointer"
              src="../assets/icons/youtube-svgrepo-com.svg" />
          </div>
        </div>
        <div class="flex-1 border-r-4 p-5">
          <span class="font-Unbound font-bold text-2xl">Quick Links</span>
          <ul class="mt-6 ml-6 font-Outfit flex flex-col gap-3">
            <li @click="$router.push('/visit')"
              class="hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
              Visit
            </li>
            <li @click="$router.push('/give')"
              class="hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
              Give
            </li>
            <li @click="$router.push('/contact')"
              class="hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div class="flex-1 flex flex-col justify-center items-center font-Unbound">
          <span class="font-bold text-xl text-center">
            &copy; Living Truth Worship Centre (CA)
          </span>
          <span class="font-thin"> All Rights Reserved </span>
        </div>
      </div>
    </div>
  </div>


  <!-- sm_screen -->
  <div v-if="if_sm" class="footer-container w-full h-[800px] flex flex-col text-white">
    <!-- top half -->
    <div class="h-1/2">
      <form action="" class="flex flex-col w-full p-4 h-full bg-white text-black">
        <h1 class="font-Unbound text-3xl text-center my-3 mb-4">
          <Bubbletext :default_clr="'000'" :ID="'Sign'" text="Sign Up for Encouragement & News" />
        </h1>
        <div class="grid grid-cols-1 h-full font-Poppins text-md">
          <label class="font-normal">First Name<input placeholder="Ransford" class="block w-full" type="text" /></label>
          <label class="font-normal">Last Name<input placeholder="Smith" class="block w-full" type="text" /></label>
          <label class="font-normal">Email<input placeholder="email@email.com" class="block w-full" type="text" /></label>
          <label class="">
            <span class="opacity-0">Jesus is King</span>
            <span
              class="transition-all duration-300 ease-out hover:shadow-xl hover:shadow-prime hover:scale-95 active:text-black cursor-pointer font-Unbound min-h-fit border-[3px] border-prime bg-prime text-white text-center px-2 py-1 focus:outline-4 rounded-none focus:rounded-none focus:outline-offset-4">Send
              Me Updates</span>
          </label>
        </div>
      </form>

    </div>

    <!-- bottom half -->
    <div class="h-1/2 bg-prime flex justify-center items-center">
      <div class="border-[4px] w-[95%] h-[85%] flex">
        <div class="border-r-4 w-1/2 flex flex-col">
          <div class="h-3/4 border-b-4 flex flex-col items-center justify-center">
            <span class="font-bold text-xl text-center font-Unbound drop-shadow-lg">LTWC</span>
            <span class="block font-Outfit mt-3">+1 490-554-5543</span>
            <span class="block font-Outfit">ltwc-main@ltwc.com</span>
          </div>
          <div class="h-1/4 flex gap-5 justify-center items-center">
            <img
              class="w-6 aspect-square stroke-white hover:scale-110 transition-all duration-150 ease-out cursor-pointer drop-shadow-lg"
              src="../assets/icons/facebook-boxed-svgrepo-com.svg" />
            <img
              class="w-7 aspect-square stroke-white hover:scale-110 transition-all duration-150 ease-out cursor-pointer drop-shadow-lg"
              src="../assets/icons/instagram-svgrepo-com.svg" />
            <img
              class="w-7 aspect-square stroke-white hover:scale-110 transition-all duration-150 ease-out cursor-pointer drop-shadow-lg"
              src="../assets/icons/youtube-svgrepo-com.svg" />
          </div>
        </div>

        <div class="w-1/2">
          <div class="h-1/4 border-b-4 flex flex-col items-center">
            <span class="h-full pt-2 font-Unbound font-bold text-xl drop-shadow-lg">Quick Links</span>
            <ul class="h-full font-Outfit flex gap-3">
              <li @click="$router.push('/visit')"
                class="hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
                Visit
              </li>
              <li @click="$router.push('/aboutLTWC')"
                class="hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
                About
              </li>
              <li @click="$router.push('/contact')"
                class="hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div class="h-3/4 flex flex-col justify-center items-center">
            <span class="font-bold text-xl text-center drop-shadow-md">
              &copy; Living Truth Worship Centre (CA)
            </span>
            <span class="font-thin"> All Rights Reserved </span>
          </div>
        </div>

      </div>
    </div>
  </div>


  <!--     <div class="relative w-full flex justify-between items-center p-10 h-[40%]">
      top half
<div class="absolute sm:w-[60%] w-full h-fit bg-base100 -bottom-1/2 left-1/2 -translate-x-1/2">
        <form action="" class="flex flex-col w-full p-12 h-full bg-white text-black">
          <h1 class="font-Unbound text-3xl text-center mb-3">
            <Bubbletext :default_clr="'000'" :ID="'Sign'" text="Sign Up for Encouragement & News" />
          </h1>
          <div class="grid grid-cols-2 h-full font-Poppins text-md">
            <label class="font-normal">First Name<input placeholder="Ransford" class="block w-full" type="text" /></label>
            <label class="font-normal">Last Name<input placeholder="Smith" class="block w-full" type="text" /></label>
            <label class="font-normal">Email<input placeholder="email@email.com" class="block w-full"
                type="text" /></label>
            <label class="">
              <span class="opacity-0">Jesus is King</span>
              <span
                class="transition-all duration-300 ease-out hover:shadow-xl hover:shadow-prime hover:scale-95 active:text-black cursor-pointer font-Unbound min-h-[55%] border-[3px] border-prime bg-prime text-white text-center px-2 py-1 focus:outline-4 rounded-none focus:rounded-none focus:outline-offset-4">Send
                Me Updates</span>
            </label>
          </div>
        </form>
      </div>
    </div>

    bottom half
<div class="flex justify-center items-center border-t-4 h-full">
      <div class="border-[4px] w-4/5 h-[45%] flex">
        <div class="flex-1 flex flex-col border-r-4">
          <div class="border-b-4 h-[65%] p-3 font-Unbound uppercase">
            <span class="font-bold text-xl">Living Truth<br />Worship Centre</span>
            <span class="block font-Outfit mt-3">+1 490-554-5543</span>
            <span class="block font-Outfit">ltwc-main@ltwc.com</span>
          </div>
<div class="flex-1 flex gap-8 justify-center items-center">
            <img
              class="w-8 aspect-square stroke-white hover:scale-110 transition-all duration-150 ease-out cursor-pointer"
              src="../assets/icons/facebook-boxed-svgrepo-com.svg" />
            <img
              class="w-10 aspect-square stroke-white hover:scale-110 transition-all duration-150 ease-out cursor-pointer"
              src="../assets/icons/instagram-svgrepo-com.svg" />
            <img
              class="w-10 aspect-square stroke-white hover:scale-110 transition-all duration-150 ease-out cursor-pointer"
              src="../assets/icons/youtube-svgrepo-com.svg" />
          </div>
        </div>
<div class="flex-1 border-r-4 p-5">
          <span class="font-Unbound font-bold text-2xl">Quick Links</span>
          <ul class="mt-6 ml-6 font-Outfit flex flex-col gap-3">
            <li @click="$router.push('/visit')"
              class="hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
              Visit
            </li>
            <li @click="$router.push('/give')"
              class="hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
              Give
            </li>
            <li @click="$router.push('/contact')"
              class="hover:scale-110 transition-all duration-150 ease-out cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
<div class="flex-1 flex flex-col justify-center items-center font-Unbound">
          <span class="font-bold text-xl text-center">
            &copy; Living Truth Worship Centre
          </span>
          <span class="font-thin"> All Rights Reserved </span>
        </div>
      </div>
    </div>
 -->
</template>

<script setup lang="ts">
const if_sm = inject('small_screen')
</script>

<style scoped>
@layer {
  label {
    @apply p-2 pt-0 flex flex-col;
  }

  input {
    @apply min-h-[55%] border-[3px] border-base900 px-2 py-1 rounded-none;
  }

  input:focus {
    @apply bg-base300 text-white;
  }

  input::placeholder {
    font-weight: normal;
  }

  li {
    cursor: pointer;
  }

  li:active {
    @apply text-prime
  }

  li:hover {
    @apply text-base300
  }
}
</style>
