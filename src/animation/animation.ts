import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";

export const mainContentAnimation = (
  contentContainer: RefObject<HTMLElement>,
  contentElement: RefObject<HTMLElement>
) => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(contentContainer.current, { duration: 1, opacity: 0 }).from(
      contentElement.current,
      {
        duration: 1,
        opacity: 0,
        x: -150,
      }
    );
  }, []);
};
