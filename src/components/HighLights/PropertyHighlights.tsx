import { Box, Grid, Typography } from "@mui/material";
import type { ReactElement } from "react";
import anunc1 from "../../assets/images/anunc_1.png";
import TopBoxHighlights from "../ui/TopBoxHighlights";
import BottomBoxHighlights from "../ui/BottomBoxHightlights";
import HighlightComponent from "./HighlightComponent";
import amazonas from '../../assets/images/highlights/amazonas_highlight.png';
import bahia from '../../assets/images/highlights/bahia_highlight.png';
import sc from '../../assets/images/highlights/florianopolis_highlight.png';
import paraiba from '../../assets/images/highlights/paraiba_highlight.png';
import recife from '../../assets/images/highlights/recife_highlight.png';
import saopaulo from '../../assets/images/highlights/sao_paulo_highlight.png';

export default function PropertyHighlights(props: {
  className: string;
}): ReactElement {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100vh",
      }}
      className={props.className}
    >
      <Grid
        sx={{
          width: "100vw",
          height: "30%",
          padding: (theme) => theme.spacing(6),
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
      <BottomBoxHighlights sx={{
        height: '80%'
      }}>
        <Box
          sx={{
            height: "100%",
            width: { xs: "80%", md: "100%" },
            overflowX: 'scroll',
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            rowGap: (theme) => theme.spacing(4),
            columnGap: (theme) => theme.spacing(4),
            padding: (theme) => theme.spacing(4),
          }}>
          <HighlightComponent highlightName="Urca, Rio de Janeiro" src={anunc1} />
          <HighlightComponent highlightName="Manaus, Amazonas" src={amazonas} />
          <HighlightComponent highlightName="Salvador, Bahia" src={bahia} />
          <HighlightComponent highlightName="Florianópolis, Santa Catarina" src={sc} />
          <HighlightComponent highlightName="João Pessoa, Paraíba" src={paraiba} />
          <HighlightComponent highlightName="Recife, Pernambuco" src={recife} />
          <HighlightComponent highlightName="São Paulo, São Paulo" src={saopaulo} />

        </Box>
      </BottomBoxHighlights>
    </Grid>
  );
}
