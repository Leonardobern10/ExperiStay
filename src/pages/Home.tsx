import { type ReactElement } from "react";
import { Grid } from "@mui/material";
import MainContentContainer from "../components/mainContent/MainContentContainer";
import PropertyHighlights from "../components/HighLights/PropertyHighlights";
import HeaderContainer from "../components/Header/HeaderContainer";

export default function Home(): ReactElement {
  return (
    <Grid
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: (theme) => theme.palette.background.default
      }}
    >
      <HeaderContainer />
      <MainContentContainer className="section" />
      <PropertyHighlights className="section" />
    </Grid>
  );
}
