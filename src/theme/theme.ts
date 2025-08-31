import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
      primary: {
            main: "#BCABAE",
                  light: "#FBFBFB",
                        dark: "#0F0F0F ",
                              contrastText: "#716969 ",
                                  },
                                      secondary: {
                                            main: "#2D2E2E",
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
                                                                                                                                  disabled: "#02020295",
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
                                                                                                                                                                                                                                          borderRadius: 32,
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                              spacing: 5,
                                                                                                                                                                                                                                                components: {
                                                                                                                                                                                                                                                    MuiStack: {
                                                                                                                                                                                                                                                          styleOverrides: {
                                                                                                                                                                                                                                                                  root: {
                                                                                                                                                                                                                                                                            justifyContent: "space-between",
                                                                                                                                                                                                                                                                                      alignItems: "center",
                                                                                                                                                                                                                                                                                                padding: 4,
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                                      MuiList: {
                                                                                                                                                                                                                                                                                                                            styleOverrides: {
                                                                                                                                                                                                                                                                                                                                    root: {
                                                                                                                                                                                                                                                                                                                                              display: "flex",
                                                                                                                                                                                                                                                                                                                                                        justifyContent: "space-between",
                                                                                                                                                                                                                                                                                                                                                                  alignItems: "center",
                                                                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                                                                      });

                                                                                                                                                                                                                                                                                                                                                                                      theme = responsiveFontSizes(theme);

                                                                                                                                                                                                                                                                                                                                                                                      export default theme;