import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#092635",
      light: "#9EC8B9",
      dark: "#1B4242 ",
      contrastText: "#5C8374 ",
    },
    secondary: {
      main: "#4d4949ff",
      light: "#ffffffb0",
      dark: "#070606be",
    },
    background: {
      default: "#6e6d6de5",
      paper: "#5c8374",
    },
    error: {
      main: "#912424bb",
    },
    success: {
      main: "#1f6d1fc0",
    },
    text: {
      primary: "#fcededd3",
      secondary: "#6d62627c",
      disabled: "#312d2d54",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: 64,
      fontWeight: 400,

    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      padding: 1,
    },
  },
  shape: {
    borderRadius: 15,
  },
  spacing: 5,
});

export default theme;
