import type { SxProps, Theme } from '@mui/material';

export const labelPropertySx = (
    theme: Theme,
    highlight?: boolean,
): SxProps<Theme> => ({
    position: `${highlight ? 'absolute' : ''}`,
    top: `${highlight ? '3%' : ''}`,
    right: `${highlight ? '3%' : ''}`,
    width: 'fit-content',
    color: theme.palette.primary.main,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    border: 1,
});
