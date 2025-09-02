import { Button, styled } from "@mui/material";

const ButtonWithIconUI = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: '#ab9f19ff',
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  fontWeight: 200
}));

export default ButtonWithIconUI;
