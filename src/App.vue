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
import NavBar from "@/components/Layaout/NavBar.vue";
import HeroSection from "@/components/Layaout/MyHero.vue";
import CounterSection from "@/components/Layaout/Counter.vue";
import ServesSection from "@/components/Layaout/MyServices.vue";
import SkillsSection from "@/components/Layaout/MySkills.vue";
import ProjectsSection from "@/components/Layaout/MyProjects.vue";
import ContactSection from "@/components/Layaout/MyContact.vue";
import MyFooter from "@/components/Layaout/MyFooter.vue";
import BtnScrollTop from "@/components/Layaout/ScrollTop.vue";
</script>
