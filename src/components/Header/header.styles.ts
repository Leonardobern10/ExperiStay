import type { SxProps, Theme } from '@mui/material';
import type { HeaderDesktopSxType, HeaderMobileSxType } from './header.types';

export const headerContainerSx = (theme: Theme): SxProps<Theme> => ({
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 'fit-content',
    maxHeight: '4rem',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
});

export const headerDesktopSx = (theme: Theme): HeaderDesktopSxType => ({
    stackSx: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        paddingY: theme.spacing(1),
        paddingX: theme.spacing(16),
    },
    logoSx: {
        width: 'fit-content',
    },
    boxSx: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: theme.spacing(4),
    },
});

export const headerMobileSx = (theme: Theme): HeaderMobileSxType => ({
    stackSx: {
        height: '100%',
        width: '100vw',
        paddingY: theme.spacing(3),
        marginY: theme.spacing(0.5),
    },
    navSx: {
        width: '50vw',
    },
});
