import { Box, Typography } from "@mui/material";
import { forwardRef, type ReactElement } from "react";
import type { MainTextProps } from "../../types/MainTextProps";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import useWidth from "../../hooks/useWidth";
import ButtonWithIcon from "../ui/ButtonWithIcon";

const MainText = forwardRef<HTMLDivElement, MainTextProps>(
  ({ title, desc }, ref): ReactElement => {
    let width: boolean = useWidth('md');

    return (
      <Box
        ref={ref}
        sx={{
          width: `${width ? "60%" : "100%"}`,
          backdropFilter: "brightness(70%)", // efeito no fundo
          display: "flex",
          flexDirection: "column",
          rowGap: (theme) => theme.spacing(2),
          padding: (theme) => theme.spacing(3),
          borderRadius: (theme) => theme.shape.borderRadius,
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
          {width && (
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
