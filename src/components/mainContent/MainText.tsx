import { Box, Typography } from "@mui/material";
import { forwardRef, type ReactElement } from "react";
import type { MainTextProps } from "../../types/MainTextProps";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import useWidth from "../../hooks/useWidth";
import ButtonWithIcon from "../ButtonWithIcon";

const MainText = forwardRef<HTMLDivElement, MainTextProps>(
  ({ title, desc }, ref): ReactElement => {
    let width: boolean = useWidth('md');

    return (
      <Box
        ref={ref}
        sx={{
          width: `${width ? "60%" : "100%"}`,
          // backdropFilter: "brightness(70%)", // efeito no fundo
          display: "flex",
          flexDirection: "column",
          rowGap: (theme) => theme.spacing(2),
          padding: (theme) => theme.spacing(4),
          borderRadius: (theme) => theme.shape.borderRadius,
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: (theme) => theme.spacing(2)
        }}>
          <Typography
            color="#ab9f19ff"
            variant="h1"
            sx={{
              width: "100%",
              textShadow: "2px 2px 2px black"
            }}
          >
            {title}
          </Typography>
          {width && (
            <Typography variant="subtitle1" sx={{ textShadow: "4px 4px 4px black" }} color='textPrimary '>
              {desc}
            </Typography>
          )}
        </Box>
        <ButtonWithIcon buttonName="Exibir catálogo" buttonIcon={RealEstateAgentIcon} />
      </Box>
    );
  }
);

export default MainText;
