import { Grid } from "@mui/material";
import type { ReactElement } from "react";

export default function ContainerMainText(props: {
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
        padding: 4,
        justifyContent: "flex-start",
        alignItems: "end",
        height: "90%",
      }}
    >
      {props.child}
    </Grid>
  );
}
