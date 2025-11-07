<template>
  <section id="skills" class="py-20">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <MyTitle text="My Skills" />

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        <div
          v-for="(skill, i) in skills"
          :key="i"
          class="relative w-full h-64 cursor-pointer group mb-4 sm:mb-0"
          v-animate-on-scroll.once="{ delay: i * 0.1 }"
        >
          <!-- Cart -->
          <div
            class="w-full h-full transition-all duration-500 rounded-xl bg-[#f8fbff] dark:bg-[#ffffff29] hover:-translate-y-4"
          >
            <div
              class="absolute w-full h-full rounded-xl flex flex-col items-center justify-center"
            >
              <img :src="skill.img" alt="icon" class="w-16 h-16 mb-4" />
              <h3 class="text-xl font-bold text-primary dark:text-white">
                {{ skill.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!------------------ JS ------------------>
<script setup>
// Components
import MyTitle from "@/components/Layaout/TitleAllSections.vue";
// Data Skills
import { skills } from "../../Data/Skills";
</script>
