<template>
  <div class="w-full h-36"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  --mask: radial-gradient(
        56.84px at 50% calc(100% + 43.5px),
        #0000 calc(99% - 8px),
        #000 calc(101% - 8px) 99%,
        #0000 101%
      )
      calc(50% - 60px) calc(50% - 19px + 0.5px) / 120px 38px,
    radial-gradient(
        56.84px at 50% -43.5px,
        #0000 calc(99% - 8px),
        #000 calc(101% - 8px) 99%,
        #0000 101%
      )
      50% calc(50% + 19px) / 120px 38px;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}
</style>
