<template>
  <div class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
    <NavBar />
    <HeroSection />
    <CounterSection />
    <ServesSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <MyFooter />
    <BtnScrollTop />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const NavBar = defineAsyncComponent(() =>
  import("@/components/Layaout/NavBar.vue")
);
const HeroSection = defineAsyncComponent(() =>
  import("@/components/Layaout/MyHero.vue")
);
const CounterSection = defineAsyncComponent(() =>
  import("@/components/Layaout/Counter.vue")
);
const ServesSection = defineAsyncComponent(() =>
  import("@/components/Layaout/MyServices.vue")
);
const SkillsSection = defineAsyncComponent(() =>
  import("@/components/Layaout/MySkills.vue")
);
const ProjectsSection = defineAsyncComponent(() =>
  import("@/components/Layaout/MyProjects.vue")
);
const ContactSection = defineAsyncComponent(() =>
  import("@/components/Layaout/MyContact.vue")
);
const MyFooter = defineAsyncComponent(() =>
  import("@/components/Layaout/MyFooter.vue")
);
const BtnScrollTop = defineAsyncComponent(() =>
  import("@/components/Layaout/ScrollTop.vue")
);
</script>
