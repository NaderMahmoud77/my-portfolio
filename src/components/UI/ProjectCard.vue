<template>
  <article
  class="max-w-sm min-h-[450px] flex flex-col overflow-hidden shadow-lg rounded border border-secondary dark:bg-[#ffffff29] bg-primary"
>
  <!-- Image -->
  <figure>
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />
  </figure>

  <!-- Content -->
  <section class="px-6 py-4 flex-1">
    <header>
      <h3 class="font-bold text-xl mb-2 text-white">{{ title }}</h3>
    </header>
    <p class="text-gray-300 text-sm line-clamp-4">
      {{ discreption }}
    </p>
  </section>

  <!-- Footer -->
  <footer class="px-6 pt-4 pb-2">
    <ul class="flex flex-wrap gap-1">
      <li
        v-for="(tag, i) in tags"
        :key="i"
        class=" dark:bg-primary bg-gray-700 text-gray-200 rounded-full px-2 py-1 text-sm font-semibold"
      >
        #{{ tag }}
      </li>
    </ul>
  </footer>

  <!-- Actions -->
  <div class="px-2 pb-4 flex justify-between items-center">
    <a
      target="_blank"
      :href="liveLink"
      v-show="liveLink"
      class="text-secondary font-semibold hover:underline text-sm"
    >Live Demo</a>
    <a
      target="_blank"
      :href="codeLink"
      v-show="codeLink"
      class="text-secondary font-semibold hover:underline text-sm"
    >View Code</a>
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
  discreption: {
    type: String,
    required: true,
    default: "Brief descreption of the project",
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
