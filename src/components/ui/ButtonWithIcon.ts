import { Button, styled } from "@mui/material";

const ButtonWithIcon = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

export default ButtonWithIcon;
