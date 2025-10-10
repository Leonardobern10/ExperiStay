import type { SxProps, Theme } from '@mui/material';

export const labelPropertySx = (
    theme: Theme,
    highlight?: boolean,
): SxProps<Theme> => ({
    position: `${highlight ? 'absolute' : ''}`,
    top: `${highlight ? '5%' : ''}`,
    right: `${highlight ? '3%' : ''}`,
    width: 'fit-content',
    color: theme.palette.primary.main,
    paddingX: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: 1,
});
