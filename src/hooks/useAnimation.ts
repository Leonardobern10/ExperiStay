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

export const useScrollSectionsAnimations = (classTarget: string) => {
  useGSAP(() => {
    const panels: HTMLElement[] = gsap.utils.toArray<HTMLElement>(classTarget);

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        scrub: 1,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: {
        snapTo: (_, self: any) => {
          const panelPositions = panels.map(
            (p) => ScrollTrigger.create({ trigger: p, start: "top top" }).start
          );
          const closest = gsap.utils.snap(panelPositions, self.scroll());
          return gsap.utils.normalize(
            0,
            ScrollTrigger.maxScroll(window),
            closest
          );
        },
        duration: 0.5, // duração da animação do snap
      },
    });
  }, []);
};
