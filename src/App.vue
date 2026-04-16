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
import NavBar from "@/components/AllSections/NavBar.vue";
import HeroSection from "@/components/AllSections/MyHero.vue";
import CounterSection from "@/components/AllSections/Counter.vue";
import ServesSection from "@/components/AllSections/MyServices.vue";
import SkillsSection from "@/components/AllSections/MySkills.vue";
import ProjectsSection from "@/components/AllSections/MyProjects.vue";
import ContactSection from "@/components/AllSections/MyContact.vue";
import MyFooter from "@/components/AllSections/MyFooter.vue";
import BtnScrollTop from "@/components/AllSections/ScrollTop.vue";
</script>
