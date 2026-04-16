<template>
  <article
    class="w-full h-[470px] flex flex-col rounded-2xl border border-transparent dark:border-secondary/50 bg-white/70 dark:bg-white/5 backdrop-blur-lg shadow-lg shadow-slate-200/40 dark:shadow-black/30 "
  >
    <!-- Image -->
    <figure>
      <img
        :src="image"
        :alt="title"
        class="w-full h-48 object-cover rounded-t-2xl"
      />
    </figure>

    <!-- Content -->
    <section class="p-4 flex-1">
      <header>
        <h3 class=" font-semibold text-lg mb-2 text-primary dark:text-white">
          {{ title }}
        </h3>
      </header>
      <p class="text-gray-700 dark:text-gray-300 text-sm line-clamp-4">
        {{ description }}
      </p>
    </section>

    <!-- Tags -->
    <footer class="px-6 pt-4 pb-2">
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="(tag, i) in tags"
          :key="i"
          class="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary dark:bg-secondary/20 dark:text-secondary"
        >
          #{{ tag }}
        </li>
      </ul>
    </footer>

    <!-- Actions -->
    <div class="px-6 pb-4 pt-2 flex justify-between items-center">
      <a
        target="_blank"
        :href="liveLink"
        v-show="liveLink"
        class="text-primary dark:text-secondary font-semibold text-sm hover:underline hover:text-primary/80 dark:hover:text-secondary/80 transition-colors duration-300"
      >
        Live Demo
      </a>
      <a
        target="_blank"
        :href="codeLink"
        v-show="codeLink"
        class="text-primary dark:text-secondary font-semibold text-sm hover:underline hover:text-primary/80 dark:hover:text-secondary/80 transition-colors duration-300"
      >
        View Code
      </a>
    </div>
  </article>
</template>

<!-- JS -->
<script setup>
// Props
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    required: true,
    default: "Project Title",
  },
  description: {
    type: String,
    required: true,
    default: "Brief description of the project",
  },
  image: {
    type: String,
    required: true,
    default: "/",
  },
  tags: {
    type: Array,
    default: true,
    default: () => ["Vue.js , Tailwind css"],
  },
  liveLink: {
    type: String,
    required: false,
    default: null,
  },
  codeLink: {
    type: String,
    required: false,
    default: null,
  },
});
</script>
