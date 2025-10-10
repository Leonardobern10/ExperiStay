import type { Theme } from '@mui/material';

export const InputSelectSx = (theme: Theme, fullWidth?: boolean) => ({
    formSx: { minWidth: '15rem', width: `${fullWidth && '100%'}` },
    inputLabelSx: {
        color: theme.palette.primary.main,
    },
    selectCustomSx: { width: '100%' },
    paperPropsSx: {
        '& .MuiList-root': {
            display: 'block', // força layout vertical
        },
    },
});
