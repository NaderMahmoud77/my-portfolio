<template>
  <section id="skills" class="py-20">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <MyTitle text="My Skills" />

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000"
      >
        <div
          v-for="(skill, i) in skills"
          :key="i"
          class="relative w-full h-64 cursor-pointer group"
          v-animate-on-scroll.once="{ delay: i * 0.1 }"
          @click="toggleFlip(skill.id)"
        >
          <!-- gradient -->
          <div
            class="relative w-full h-full p-[2px] rounded-xl group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-blue-400 group-hover:to-purple-500 transition-all duration-700 hover:-translate-y-3"
          >
            <!-- Cart -->
            <div
              class="w-full h-full transition-all duration-700 preserve-3d rounded-xl bg-[#f8fbff] dark:bg-[#ffffff29] shadow-xl group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-blue-400 group-hover:to-purple-500"
              :class="{ 'rotate-y-180': flippedCards.includes(skill.id) }"
            >
              <!-- front -->
              <div
                class="absolute w-full h-full rounded-xl flex flex-col items-center justify-center"
              >
                <img :src="skill.icon" alt="icon" class="w-16 h-16 mb-4" />
                <h3 class="text-xl font-bold text-primary dark:text-white">
                  {{ skill.title }}
                </h3>
                <div
                  class="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-primary dark:border-secondary text-primary dark:text-secondary cursor-pointer group transition duration-300 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-white"
                >
                  <span class="text-sm font-medium">View Details</span>
                  <Icon
                    icon="mdi:eye"
                    class="w-4 h-4 text-primary dark:text-secondary dark:group-hover:text-white group-hover:text-secondary transition"
                  />
                </div>
              </div>

              <!-- back -->
              <div
                class="absolute w-full h-full bg-gradient-to-br from-primary to-blue-700 dark:from-secondary dark:to-indigo-900 text-white shadow-2xl rounded-xl flex flex-col items-center justify-center rotate-y-180 backface-hidden p-6"
              >
                <h3 class="text-lg font-bold mb-6 tracking-wide">
                  {{ skill.title }}
                </h3>

                <!-- progress bar -->
                <div class="w-full max-w-[80%]">
                  <div
                    class="w-full bg-white/20 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner"
                  >
                    <div
                      class="bg-gradient-to-r from-yellow-400 to-green-400 dark:from-green-400 dark:to-teal-400 h-4 rounded-full transition-all duration-1000 ease-out"
                      :style="{
                        width: flippedCards.includes(skill.id)
                          ? skill.value + '%'
                          : '0%',
                      }"
                    ></div>
                  </div>
                  <p
                    class="text-center font-semibold mt-3 text-sm tracking-wide text-white/90"
                  >
                    {{ flippedCards.includes(skill.id) ? skill.value : 0 }}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- JS -->
<script setup>
// Components
import MyTitle from "@/components/Layaout/TitleAllSections.vue";
import { ref } from "vue";

const flippedCards = ref([]);

const toggleFlip = (id) => {
  if (flippedCards.value.includes(id)) {
    flippedCards.value = flippedCards.value.filter((cardId) => cardId !== id);
  } else {
    flippedCards.value.push(id);
  }
};

const skills = [
  {
    id: 1,
    title: "Html",
    value: 95,
    icon: "https://img.icons8.com/color/100/html-5--v1.png",
  },
  {
    id: 2,
    title: "Css",
    value: 90,
    icon: "https://img.icons8.com/color/100/css3.png",
  },
  {
    id: 3,
    title: "JavaScript",
    value: 92,
    icon: "https://img.icons8.com/color/100/javascript--v1.png",
  },
  {
    id: 4,
    title: "Vue.js",
    value: 90,
    icon: "https://img.icons8.com/color/100/vue-js.png",
  },
  {
    id: 5,
    title: "Nuxt.js",
    value: 85,
    icon: "https://img.icons8.com/color/100/nuxt-jc.png",
  },
  {
    id: 6,
    title: "API Integration",
    value: 75,
    icon: "https://img.icons8.com/external-flat-juicy-fish/100/external-api-coding-and-development-flat-flat-juicy-fish.png",
  },
  {
    id: 7,
    title: "React",
    value: 88,
    icon: "https://img.icons8.com/color/100/react-native.png",
  },
  {
    id: 8,
    title: "GitHub",
    value: 85,
    icon: "https://img.icons8.com/glyph-neue/100/000000/github.png",
  },
  {
    id: 9,
    title: "Pinia",
    value: 80,
    icon: "https://pinia.vuejs.org/logo.svg",
  },
];
</script>

<!-- Styling -->
<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.preserve-3d {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
