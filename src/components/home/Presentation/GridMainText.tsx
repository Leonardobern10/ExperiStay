import { Grid, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { gridMainTextSx } from './GridMainText.styles';

export default function GridMainText({
    children,
}: {
    children: ReactElement;
}): ReactElement {
    const theme = useTheme();
    const gridMainStyle = useMemo(() => gridMainTextSx(theme), [theme]);
    return (
        <Grid
            container
            component="main"
            sx={gridMainStyle}>
            {children}
        </Grid>
    );
}
