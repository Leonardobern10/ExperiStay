import type { Theme } from '@mui/material';

export const destinesSx = (theme: Theme) => ({
    destinesMainContainerSx: {
        paddingTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        rowGap: theme.spacing(4),
        width: '100%',
        paddingX: theme.spacing(8),
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(25),
            paddingX: theme.spacing(16),
            flexDirection: 'row',
        },
    },
    destinesPropertiesContainerSx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {},
    },

    destinesStack: {
        flexDirection: 'column',
        width: '100%',
        rowGap: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            width: '85%',
        },
    },
});
