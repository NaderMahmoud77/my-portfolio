<template>
  <h2
  class="relative m-auto md:text-4xl text-2xl font-bold text-center mb-[120px] text-primary dark:text-secondary w-fit"
>
  {{ text }}
  <span
    class="absolute left-1/2 -bottom-4 w-1/2 -translate-x-1/2 border-b-4 border-primary dark:border-secondary"
  ></span>
</h2>
</template>

<script setup>

import { defineProps } from "vue";
defineProps({
  text: {
    type: String,
  },
});
</script>
