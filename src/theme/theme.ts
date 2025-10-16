import { createTheme, responsiveFontSizes, type Theme } from '@mui/material';
import type {} from '@mui/x-date-pickers/themeAugmentation';

let theme: Theme = createTheme();

theme = createTheme(theme, {
    palette: {
        primary: {
            main: '#ab9f19ff',
            light: '#FBFBFB',
            dark: '#0F0F0F ',
            contrastText: '#716969 ',
        },
        secondary: {
            main: '#252525ff',
            light: '#ffffffb0',
            dark: '#070606be',
        },
        background: {
            default: '#101010d0',
            paper: '#252525ff',
        },
        error: {
            main: '#912424bb',
        },
        success: {
            main: '#1f6d1fc0',
        },
        text: {
            primary: '#fcededd3',
            secondary: '#828080ff',
            disabled: '#02020295',
        },
    },
    shape: { borderRadius: 5 },
    spacing: 5,
    typography: {
        fontSize: 16,
        fontFamily: 'Lexend, sans-serif',
    },
});

theme = createTheme(theme, {
    typography: {
        fontSize: 16,
        fontFamily: 'Lexend, sans-serif',
        /** Titulo de apresentação */
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            textShadow: '2px 2px 2px black',
            width: '100%',
            color: theme.palette.text.primary,
            [theme.breakpoints.up('md')]: {
                textAlign: 'center',
                fontSize: '4rem',
            },
        },
        /** Titulos de seções da Home */
        h2: {
            fontSize: '2rem',
            fontWeight: 400,
            fontFamily: 'Poppins, sans-serif',
            color: theme.palette.text.primary,
            [theme.breakpoints.up('md')]: {
                fontSize: '3rem',
            },
        },
        h3: {
            fontFamily: 'Lexend, sans-serif',
            fontSize: '1.2rem',
            fontWeight: 500,
            color: theme.palette.text.primary,
            [theme.breakpoints.up('md')]: {
                fontSize: '1.5rem',
            },
        },
        h4: {
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.2rem',
            fontWeight: 500,
            color: theme.palette.text.primary,
            [theme.breakpoints.up('md')]: {
                fontSize: '1.8rem',
            },
        },
        /** Textos extensos */
        body1: {
            fontSize: '1rem',
            fontWeight: 300,
            color: theme.palette.text.primary,
            fontFamily: 'Poppins, sans-serif',
            [theme.breakpoints.up('md')]: {
                fontSize: '1rem',
            },
        },
        /** Textos curtos */
        body2: {
            fontSize: '.9rem',
            fontWeight: 200,
            color: theme.palette.text.secondary,
            fontFamily: 'Lexend, sans-serif',
            [theme.breakpoints.up('md')]: {
                fontSize: '1rem',
            },
        },
        /** Subtitulo do titulo de apresentação */
        subtitle1: {
            fontSize: '1.2rem',
            fontWeight: 600,
            letterSpacing: 1.2,
            fontFamily: 'Poppins, sans-serif',
        },
        /** Subtitulo dos titulos de seção */
        subtitle2: {
            fontFamily: 'Lexend, sans-serif',
            fontSize: '.9rem',
            fontWeight: 300,
            minWidth: '60%',
            maxWidth: '70%',
            textAlign: 'center',
            color: '#828080ff',
            [theme.breakpoints.up('md')]: {
                fontSize: '1.1rem',
            },
        },
        caption: {
            color: theme.palette.primary.main,
            fontSize: '.8rem',
            fontWeight: '400',
            fontFamily: 'Poppins, sans-serif',
        },
        overline: {
            fontWeight: 200,
        },
    },
    components: {
        MuiStack: {
            styleOverrides: {
                root: {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 4,
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    fontWeight: 300,
                    color: theme.palette.text.primary,
                    textShadow: '1px 1px 2px black',
                    fontSize: '1rem',
                    transition: theme.transitions.create(
                        ['color', 'transform'],
                        {
                            duration: theme.transitions.duration.short,
                            easing: theme.transitions.easing.easeIn,
                        },
                    ),
                    [theme.breakpoints.up('lg')]: {
                        '&:hover': {
                            color: theme.palette.primary.main,
                            transform: 'translateY(-10px)',
                            cursor: 'pointer',
                        },
                    },
                }),
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    fontFamily: 'Poppins, sans-serif',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing(1),
                    width: 'fit-content',
                    paddingX: theme.spacing(2),
                    paddingY: theme.spacing(2),
                    [theme.breakpoints.up('md')]: {
                        paddingX: theme.spacing(4),
                        paddingY: theme.spacing(2),
                        fontSize: '1rem',
                    },
                }),
            },
            variants: [
                {
                    props: { variant: 'main' },
                    /** Acessa o arquivo theme para manter consistência */
                    style: ({ theme }: { theme: Theme }) => ({
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.dark,
                        /** Cria uma transição com as propriedades passadas na lista */
                        transition: theme.transitions.create(
                            ['background-color', 'color'],
                            {
                                duration: theme.transitions.duration.short,
                                easing: theme.transitions.easing.easeInOut,
                            },
                        ),
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.primary.main,
                        },
                    }),
                },
                {
                    props: { variant: 'default' },
                    style: ({ theme }: { theme: Theme }) => ({
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.secondary.light,
                        transition: theme.transitions.create(
                            ['background-color', 'color'],
                            {
                                duration: theme.transitions.duration.short,
                                easing: theme.transitions.easing.easeInOut,
                            },
                        ),
                        '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.secondary.main,
                        },
                    }),
                },
            ],
        },
        MuiDatePicker: {
            defaultProps: {
                displayWeekNumber: true,
                borderColor: theme.palette.primary.main,
                openPickerIcon: { color: theme.palette.primary.main },
            },
        },
        MuiDateCalendar: {
            styleOverrides: {
                root: {
                    color: '#000',
                    borderRadius: '20px',
                    borderColor: '#000000ff',
                },
                fixedWeekNumber: 6,
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: theme.shape.borderRadius,
                    overflow: 'hidden',
                    transition: theme.transitions.create(
                        ['transform', 'box-shadow', 'border-color'],
                        {
                            duration: theme.transitions.duration.short,
                            easing: theme.transitions.easing.easeIn,
                        },
                    ),
                    '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: `0px 10px 10px #000`,
                        borderColor: theme.palette.primary.main,
                    },
                },
            },
        },
        MuiCardActionArea: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: theme.shape.borderRadius,
                    overflow: 'hidden',
                    transition: theme.transitions.create(
                        ['transform', 'box-shadow', 'border-color'],
                        {
                            duration: theme.transitions.duration.short,
                            easing: theme.transitions.easing.easeIn,
                        },
                    ),
                    '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: `0px 10px 10px #000`,
                        borderColor: theme.palette.primary.main,
                    },
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
