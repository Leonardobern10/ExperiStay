import { Box } from "@mui/material";
import { useRef, type ReactElement, type RefObject } from "react";
import { headerItemsNav } from "../../data/headerItemsNav";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import useWidth from "../../hooks/useWidth";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

gsap.registerPlugin(useGSAP);

export default function HeaderContainer(): ReactElement {
  let width: number = useWidth();

  const elem1: RefObject<null | HTMLElement> = useRef(null);
  const elem2: RefObject<null | HTMLElement> = useRef(null);
  let elem3: RefObject<null | HTMLButtonElement> = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(elem1.current, { duration: 2, opacity: 0, y: -20 })
      .from(elem2.current, { duration: 1, opacity: 0, y: -20 })
      .from(elem3.current, { duration: 1, opacity: 0, y: -20 });
  }, []);

  return (
    <Box>
      {width > 768 ? (
        <HeaderDesktop
          refLogo={elem1}
          refNav={elem2}
          refButton={elem3}
          headerItemsNav={headerItemsNav}
        />
      ) : (
        <HeaderMobile
          refLogo={elem1}
          refButton={elem3}
          headerItemsNav={headerItemsNav}
        />
      )}
    </Box>
  );
}
