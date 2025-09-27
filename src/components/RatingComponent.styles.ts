import type { Theme } from '@mui/material';

export const ratingComponentSx = (theme: Theme) => ({
    cardSx: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '30%',
        maxWidth: '30rem',
        padding: theme.spacing(6),
        rowGap: theme.spacing(4),
    },
    valueRatingSx: {
        opacity: '70%',
    },
    typographyRatingSx: {
        opacity: '80%',
        fontStyle: 'italic',
    },
    typographyLocationSx: {
        opacity: '70%',
        fontWeight: 200,
    },
});
