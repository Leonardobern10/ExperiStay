import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonWithIcon = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

export default ButtonWithIcon;
