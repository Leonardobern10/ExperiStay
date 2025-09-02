import { Grid } from "@mui/material";
import type { ReactElement } from "react";

export default function GridMainText(props: {
  child: ReactElement;
}): ReactElement {
  return (
    <Grid
      container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: (theme) => theme.spacing(2),
        justifyContent: "flex-start",
        alignItems: "end",
        height: "fit-content",
        position: 'relative',
        left: 0,
        top: 0,
      }}
    >
      {props.child}
    </Grid>
  );
}
