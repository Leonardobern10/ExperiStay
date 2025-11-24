import type { Theme } from '@mui/material';

export const infoPropertySx = (theme: Theme) => ({
    infoBoxContainerSx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingY: theme.spacing(8),
        rowGap: theme.spacing(8),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            columnGap: theme.spacing(4),
        },
    },
    infoBoxDescriptionSx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 'fit-content',
        rowGap: theme.spacing(4),
    },
    infoTypographyDescriptionSx: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '70%',
        },
    },
    infoBoxTitleSx: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: theme.spacing(2),
    },
    infoBoxCharactersSx: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: theme.spacing(2),
    },
    infoBoxAcomodationsSx: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        minWidth: '50vw',
        rowGap: theme.spacing(1),
    },
    infoBoxAllAcomodationsSx: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 2,
        padding: theme.spacing(4),
        rowGap: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        minWidth: '40%',
        boxShadow: `1px 1px 1px ${theme.palette.primary.contrastText},
                -1px 1px 1px ${theme.palette.primary.contrastText},
        1px -1px 1px ${theme.palette.primary.contrastText}, 
        -1px -1px 1px ${theme.palette.primary.contrastText}`,
    },
    infoDividerSx: {
        backgroundColor: theme.palette.primary.light,
        opacity: 0.2,
    },
});
