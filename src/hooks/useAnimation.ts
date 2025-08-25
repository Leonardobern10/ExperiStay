import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeaderAnimation = (
  el1: RefObject<null | HTMLElement>,
  el2: RefObject<null | HTMLElement>,
  el3: RefObject<HTMLButtonElement | null>
) => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(el1.current, { duration: 2, opacity: 0, y: -20 })
      .from(el2.current, { duration: 1, opacity: 0, y: -20 })
      .from(el3.current, { duration: 1, opacity: 0, y: -20 });
  }, []);
};

export const useMainContentAnimation = (
  container: RefObject<HTMLElement | null>,
  element: RefObject<HTMLElement | null>
) => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(container.current, { duration: 1, opacity: 0 }).from(
      element.current,
      {
        duration: 1,
        opacity: 0,
        x: -150,
      }
    );
  }, []);
};

