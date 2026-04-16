// src/composables/useDarkMode.js
import { ref, onMounted } from "vue";

const mode = ref(localStorage.getItem("theme") === "dark");

const toggleMode = () => {
  mode.value = !mode.value;
  if (mode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

export function useDarkMode() {
  onMounted(() => {
    // Sync with initial state
    if (mode.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  return { mode, toggleMode };
}
