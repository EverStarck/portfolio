import { gsap } from "gsap";

export default function fadeIn(ref) {
  gsap.to(ref, {
    duration: 0.5,
    opacity: "1",
    ease: "power4.inOut",
  });
}
