import type { SxProps, Theme } from '@mui/material';

export const containerPropertiesSx = (
    theme: Theme,
    loading: boolean,
): SxProps<Theme> => ({
    width: loading ? '5rem' : '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    rowGap: theme.spacing(8),
    paddingX: theme.spacing(8),
    paddingY: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: theme.spacing(6),
        paddingX: theme.spacing(20),
    },
});
