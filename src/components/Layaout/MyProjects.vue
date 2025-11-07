<template>
  <section id="projects" class="relative p-16 w-11/12 mx-auto">
    <!-- Title -->
    <MyTitle text="My Projects" />

    <!-- Custom Navigation Buttons -->
    <button
      class="swiper-prev absolute top-[60%] sm:top-2/3 md:left-4 left-0 transform -translate-y-1/2 z-10 dark:text-primary text-white dark:bg-secondary bg-primary p-3 sm:p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-left" class="font-bold sm:text-3xl" />
    </button>
    <button
      class="swiper-next absolute top-[60%] sm:top-2/3 md:right-4 right-0 transform -translate-y-1/2 z-10 dark:text-primary text-white dark:bg-secondary bg-primary p-3 sm:p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-right" class="font-bold sm:text-3xl" />
    </button>

    <!-- Swiper Component -->
    <swiper
      v-animate-on-scroll
      :effect="'coverflow'"
      grabCursor
      centeredSlides
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      loop
      :navigation="navigationOptions"
      pagination
      :modules="[EffectCoverflow, Navigation]"
      class="max-w-full mt-32"
    >
      <swiper-slide class="max-w-[300px]" v-for="(p, i) in projects" :key="i">
        <ProjectsCard
          :title="p.title"
          :discreption="p.discreption"
          :image="p.image"
          :tags="p.tags"
          :liveLink="p.liveLink"
          :codeLink="p.codeLink"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<!-- ------------- JS ---------------- -->
<script setup>
// Components
import MyTitle from "@/components/Layaout/TitleAllSections.vue";
import ProjectsCard from "@/components/UI/ProjectCard.vue";
// swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Navigation } from "swiper/modules";

// Navigation
let navigationOptions = {
  prevEl: ".swiper-prev",
  nextEl: ".swiper-next",
};

// Data
import { projects } from "../../Data/Projects";
</script>
