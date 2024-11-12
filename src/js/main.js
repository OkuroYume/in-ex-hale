import { gsap } from "gsap";
const intro = gsap.timeline();
intro.from("#title", {
  opacity: 0,
  duration: 3,
  delay: 2,
});

intro.from(".subtitle", {
  opacity: 0,
  duration: 3,
  delay: 0,
});

intro.to(".start", {
  opacity: 0,
  display: "none",
  duration: 3,
  delay: 0,
});
