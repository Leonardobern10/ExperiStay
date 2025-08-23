import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#464f53ff",
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
      default: "#131313e5",
      paper: "#939e9aff",
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
      fontSize: "3rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 200,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 300,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 20,
  },
  spacing: 5,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "background.default",
            color: "text.primary",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
