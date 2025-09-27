import type { SxProps, Theme } from '@mui/material';

export const imagePropertySx = (
    theme: Theme,
    full?: boolean,
): SxProps<Theme> => ({
    height: `${full ? '100%' : '50%'}`,
    width: '100%',
    position: 'relative',
});
