<template>
  <div class="w-full h-screen bg-base900 flex flex-col text-white">
    <div class="relative w-full flex justify-between items-center p-10 h-[40%]">
      <div
        class="absolute w-[60%] h-[300px] bg-base100 -bottom-1/2 left-1/2 -translate-x-1/2"
      >
        <form
          action=""
          class="flex flex-col w-full px-4 py-2 h-full bg-black p-2"
        >
          <h1 class="">Sign Up for Encouragement & News</h1>
          <div class="grid grid-cols-2 gap-5">
            <label for=""
              >First Name<input class="block w-full" type="text"
            /></label>
            <label for=""
              >Last Name<input class="block w-full" type="text"
            /></label>
            <label for=""
              >Email<input class="block w-full" type="text"
            /></label>
            <div class="w-full bg-prime send-btn"></div>
          </div>
        </form>
      </div>
    </div>

    <div class="flex justify-center items-center border-t-4 h-full">
      <div class="border-[4px] w-4/5 h-[45%] flex">
        <div class="flex-1 flex flex-col border-r-4">
          <div class="border-b-4 h-[65%] p-3 font-Gloock">
            <span class="font-bold text-xl"
              >Living Truth<br />Worship Centre</span
            >
            <span class="block font-Poppins mt-3">490-554-5543</span>
            <span class="block font-Poppins">ltwc-main@ltwc.com</span>
          </div>
          <div class="flex-1"></div>
        </div>
        <div class="flex-1 border-r-4"></div>
        <div class="flex-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
