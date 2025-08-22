import {
  Grid
} from "@mui/material";
import { Outlet } from "react-router";

function App() {
  return (
    <Grid
      component="div"
      direction="column"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        width: '100dvw',
      }}
    >
      <Outlet />
    </Grid>
  );
}

export default App;
