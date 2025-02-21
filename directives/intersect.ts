import type { DirectiveBinding } from "vue";

const vIntersect = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { animation = "fade-in", once = true } = binding.value || {};

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.5) {
          el.classList.add(animation);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          el.classList.remove(animation);
        }
      },
      { threshold: [0.5, 1.0] }
    );
    observer.observe(el);
  },
};

export default vIntersect;
