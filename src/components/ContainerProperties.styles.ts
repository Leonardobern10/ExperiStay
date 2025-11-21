import type { SxProps, Theme } from '@mui/material';

export const containerPropertiesSx = (theme: Theme): SxProps<Theme> => ({
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    rowGap: theme.spacing(8),
    paddingX: theme.spacing(8),
    paddingY: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        columnGap: theme.spacing(6),
        paddingX: theme.spacing(20),
    },
});
