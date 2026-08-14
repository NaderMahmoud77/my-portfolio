<template>
  <section
    id="home"
    v-animate-on-scroll.once
    class="flex justify-center items-center dark:text-white min-h-[calc(100vh+10px)] md:min-h-[calc(100vh+130px)] mt-20 lg:mt-0"
  >
    <BackGradient />
    <!-- Main -->
    <main
      class="container absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg-p-8"
    >
      <header class="text-center lg:text-left">
        <h1
          class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white"
        >
          👋Hi, I'm
          <!-- Style in file TitleAllSections -->
          <span :class="mode ? 'outlineDark-text' : 'outlineLight-text'"
            >Nader</span
          >
        </h1>
        <p
          class="text-lg m-auto max-w-xl max-auto lg:mx-0 text-primary dark:text-white"
        >
          A front-end developer passionate about turning ideas into modern,
          responsive web applications. Skilled in
          <span class="font-semibold text-primary dark:text-gray-400"
            >Js, Css, Html, React, MUI, Redux Toolkit, Next.js, Vue.js, Nuxt.js, Pinia,
            PrimeVue</span
          >, I craft solutions that balance business needs with great user
          experiences.
        </p>
        <!-- Buttons -->
        <a
          href="#contact"
          class="mt-6 flex justify-center lg:justify-start text-primary dark:text-white font-semibold"
        >
          <Button text="Hire My" />

          <a
            download
            href="https://drive.google.com/uc?export=download&id=1pp2Nj3xLhYhmNvqtNS3Z0f5OZaOXlVd-"
            class="font-semibold w-[10rem] h-[55px] text-lg ml-2 border-2 rounded-full dark:text-secondary dark:border-secondary bg-white dark:bg-transparent flex justify-center items-center border-primary text-primary"
            ><Icon icon="line-md:download-loop" class="text-2xl" />
            <span class="ml-1">Resume</span></a
          >
        </a>
        <!-- ==== Buttons ==== -->
      </header>
      <!-- === aside === -->
      <aside
        class="container flex justify-center items-center flex-wrap lg:justify-end mt-20 lg:mt-0"
      >
        <figure
          class="card relative m-[30px] md:w-[420px] md:h-[420px] md:before:w-[430px] md:before:h-[440px] w-[280px] h-[300px] before:w-[300px] before:h-[300px] before:border-[25px] before:border-primary dark:before:border-secondary"
        >
          <div
            class="relative w-full h-full bg-cover transform translate-x-[10px] translate-y-[10px]"
          >
            <img
              src="@/assets/images/photo_1.jpg"
              alt="Hero picture"
              class="max-w-1/2"
              loading="lazy"
            />
          </div>
        </figure>
      </aside>
      <!-- === aside === -->
    </main>
    <!-- ==== Main ==== -->

    <svg class="hidden">
      <filter id="wavy1">
        <feTurbulence
          x="0"
          y="0"
          baseFrequency="0.2"
          numOctaves="5"
          seed="1"
        ></feTurbulence>
        <feDisplacementMap scale="30" in="SourceGraphic"></feDisplacementMap>
      </filter>
    </svg>
  </section>
</template>

<!-- JS -->
<script setup>
// components
import BackGradient from "@/components/UI/BackGradient.vue";
import Button from "@/components/UI/Button.vue";
import { useDarkMode } from "@/hooks/useDarkMode.js";
const { mode } = useDarkMode();
</script>

<!-- Styling -->
<style scoped>
/* Image Aside */
.container .card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 1;
  filter: url(#wavy1);
}
</style>
