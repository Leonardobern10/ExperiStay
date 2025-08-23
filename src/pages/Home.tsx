import { type ReactElement } from "react";
import { Box, Grid } from "@mui/material";
import MainContentContainer from "../components/mainContent/MainContentContainer";
import PropertyHighlights from "../components/HighLights/PropertyHighlights";
import { useScrollSectionsAnimations } from "../hooks/useAnimation";

export default function Home(): ReactElement {
  useScrollSectionsAnimations(".section");

  return (
    <Grid
      sx={{
        height: "100%",
      }}
    >
      <MainContentContainer className="section" />
      <PropertyHighlights className="section" />
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
