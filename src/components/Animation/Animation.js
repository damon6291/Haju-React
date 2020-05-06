import gsap from "gsap";
import ScrollMagic from "scrollmagic";

import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

export const fadeIn = (node, xVal, yVal, duration) =>
  gsap.from(node, {
    x: xVal,
    y: yVal,
    duration: duration,
    opacity: 0,
    ease: "power2.inOut",
  });

export const sceneConstructor = (element, xval, yval, duration) =>
  new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook: "0.85",
  }).setTween(fadeIn(element, xval, yval, duration));

export const sceneController = () => new ScrollMagic.Controller();
