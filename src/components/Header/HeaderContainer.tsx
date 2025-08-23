import { Box } from "@mui/material";
import { useRef, type ReactElement, type RefObject } from "react";
import { headerItemsNav } from "../../data/headerItemsNav";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import useWidth from "../../hooks/useWidth";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { useHeaderAnimation } from "../../hooks/useAnimation";

gsap.registerPlugin(useGSAP);

export default function HeaderContainer(props: {
  className?: string;
}): ReactElement {
  let width: number = useWidth();
  let elem3: RefObject<null | HTMLButtonElement> = useRef(null);
  const elem1: RefObject<null | HTMLElement> = useRef(null);
  const elem2: RefObject<null | HTMLElement> = useRef(null);

  useHeaderAnimation(elem1, elem2, elem3);

  return (
    <Box
      className={props.className}
      sx={{
        height: "3rem",
        padding: 4,
      }}
    >
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
