<template>
  <h2
    class="m-auto md:text-5xl text-2xl font-bold text-center mb-[120px] border-2 border-dashed border-primary dark:border-secondary rounded-full px-10 py-6 w-fit shadow-md shadow-primary/60 dark:shadow-secondary/100"
    :class="mode ? 'outlineDark-text' : 'outlineLight-text'"
  >
    {{ text }}
  </h2>
</template>

<script setup>
import { useDarkMode } from "@/components/Layaout/useDarkMode.js";
const { mode } = useDarkMode();

import { defineProps } from "vue";
defineProps({
  text: {
    type: String,
  },
});
</script>

<style>
.outlineDark-text,
.outlineLight-text {
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.outlineDark-text {
  -webkit-text-stroke-color: #ffeb00;
}
.outlineLight-text {
  -webkit-text-stroke-color: #000957;
}
</style>
