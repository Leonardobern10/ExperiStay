import type { Theme } from '@mui/material';
import backgroundImage from '@images/bg_site.png';
import type { PresentationContainerSxType } from './presentation.types';

export const presentationContainerSx = (
    theme: Theme,
): PresentationContainerSxType => ({
    boxContainer: {
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
    },
    boxImage: {
        background: `linear-gradient(
      rgba(0,0,0,0.3),
      rgba(0,0,0,0.3)
    ), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        rowGap: {
            xs: theme.spacing(4),
            md: theme.spacing(8),
        },
        padding: {
            xs: theme.spacing(4),
            md: theme.spacing(4),
        },
    },
    gridCustom: {
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
    },
});
