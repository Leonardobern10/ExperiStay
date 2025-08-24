import { Box, Button, Grid, Typography } from "@mui/material";
import type { ReactElement } from "react";
import anunc1 from "../../assets/images/anunc_1.png";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import anunc2 from "../../assets/images/anunc_2.png";
import TopBoxHighlights from "../ui/TopBoxHighlights";
import PaperImage from "../ui/PaperImage";
import BottomBoxHighlights from "../ui/BottomBoxHightlights";

export default function PropertyHighlights(props: {
  className: string;
}): ReactElement {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#c4c1c1ff",
      }}
      className={props.className}
    >
      <Grid
        sx={{
          width: "100vw",
          height: "30%",
          padding: 4,
        }}
      >
        <TopBoxHighlights>
          <Typography color="primary" variant="h3">
            Destaques
          </Typography>
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
            }}
          >
            <Typography color="primary" variant="body1">
              Imóveis selecionados para entregar experiências e momentos
              marcantes.
            </Typography>
          </Box>
        </TopBoxHighlights>
      </Grid>
      <BottomBoxHighlights>
        <Box
          sx={{
            height: "100%",
            width: { xs: "80%", md: "40%" },
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            rowGap: 10,
            columnGap: 4,
            padding: 4,
          }}
        >
          <PaperImage
            variant="outlined"
            sx={{
              backgroundImage: `url(${anunc1})`,
              height: "70%",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                position: "relative",
                left: { xs: "50%", md: "77%" },
                top: "5%",
                padding: 0,
              }}
            >
              <NorthEastIcon />
            </Button>
          </PaperImage>
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
          <PaperImage
            variant="outlined"
            sx={{
              height: "90%",
              backgroundImage: `url(${anunc2})`,
            }}
          >
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
          </PaperImage>
        </Box>
      </BottomBoxHighlights>
    </Grid>
  );
}
