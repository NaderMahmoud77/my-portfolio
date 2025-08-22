<template>
  <div>
    <!-- Overlay -->
    <div
      v-if="props.isOpen"
      @click="$emit('close')"
      class="fixed inset-0 bg-black/70 z-40"
    ></div>

    <!-- Drawer -->
    <div
      class="fixed top-0 left-0 w-80 h-full bg-[#D4EBF8] dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300"
      :class="props.isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div
        class="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700"
      >
        <div class="text-3xl font-bold text-primary dark:text-white">
          <<span class="text-white dark:text-secondary">N</span>ader/>
        </div>
        <button
          @click="$emit('close')"
          class="w-8 h-8 border border-primary text-primary font-semibold rounded-full dark:border-secondary dark:text-secondary hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-white transition"
        >
          ✕
        </button>
      </div>

      <!-- Content -->
      <div class="p-6">
        <!-- Dark & light -->
        <ButtonMode />
        <!-- == Dark & light == -->

        <!-- Links -->
        <ul class="flex flex-col gap-1 mt-5">
          <li v-for="(href, index) in Menue" :key="href.name" class="">
            <a
              @click="$emit('close')"
              :href="href.href"
              :class="[
                'flex items-center gap-3 uppercase font-mono text-primary dark:text-white border-b dark:border-gray-700 border-gray-300 p-4 hover:translate-x-2 duration-200',
                index === 0 ? 'border-t' : '',
              ]"
            >
              <icon
                :icon="href.icon"
                class="w-5 h-5 text-primary dark:text-secondary"
              ></icon>

              {{ href.name }}
            </a>
          </li>
        </ul>
        <!-- == Links == -->

        <!-- Contact -->
        <h1
          class="mt-16 text-center font-serif text-2xl text-gray-700 dark:text-white"
        >
          Contact My
        </h1>
        <swiper
          :effect="'cube'"
          loop
          grabCursor
          :pagination="true"
          :modules="modules"
          class="mySwiper mt-5"
        >
          <swiper-slide
            v-for="(link, i) in links"
            :key="i"
            class="dark:bg-[#ffffff29] bg-primary py-5"
          >
            <a :href="link.href" class="flex flex-col items-center gap-3 mb-6">
              <p class="text-white dark:text-secondary">{{ link.title }}</p>
              <div class="bg-[#ffffff29] p-3 rounded-full">
                <icon
                  :icon="link.icon"
                  class="w-5 h-5 text-white dark:text-secondary"
                ></icon>
              </div>
            </a>
          </swiper-slide>
        </swiper>
        <!-- == Contact == -->
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonMode from "@/components/UI/ButtonMode.vue";
import { defineProps, watch } from "vue";

// Props //
let props = defineProps({
  isOpen: { type: Boolean, default: false },
});

// Emits //
defineEmits(["close"]);

// Data //
let Menue = [
  { name: "Home", href: "#home", icon: "mdi:home" },
  { name: "Skills", href: "#skills", icon: "mdi:hammer-wrench" },
  { name: "Services", href: "#services", icon: "mdi:briefcase" },
  { name: "Projects", href: "#projects", icon: "mdi:folder" },
  { name: "Contact", href: "#contact", icon: "mdi:phone" },
];
let links = [
  {
    title: "Email Me",
    icon: "mdi:email-outline",
    href: "mailto:nadermahmoud513@gmail.com",
  },
  {
    title: "Phone",
    icon: "mdi:phone",
    href: "tel:+201069208821",
  },
  {
    title: "whatsapp",
    icon: "mdi:whatsapp",
    href: "https://wa.me/201069208821",
  },
  {
    title: "Instagram",
    icon: "mdi:instagram",
    href: "https://ig.me/nadermahmoud10",
  },
];

// Swiper //
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
const modules = [EffectCube, Pagination];

// watch drawer is open OR no //
watch(
  () => props.isOpen,
  (val) => {
    if (val) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
);
</script>
