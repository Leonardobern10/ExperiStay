import { type ReactElement } from "react";
import { Grid } from "@mui/material";
import MainContentContainer from "../components/mainContent/MainContentContainer";
import PropertyHighlights from "../components/HighLights/PropertyHighlights";
import { useScrollSectionsAnimations } from "../hooks/useAnimation";

export default function Home(): ReactElement {

  //useScrollSectionsAnimations(".section");

  return (
    <Grid
      sx={{
        height: "100%",
        width: "100vw",
      }}
    >
      <MainContentContainer className="section" />
      <PropertyHighlights className="section" />
    </Grid>
  );
}
