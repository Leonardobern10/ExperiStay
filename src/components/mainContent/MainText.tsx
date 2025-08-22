import { Box, Button, Typography } from "@mui/material";
import { forwardRef, type ReactElement } from "react";
import type { MainTextProps } from "../../types/MainTextProps";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import useWidth from "../../hooks/useWidth";

const MainText = forwardRef<HTMLDivElement, MainTextProps>(
  ({ title, desc }, ref): ReactElement => {
    let width: number = useWidth();

    return (
      <Box
        ref={ref}
        sx={{
          width: `${width > 768 ? "60%" : "100%"}`,
          backdropFilter: "blur(3px)", // efeito no fundo
          display: "flex",
          flexDirection: "column",
          rowGap: 4,
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
        <Button
          variant="outlined"
          sx={{
            width: "fit-content",
            fontWeight: 400,
            backgroundColor: "background.default",
            color: "text.primary",
            padding: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography>Exibir catálogo</Typography>
          <RealEstateAgentIcon />
        </Button>
      </Box>
    );
  }
);

export default MainText;
