import type { SxProps, Theme } from '@mui/material';

export const gridMainTextSx = (theme: Theme): SxProps<Theme> => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifySelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'fit-content',
    paddingX: theme.spacing(8),
    textAlign: 'center',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(20),
        position: 'relative',
        left: 0,
        top: 0,
    },
});
