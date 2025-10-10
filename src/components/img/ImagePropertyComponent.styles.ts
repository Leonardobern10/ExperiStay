import type { SxProps, Theme } from '@mui/material';

export const imagePropertySx = (full?: boolean): SxProps<Theme> => ({
    height: `${full ? '100%' : '50%'}`,
    width: '100%',
    position: 'relative',
});
