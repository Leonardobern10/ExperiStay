import { Box, Grid, Typography } from "@mui/material";
import type { ReactElement } from "react";
import anunc1 from "../../assets/images/anunc_1.png";
import anunc2 from "../../assets/images/anunc_2.png";
import TopBoxHighlights from "../ui/TopBoxHighlights";
import PaperImage from "../ui/PaperImage";
import BottomBoxHighlights from "../ui/BottomBoxHightlights";
import ImageComponent from "../ImageComponent";

export default function PropertyHighlights(props: {
  className: string;
}): ReactElement {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: (theme) => theme.palette.background.paper,
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
          <PaperImage variant="outlined">
            <ImageComponent alt="Imagem do imovel de destaque 1" src={anunc1} />
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
          <PaperImage variant="outlined">
            <ImageComponent alt="Imagem do imovel de destaque 2" src={anunc2} />
          </PaperImage>
        </Box>
      </BottomBoxHighlights>
    </Grid>
  );
}
