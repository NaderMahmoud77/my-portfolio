import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import CountUp from "vue-countup-v3";
import AnimateOnScroll from "@/components/UI/Animation.js";
createApp(App)
  .component("Icon", Icon)
  .component("CountUp", CountUp)
  .directive("animate-on-scroll", AnimateOnScroll)
  .mount("#app");
