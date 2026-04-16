<template>
  <button @click="toggleMode" class="text-white ml-4">
    <Icon v-show="!mode" icon="line-md:moon" class="text-4xl text-primary" />
    <Icon
      v-show="mode"
      icon="line-md:sunny-outline"
      class="text-4xl text-secondary"
    />
  </button>
</template>

<script setup>
import { useDarkMode } from "@/hooks/useDarkMode.js";

const { mode, toggleMode } = useDarkMode();
</script>
