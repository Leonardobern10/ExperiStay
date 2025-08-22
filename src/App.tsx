import { Box, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid
      component="div"
      direction="column"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        width: "100dvw",
      }}
    >
      {loading ? (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Outlet />
      )}
    </Grid>
  );
}

export default App;
