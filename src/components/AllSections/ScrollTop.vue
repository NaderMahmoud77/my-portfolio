<template>
  <button
    v-show="scrollProgress > 0.05"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center cursor-pointer z-50"
  >
    <!-- Border progress -->
    <svg class="w-14 h-14 absolute top-0 left-0" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="48"
        class="stroke-white/40"
        stroke-width="4"
        fill="transparent"
      />
      <circle
        cx="50"
        cy="50"
        r="48"
        class="stroke-white dark:stroke-secondary"
        stroke-width="5"
        fill="transparent"
        stroke-dasharray="301.44"
        :stroke-dashoffset="301.44 - scrollProgress * 301.44"
        stroke-linecap="round"
        transform="rotate(-90 50 50)"
      />
    </svg>

    <!-- Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 relative z-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const scrollProgress = ref(0);

function updateScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = docHeight ? scrollTop / docHeight : 0;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
  updateScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>
