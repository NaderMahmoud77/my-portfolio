<template>
  <section id="projects" class="relative container mx-auto px-6">
    <!-- Title -->
    <MyTitle text="My Projects" />

    <!-- Custom Navigation Buttons -->

    <button class="swiper-prev button-3d" @click="prevSlide">
      <div class="button-top">
        <span class="material-icons">❮</span>
      </div>
      <div class="button-bottom"></div>
      <div class="button-base"></div>
    </button>
    <button class="swiper-next button-3d" @click="nextSlide">
      <div class="button-top">
        <span class="material-icons">❯</span>
      </div>
      <div class="button-bottom"></div>
      <div class="button-base"></div>
    </button>

    <!-- Swiper Component -->
    <swiper
      v-animate-on-scroll
      :effect="'coverflow'"
      grabCursor
      centeredSlides
      slidesPerView="auto"
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
      class="max-w-full mt-4 projects-swiper"
    >
      <swiper-slide
        class="max-w-[300px] projects-swiper__slide"
        v-for="(p, i) in projects"
        :key="i"
      >
        <ProjectsCard
          :title="p.title"
          :description="p.description"
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
import MyTitle from "@/components/AllSections/TitleAllSections.vue";
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

<style scoped>
/* ── Swiper container ─────────────────────────── */
.projects-swiper {
  width: 100%;
  padding: 2rem 0 3.5rem; /* bottom room for pagination dots */
}

.projects-swiper__slide {
  max-width: 320px;

  /* Inactive slides are subtly dimmed */
  opacity: 0.55;
  transform: scale(0.92);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

/* Active (center) slide is fully visible and slightly larger */
.projects-swiper__slide.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
}

/* Button Swiper Next and Prive */
.button-3d {
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  border-width: 0;
  padding: 0 8px;
  min-width: 1em;
  min-height: 1em;
  box-sizing: border-box;
  background: transparent;
  font: inherit;
  cursor: pointer;
  /* margin: 10px; */
  border-radius: 20px;
}

.button-top {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding: 8px 16px;
  color: #fff;
  background-image: linear-gradient(
    145deg,
    var(--color-primary),
    var(--color-primaryTwo)
  );
  border-radius: 20px;
  transition:
    transform 0.3s,
    border-radius 0.3s,
    background 10s;
}

.button-3d:active .button-top {
  border-radius: 10px 10px 8px 8px / 8px;
  transform: translateY(2px);
  background-image: linear-gradient(
    145deg,
    var(--color-primary),
    var(--color-primaryTwo)
  );
}

.button-bottom {
  position: absolute;
  z-index: 1;
  bottom: 4px;
  left: 4px;
  border-radius: 20px;
  padding-top: 6px;
  width: calc(100% - 8px);
  height: calc(100% - 10px);
  background-image: linear-gradient(
    145deg,
    var(--color-primary),
    var(--color-primaryTwo)
  );
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
  transition:
    border-radius 0.2s,
    padding-top 0.2s;
}

.button-base {
  position: absolute;
  z-index: 0;
  top: 4px;
  left: 0;
  border-radius: 20px;
  width: 100%;
  height: calc(100% - 4px);
  background-color: rgba(0, 0, 0, 0.15);
  box-shadow:
    0 1px 1px 0 rgba(255, 255, 255, 0.75),
    inset 0 2px 2px rgba(0, 0, 0, 0.25);
  transition:
    border-radius 0.2s,
    padding-top 0.2s;
}

.button-3d:active .button-bottom {
  border-radius: 10px 10px 8px 8px / 8px;
  padding-top: 0;
}

.button-3d:active .button-base {
  border-radius: 10px 10px 8px 8px / 8px;
}
</style>
