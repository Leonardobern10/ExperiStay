import type { Theme } from '@mui/material';

export const ratingValueSx = (theme: Theme) => ({
    ratingBoxSx: {
        width: '5rem',
        padding: theme.spacing(1),
        position: 'absolute',
        top: '85%',
        left: '5%',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        columnGap: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
    },
    ratingIconSx: {
        height: '1.2rem',
    },
});
