import { gsap } from "gsap";

export default function fadeIn(ref) {
  gsap.fromTo(
    ref,
    {
      duration: 0,
      opacity: "0",
    },
    {
      duration: 1,
      opacity: "1",
      ease: "power4.inOut",
    }
  );
}
