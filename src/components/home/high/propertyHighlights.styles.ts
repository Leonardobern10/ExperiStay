import type { Theme } from '@mui/material';
import type { PropertyHighlightsSxType } from './highlights.types';

export const propertyHighlightsSx = (
    theme: Theme,
): PropertyHighlightsSxType => ({
    boxTitleSx: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    boxMobileSx: {
        width: '100%',
        paddingX: theme.spacing(4),
    },
});
