import type { SxProps, Theme } from '@mui/material';

export const containerPropertiesSx = (theme: Theme): SxProps<Theme> => ({
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    columnGap: theme.spacing(6),
    paddingX: theme.spacing(20),
    paddingY: theme.spacing(10),
});
