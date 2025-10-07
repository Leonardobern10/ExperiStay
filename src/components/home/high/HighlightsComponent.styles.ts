import type { Theme } from '@mui/material';
import type { DescriptionHighlightSxType } from './highlights.types';

export const highlightComponentSx = (
    theme: Theme,
): DescriptionHighlightSxType => ({
    cardSx: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius,
        height: {
            xs: '33rem',
            md: '28rem',
        },
        overflow: 'hidden',
    },
    boxInfoSx: {
        height: '100%',
        paddingY: theme.spacing(4),
        paddingX: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        rowGap: theme.spacing(3),
    },
    boxValueSx: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
