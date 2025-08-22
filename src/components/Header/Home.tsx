import { type ReactElement } from "react";
import MainContentContainer from "../mainContent/MainContentContainer";
import { Box, Grid } from "@mui/material";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeaderContainer from "./HeaderContainer";

export default function Home(): ReactElement {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const panels: HTMLElement[] = gsap.utils.toArray<HTMLElement>(".section");

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
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
  });

  return (
    <Grid
      sx={{
        height: "100%",
      }}
    >
      <HeaderContainer className="section" />
      <MainContentContainer className="section" />
      <Box
        className="section"
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "red",
        }}
      >
        a
      </Box>
      <Box
        className="section"
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "blue",
        }}
      >
        a
      </Box>
      <Box
        className="section"
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "green",
        }}
      >
        a
      </Box>
    </Grid>
  );
}
