import { Button, styled } from "@mui/material";

const ButtonWithIconUI = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  fontWeight: 200
}));

export default ButtonWithIconUI;
