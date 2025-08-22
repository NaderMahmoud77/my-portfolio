<template>
  <section
    ref="statsSection"
    class="mt-0 relative lg:mt-0 w-full text-white flex justify-center"
  >
    <BackGradient />

    <ul
      class="p-6 bg-primary divide-secondary max-auto lg:max-0 rounded-3xl w-11/12 z-1 border border-secondary relative dark:bg-[#ffffff29] shadow-lg md:divide-x grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12"
    >
      <li
        class="text-center"
        v-for="(el, i) in numbers"
        :key="i"
        v-animate-on-scroll.once="{ delay: i * 0.2 }"
      >
        <h3
          class="font-semibold text-xl sm:text-2xl md:text-4xl w-full flex justify-center items-center"
        >
          +
          <CountUp
            v-if="inView"
            :startVal="0"
            :endVal="el.num"
            :duration="3"
            :key="i + counterKey"
          />
          <span v-if="el.title === 'Experience'" class="ml-1"> years</span>
        </h3>
        <p class="mt-2">{{ el.title }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import CountUp from "vue-countup-v3";

// components
import BackGradient from "@/components/UI/BackGradient.vue";

const numbers = ref([
  { title: "Created Projects", num: 150 },
  { title: "Projects", num: 150 },
  { title: "Experience", num: 2 },
  { title: "Happy Clients", num: 80 },
]);

const inView = ref(false);
const counterKey = ref(0);

const statsSection = ref(null);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          inView.value = true;
          counterKey.value++;
        } else {
          inView.value = false;
        }
      });
    },
    { threshold: 0.3 }
  );

  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});

onBeforeUnmount(() => {
  if (observer && statsSection.value) {
    observer.unobserve(statsSection.value);
  }
});
</script>
