<template>
  <section id="contact" class="py-20 relative">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <MyTitle text="Contact Me" />

      <BackGradient />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10" v-animate-on-scroll.once>
        <!-- Left Side: Info -->
        <div class="flex flex-col justify-center space-y-8">
          <h3 class="text-3xl font-bold text-primary dark:text-white">
            Let’s work together
            <span class="animate-bounce inline-block">🚀</span>
          </h3>
          <p
            class="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-md"
          >
            Looking for a developer to bring your ideas to life? Let’s build
            something impactful together.
          </p>

          <!-- Contact Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Links -->
            <div v-for="(l, i) in links" :key="i">
              <a
                target="_blank"
                :href="l.href"
                class="flex items-center gap-4 p-4 rounded-xl bg-[#f8fbff] hover:bg-[#000957]/10 dark:bg-[#ffffff29] dark:hover:bg-secondary/20 transition-colors duration-300"
              >
                <Icon :icon="l.icon" class="dark:text-secondary text-2xl" />
                <span class="text-primary dark:text-white">{{ l.title }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div>
          <form
            action="https://formspree.io/f/mpwlvako"
            method="POST"
            class="bg-[#f8fbff] dark:bg-[#ffffff29] p-6 rounded-xl shadow-xl space-y-5"
          >
            <div v-for="(input, i) in inputs" :key="i">
              <label
                class="block text-sm font-medium text-primary dark:text-white"
                >{{ input.title }}</label
              >
              <input
                :type="input.type"
                :name="input.name"
                :placeholder="input.placeholder"
                required
                class="w-full mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:outline-none"
              />
            </div>

            <div>
              <label
                class="block text-sm font-medium text-primary dark:text-white"
                >Message</label
              >
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                class="w-full mt-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:outline-none"
              ></textarea>
            </div>

            <Button text="Send Message" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- Js -->
<script setup>
// Components
import Button from "@/components/UI/Button.vue";
import MyTitle from "@/components/Layaout/TitleAllSections.vue";
import BackGradient from "@/components/UI/BackGradient.vue";

// Data
let links = [
  {
    title: "Email Me",
    icon: "mdi:email-outline",
    href: "mailto:nadermahmoud513@gmail.com",
  },
  {
    title: "+201069208821",
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

let inputs = [
  {
    title: "Name",
    type: "text",
    name: "name",
    placeholder: "Enter your name",
  },
  {
    title: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
  },
];
</script>
