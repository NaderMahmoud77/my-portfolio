<template>
  <section id="projects" class="relative p-16 w-11/12 mx-auto">
    <!-- Title -->
    <MyTitle text="My Projects" />

    <!-- Custom Navigation Buttons -->
    <button
      class="swiper-prev absolute top-2/3 md:left-4 left-0 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
    </button>
    <button
      class="swiper-next absolute top-2/3 md:right-4 right-0 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
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
<script setup>
import { ref } from "vue";
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
let projects = ref([
  {
    title: "Restaurant Website",
    discreption:
      "A modern and responsive restaurant website showcasing the menu, featured dishes, and contact section. Built with HTML, CSS, and JavaScript for a smooth user experience.",
    image: new URL("@/assets/images/pro-1.jpeg", import.meta.url).href,
    tags: ["Html", "Css", "Js"],
    liveLink: "https://nadermahmoud77.github.io/Restaurant-Website/",
    codeLink: "https://github.com/NaderMahmoud77/Restaurant-Website",
  },
  {
    title: "Book Store",
    discreption:
      "An online bookstore built with React and Redux Toolkit for state management. Features Material UI design, animations with Framer Motion, and a responsive user interface.",
    image: new URL("@/assets/images/pro-2.jpeg", import.meta.url).href,
    tags: ["React", "Mui", "Redux-Toolkit", "React-Router"],
    liveLink: "https://nadermahmoud77.github.io/book-store/",
    codeLink: "",
  },
  {
    title: "Shop Store",
    discreption:
      "A simple e-commerce shop with product listing and cart features. Developed using React, Redux Toolkit, and React Router, styled with Material UI for a clean design.",
    image: new URL("@/assets/images/pro-3.jpeg", import.meta.url).href,
    tags: ["React", "Mui", "Redux-Toolkit", "React-Router"],
    liveLink: "https://nadermahmoud77.github.io/shop-store/",
    codeLink: "",
  },
  {
    title: "Weather App",
    discreption:
      "A responsive weather app built with React and i18n for multi-language support. It fetches real-time weather data and presents it in a clean CSS-based interface.",
    image: new URL("@/assets/images/pro-4.jpeg", import.meta.url).href,
    tags: ["React", "Css", "i18n"],
    liveLink: "https://nadermahmoud77.github.io/Weather-App-react/",
    codeLink: "",
  },
  {
    title: "Pizza Website",
    discreption:
      "A responsive pizza restaurant website created with Vue.js. It showcases the menu and featured items with a modern design, ensuring a smooth user experience.",
    image: new URL("@/assets/images/pro-5.jpeg", import.meta.url).href,
    tags: ["Html", "Css", "Js"],
    liveLink: "https://nadermahmoud77.github.io/Website-Pizza-/",
    codeLink: "",
  },
  {
    title: "Christmas Gift",
    discreption:
      "A festive Christmas landing page built with HTML, CSS, and JavaScript. It features seasonal styling, interactive elements, and a responsive layout for all devices.",
    image: new URL("@/assets/images/pro-6.jpeg", import.meta.url).href,
    tags: ["Html", "Css", "Js"],
    liveLink: "https://nadermahmoud77.github.io/Christmas-Gift/",
    codeLink: "",
  },
  {
    title: "Quiz App",
    discreption:
      "A fun and interactive quiz application developed with HTML, CSS, and JavaScript. It allows users to answer questions and see their score with a simple clean UI.",
    image: new URL("@/assets/images/pro-7.jpeg", import.meta.url).href,
    tags: ["Html", "Css", "Js"],
    liveLink: "https://nadermahmoud77.github.io/Awesome-Quiz-App/",
    codeLink: "",
  },
]);
</script>
