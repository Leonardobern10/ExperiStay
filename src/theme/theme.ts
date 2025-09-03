import { createTheme, responsiveFontSizes } from "@mui/material";
import type { } from '@mui/x-date-pickers/themeAugmentation';

let theme = createTheme({
    palette: {
        primary: {
            main: "#ab9f19ff",
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
            default: "#000000af",
            paper: "#dac612ff",
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
            fontSize: "4rem",
            fontWeight: 600,
            fontFamily: '"Montserrat", sans-serif;'
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
        subtitle1: {
            fontSize: '1.2rem',
            fontWeight: 600,
            letterSpacing: 1.2,
        }
    },
    shape: {
        borderRadius: 5,
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
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 300
                }
            }
        },

        MuiDatePicker: {
            defaultProps: {
                displayWeekNumber: true,
            },
        },
        MuiDateCalendar: {
            styleOverrides: {
                root: {
                    color: '#000',
                    borderRadius: '20px',
                    borderColor: '#000000ff',
                }
            }
        },
    }
});

theme = responsiveFontSizes(theme);

export default theme;