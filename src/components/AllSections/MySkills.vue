<template>
  <section id="skills" class="py-20">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <MyTitle text="My Skills" />

      <div
        class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-8 mt-12"
      >
        <div
          v-for="(skill, i) in skills"
          :key="i"
          v-animate-on-scroll.once="{ delay: i * 0.08 }"
          class="group relative"
        >
          <!-- Card -->
          <div
            class="relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/10 via-transparent to-primary/10 transition-all duration-500 hover:scale-[1.03]"
          >
            <!-- Glass Layer -->
            <div
              class="h-full w-full p-4 rounded-bl-2xl rounded-tr-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-black/30 flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-primary/20"
            >
              <!-- Icon -->
              <div
                class="w-10 h-10 md:w-20 md:h-20 rounded-xl flex items-center justify-center bg-gradient-to-br dark:from-primary/20 dark:to-primary/30 mb-5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
              >
                <img
                  :src="skill.img"
                  alt="icon"
                  class="w-7 h-7 md:w-10 md:h-10 object-contain"
                />
              </div>

              <!-- Title -->
              <h3
                class="text-lg font-semibold tracking-wide text-slate-700 dark:text-slate-200 transition-colors duration-300"
              >
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
import MyTitle from "@/components/AllSections/TitleAllSections.vue";
// Data Skills
import { skills } from "../../Data/Skills";
</script>
