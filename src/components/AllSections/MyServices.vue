<template>
  <section class="py-24" id="services">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <MyTitle text="My Services" />

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        <div
          v-for="(service, i) in services"
          :key="i"
          v-animate-on-scroll.once="{ delay: i * 0.08 }"
          class="group relative p-6 rounded-2xl transition-all duration-500 bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-black/30 hover:shadow-2xl hover:-translate-y-2"
        >
          <!-- Icon wrapper -->
          <div class="relative flex justify-center -mt-16">
            <div
              class="relative bg-primary rounded-full w-20 h-20 flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-primary/30 group-hover:via-blue-300/20 group-hover:to-purple-400/20"
            >
              <span
                class="absolute inset-1 rounded-full border border-secondary/50"
              ></span>

              <Icon
                :icon="service.icon"
                class="text-3xl text-white dark:text-secondary relative z-10"
              />
            </div>
          </div>

          <!-- Title -->
          <h3
            class="text-xl font-semibold text-primary dark:text-white mt-6 mb-3"
          >
            {{ service.title }}
          </h3>

          <!-- Description -->
          <p class="text-primary/80 dark:text-gray-400 text-sm">
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Components
import MyTitle from "@/components/AllSections/TitleAllSections.vue";

import { services } from "../../Data/Services";
</script>
