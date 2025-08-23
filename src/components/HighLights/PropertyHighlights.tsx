import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import type { ReactElement } from "react";
import anunc1 from "../../assets/images/anunc_1.png";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import anunc2 from "../../assets/images/anunc_2.png";

export default function PropertyHighLights(props: {
  className: string;
}): ReactElement {
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#c4c1c1ff",
        paddingX: 4,
        paddingBottom: 2,
      }}
      className={props.className}
    >
      <Grid
        sx={{
          width: "100vw",
          height: "30%",
          padding: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: 5,
            height: "100%",
          }}
        >
          <Typography color="primary" variant="h3">
            Destaques
          </Typography>
          <Box
            sx={{
              width: "40%",
            }}
          >
            <Typography color="primary" variant="body1">
              Imóveis selecionados para entregar experiências e momentos
              marcantes.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        sx={{
          height: "70%",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: 8,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            rowGap: 10,
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              backgroundImage: `url(${anunc1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "70%",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                position: "relative",
                left: "77%",
                top: "5%",
                padding: 0,
              }}
            >
              <NorthEastIcon />
            </Button>
          </Paper>
          <Typography variant="body1" color="primary.main">
            Urca, Rio de Janeiro.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Paper
            variant="outlined"
            sx={{
              height: "90%",
              width: "100%",
              backgroundImage: `url(${anunc2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {" "}
            <Button
              variant="outlined"
              sx={{
                position: "relative",
                left: "90%",
                top: "5%",
                padding: 0,
              }}
            >
              <NorthEastIcon />
            </Button>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
