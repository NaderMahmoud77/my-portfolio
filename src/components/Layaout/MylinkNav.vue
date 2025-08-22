<template>
  <!-- NavBar Link -->
  <nav
    :class="[
      'md:flex hidden md:flex-row md:space-y-0 md:space-x-8 items-center',
    ]"
  >
    <ul class="flex flex-col md:flex-row items-center gap-6">
      <li v-for="(href, i) in Menue" :key="i" class="relative group">
        <a
          @click="$emit('close')"
          :href="href.href"
          class="relative block font-semibold md:text-lg lg:text-xl text-primary dark:text-white transition-all duration-300 group-hover:scale-105 group-hover:text-secondary dark:group-hover:text-secondary"
        >
          {{ href.name }}
          <!-- Underline -->
          <span
            class="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary via-blue-400 to-purple-500 dark:from-secondary dark:via-purple-400 dark:to-blue-500 transition-all duration-500"
            :class="activeSection === href.href.slice(1) ? 'w-full' : 'w-0'"
          ></span>
        </a>
      </li>
    </ul>

    <!-- Btn dark and light mode -->
    <ButtonMode />
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ButtonMode from "@/components/UI/ButtonMode.vue";

const Menue = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

defineEmits(["close"]);

const activeSection = ref("home");

let observer;

onMounted(() => {
  const sections = Menue.map((link) =>
    document.getElementById(link.href.slice(1))
  );

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((sec) => sec && observer.observe(sec));
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>
