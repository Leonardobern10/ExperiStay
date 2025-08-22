import type { ReactElement } from "react";
import MainContentContainer from "../mainContent/MainContentContainer";
import { Grid } from "@mui/material";

export default function Home (): ReactElement {
    return (
        <Grid sx={{
            height: '100%'
        }}>
            <MainContentContainer />
        </Grid>
    )
}