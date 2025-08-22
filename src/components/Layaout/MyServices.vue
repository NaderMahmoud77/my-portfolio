<template>
  <section class="py-20" id="services">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <MyTitle text="My Services" />

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="group relative p-6 bg-[#f8fbff] dark:bg-[#ffffff29] rounded-2xl text-center border border-primary dark:border-secondary shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          v-animate-on-scroll.once="{ delay: i * 0.1 }"
        >
          <!-- border متحرك -->
          <div
            class="absolute inset-0 rounded-2xl p-[2px] group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-blue-400 group-hover:to-purple-500 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"
          >
            <div class="w-full h-full rounded-2xl bg-[#ffffff29]"></div>
          </div>

          <div class="relative flex justify-center -top-10">
            <div
              class="relative bg-primary rounded-full w-[80px] h-[80px] flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl shadow-lg group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-blue-400 group-hover:to-purple-500"
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
            class="relative text-xl font-semibold text-primary dark:text-secondary mb-3"
          >
            {{ service.title }}
            <!-- خط تحت العنوان -->
            <span
              class="absolute left-1/2 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-500 group-hover:w-20 group-hover:-translate-x-1/2"
            ></span>
          </h3>

          <p
            class="text-primary/80 dark:text-gray-300 transition duration-300 group-hover:text-primary"
          >
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
import { useDarkMode } from "@/components/Layaout/useDarkMode.js";
const { mode } = useDarkMode();

const services = [
  {
    title: "Vue.js / Nuxt.js",
    desc: "Modern and scalable web applications using Vue and Nuxt.",
    icon: "tabler:brand-vue",
  },
  {
    title: "Responsive Design",
    desc: "Websites that look great on desktop, tablet, and mobile.",
    icon: "mdi:responsive",
  },
  {
    title: "Vuex / Pinia",
    desc: "State management solutions for Vue.js applications.",
    icon: "logos:pinia",
  },
  {
    title: "Performance Optimization",
    desc: "Fast, optimized websites with smooth user experiences.",
    icon: "mdi:rocket-launch",
  },
  {
    title: "API Integration",
    desc: "Connecting your apps with RESTful and GraphQL APIs.",
    icon: "mdi:api",
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing support and improvements for your projects.",
    icon: "mdi:tools",
  },
];
</script>
