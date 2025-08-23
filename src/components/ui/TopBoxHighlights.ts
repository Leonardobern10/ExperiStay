import { styled, Box } from "@mui/material";

const TopBoxHighlights = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  columnGap: theme.spacing(5),
  rowGap: theme.spacing(5),
  height: "6rem",
  width: "100%",
  padding: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    padding: 0,
  },
}));

export default TopBoxHighlights;
