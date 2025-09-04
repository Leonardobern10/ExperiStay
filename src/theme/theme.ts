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
            main: "#252525ff",
            light: "#ffffffb0",
            dark: "#070606be",
        },
        background: {
            default: "#101010d0",
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
            secondary: "#828080ff",
            disabled: "#02020295",
        },
    },
    typography: {
        fontSize: 16,
        fontFamily: "'Lexend', sans-serif",
        h1: {
            fontSize: "4rem",
            fontWeight: 400,
            fontFamily: "Poppins, sans-serif;"
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: 400,
        },
        h3: {
            fontSize: "2rem",
            fontWeight: 500,
        },
        h4: {
            fontSize: "1.8rem",
            fontWeight: 400,
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
        },
        subtitle1: {
            fontSize: '1.2rem',
            fontWeight: 600,
            letterSpacing: 1.2,
        },
        subtitle2: {
            fontSize: '1.1rem',
            fontWeight: 400,
            width: '60%',
            textAlign: 'center',
            color: '#828080ff'
        },
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
                root: ({ theme }) => ({
                    textTransform: 'none',
                    fontWeight: 300,
                    display: "flex",
                    alignItems: "center",
                    gap: theme.spacing(2),
                    width: 'fit-content'
                })
            },
            variants: [
                {
                    props: { variant: 'main' },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.dark
                    })
                },
                {
                    props: { variant: 'default' },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.secondary.light
                    })
                }

            ]
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