import gsap from "gsap";

export const fadeInUp = (node, delay) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: delay,
    opacity: 0,
    ease: "power3.inOut",
  });
};

export const fadeInDown = (node, delay) => {
  gsap.from(node, {
    y: -60,
    duration: 1,
    delay: delay,
    opacity: 0,
    ease: "power3.inOut",
  });
};
