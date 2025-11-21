import type { Theme } from '@mui/material';

export const containerMainDestinationSx = (theme: Theme) => ({
    boxContainer: {
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: theme.spacing(2),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        rowGap: theme.spacing(2),
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
        border: `2px solid ${theme.palette.primary.light}`,
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            padding: theme.spacing(2),
            paddingX: theme.spacing(6),
            justifyContent: 'space-evenly',
            height: '100%',
            columnGap: theme.spacing(2),
        },
    },
});
