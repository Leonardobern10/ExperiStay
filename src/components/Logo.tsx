import { Box, useTheme, type Theme } from '@mui/material';

import type { ReactElement, RefObject } from 'react';

export default function Logo(props: {
    ref?: RefObject<HTMLElement | null>;
}): ReactElement {
    const theme = useTheme();
    return (
        <Box
            ref={props.ref}
            sx={logoStyle(theme)}>
            ExperiStay
        </Box>
    );
}

const logoStyle = (theme: Theme) => ({
    width: 'fit-content',
    fontWeight: 800,
    fontSize: {
        xs: '1.2rem',
        md: '2rem',
    },
    paddingX: theme.spacing(2),
    color: theme.palette.text.primary,
});
