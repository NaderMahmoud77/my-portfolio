// src/directives/animateOnScroll.js
export default {
  mounted(el, binding) {
    const options = {
      threshold: binding.value?.threshold || 0.3,
    };

    const animation = binding.value?.animation || {
      opacity: [0, 1],
      transform: ["translateY(40px) scale(0.95)", "translateY(0) scale(1)"],
      transition: "all 0.6s ease-out",
      delay: 0, // default delay
    };

    // إذا مررنا delay من binding
    const delay = binding.value?.delay || animation.delay || 0;

    el.style.opacity = animation.opacity ? animation.opacity[0] : 0;
    el.style.transform = animation.transform ? animation.transform[0] : "none";
    el.style.transition = `all 0.6s ease-out ${delay}s`;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = animation.opacity ? animation.opacity[1] : 1;
            el.style.transform = animation.transform
              ? animation.transform[1]
              : "none";
          }, delay * 1000); // delay بالثواني

          if (binding.modifiers.once) observer.unobserve(el);
        }
      });
    }, options);

    el.__vueObserver__ = observer;
    observer.observe(el);
  },
  unmounted(el) {
    if (el.__vueObserver__) {
      el.__vueObserver__.disconnect();
      delete el.__vueObserver__;
    }
  },
};
