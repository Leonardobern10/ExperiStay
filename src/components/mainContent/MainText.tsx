import { Box, Typography } from "@mui/material";
import { forwardRef, type ReactElement } from "react";
import type { MainTextProps } from "../../types/MainTextProps";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import useWidth from "../../hooks/useWidth";
import ButtonWithIcon from "../ui/ButtonWithIcon";

const MainText = forwardRef<HTMLDivElement, MainTextProps>(
  ({ title, desc }, ref): ReactElement => {
    let width: number = useWidth();

    return (
      <Box
        ref={ref}
        sx={{
          width: `${width > 768 ? "60%" : "100%"}`,
          backdropFilter: "brightness(70%)", // efeito no fundo
          display: "flex",
          flexDirection: "column",
          rowGap: 4,
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Box>
          <Typography
            color="white"
            variant="h1"
            sx={{
              width: "100%",
              textShadow: "2px 2px 2px black",
            }}
          >
            {title}
          </Typography>
          {width > 768 && (
            <Typography sx={{ textShadow: "2px 2px 2px black" }} color="white">
              {desc}
            </Typography>
          )}
        </Box>
        <ButtonWithIcon
          variant="outlined"
          sx={{
            width: "fit-content",
          }}
        >
          <Typography>Exibir catálogo</Typography>
          <RealEstateAgentIcon />
        </ButtonWithIcon>
      </Box>
    );
  }
);

export default MainText;
