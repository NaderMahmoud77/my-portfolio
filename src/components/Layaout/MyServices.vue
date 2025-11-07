<template>
  <section class="py-20" id="services">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <MyTitle text="My Services" />

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="group relative p-6 bg-[#f8fbff] dark:bg-[#ffffff29] rounded-2xl text-center transition-all duration-100 hover:shadow-2xl"
          v-animate-on-scroll.once="{ delay: i * 0.1 }"
        >
          <div class="relative flex justify-center -top-10">
            <div
              class="relative bg-primary rounded-full w-[80px] h-[80px] flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-blue-400 group-hover:to-purple-500"
            >
              <!-- البوردر حوالين الأيقونة -->
              <span
                class="absolute inset-1 rounded-full border border-secondary"
              ></span>

              <Icon
                :icon="service.icon"
                class="text-3xl text-white dark:text-secondary relative z-10"
              />
            </div>
          </div>

          <h3
            class="relative text-xl font-semibold text-primary dark:text-white mb-3"
          >
            {{ service.title }}
          </h3>

          <p class="text-primary/80 dark:text-gray-400">
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Components
import MyTitle from "@/components/Layaout/TitleAllSections.vue";

import {services} from "../../Data/Services";
</script>
