import type { Theme } from '@mui/material';

export const datePickerSx = (
    theme: Theme,
    fullWidth?: boolean,
    main?: boolean,
) => ({
    datePickerSx: {
        width: `${fullWidth && '100%'}`,
        backgroundColor: `${main && theme.palette.primary.dark}`,
    },
    openPickerSx: {
        color: theme.palette.primary.main,
    },
});
