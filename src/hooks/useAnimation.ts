import { useGSAP } from '@gsap/react';
import type { RefObject } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export const useHeaderAnimation = (
     el1: RefObject<null | HTMLElement>,
     el2: RefObject<null | HTMLElement>,
     el3: RefObject<HTMLButtonElement | null>,
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
     element: RefObject<HTMLElement | null>,
) => {
     useGSAP(() => {
          let tl = gsap.timeline();
          tl.from(container.current, { duration: 1, opacity: 0 }).from(
               element.current,
               {
                    duration: 1,
                    opacity: 0,
                    x: -150,
               },
          );
     }, []);
};

export const textAnimation = (
     container: string,
     textAnimated: string,
     duration?: number,
     delay?: number,
) => {
     useGSAP(() => {
          gsap.to(container, {
               duration: duration ?? 2,
               text: {
                    value: textAnimated,
               },
               ease: 'bounce.in',
               delay: delay ?? 2,
          });
     }, []);
};

export const slideAnimation = (container: string) => {
     useGSAP(() => {
          gsap.from(container, {
               xPercent: -200,
               duration: 2,
               delay: 2,
          });
     }, []);
};
