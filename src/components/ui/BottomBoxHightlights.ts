import { Grid, styled } from "@mui/material";

const BottomBoxHighlights = styled(Grid)(({ theme }) => ({
  height: "70%",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export default BottomBoxHighlights;
