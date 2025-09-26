import type { SxProps, Theme } from '@mui/material';

export const avatarSx = (theme: Theme): SxProps<Theme> => ({
    backgroundColor: theme.palette.primary.main,
    fontSize: '16px',
});

export const containerSx = (theme: Theme) => ({
    boxContainerSx: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    boxMobile: {
        width: '100%',
        paddingX: theme.spacing(4),
    },
});
