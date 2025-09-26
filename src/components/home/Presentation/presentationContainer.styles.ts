import type { Theme } from '@mui/material';
import backgroundImage from '@images/downloadedImage.png';
import type { PresentationContainerSxType } from './presentation.types';

export const presentationContainerSx = (
    theme: Theme,
): PresentationContainerSxType => ({
    boxContainer: {
        width: '100%',
        height: '100vh',
        paddingY: theme.spacing(8),
    },
    boxImage: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
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
        width: '80%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.dark,
        borderRadius: theme.shape.borderRadius,
        borderColor: theme.palette.secondary.main,
    },
});
