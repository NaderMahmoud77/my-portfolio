<template>
  <header
    class="fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300 backdrop-blur-md bg-[#D4EBF8] dark:bg-[#080326]/95"
  >
    <div class="flex justify-between items-center p-6 lg:px-12 relative z-20">
      <!-- Logo -->
      <div
        class="text-3xl font-bold text-primary dark:text-white"
        v-animate-on-scroll.once
      >
        <<span class="text-white dark:text-secondary">N</span>ader/>
      </div>

      <!-- Mobile Toggle Button -->
      <div class="md:hidden z-30">
        <button class="block focus:outline-none" @click="isOpen = !isOpen">
          <span v-show="!isOpen" class="flex flex-col gap-1.5">
            <span
              class="nader block w-7 h-0.5 bg-primary dark:bg-secondary animate-bounceX"
              style="animation-delay: 0ms"
            ></span>
            <span
              class="nader block w-7 h-0.5 bg-primary dark:bg-secondary animate-bounceX"
              style="animation-delay: 200ms"
            ></span>
            <span
              class="nader block w-7 h-0.5 bg-primary dark:bg-secondary animate-bounceX"
              style="animation-delay: 400ms"
            ></span>
          </span>
        </button>
      </div>

      <!-- Links -->
      <MyLinksNav :isOpen="isOpen" />
    </div>
  </header>

  <!-- Drawer -->
  <Drawer :isOpen="isOpen" @close="isOpen = false" />
</template>

<script setup>
import MyLinksNav from "@/components/Layaout/MyLinkNav.vue";
import Drawer from "@/components/UI/Drawer.vue";
import { ref } from "vue";

let isOpen = ref(false);
</script>

<!-- Styleing -->
<style scoped>
@keyframes bounceX {
  0% {
    transform: scaleX(0.5);
    transform-origin: right;
  }
  100% {
    transform: scaleX(1);
    transform-origin: right;
  }
}

.animate-bounceX {
  animation: bounceX 0.5s linear infinite alternate;
}
</style>
