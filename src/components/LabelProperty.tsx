import { Paper, Typography, useTheme } from '@mui/material';
import type { LabelPropertyProps } from '../types/LabelPropertyProps';
import { useMemo, type ReactElement } from 'react';
import { labelPropertySx } from './LabelProperty.styles';

export default function LabelProperty({
    labelName,
    highlight,
}: LabelPropertyProps): ReactElement {
    const theme = useTheme();
    const labelStyles = useMemo(
        () => labelPropertySx(theme, highlight),
        [theme, highlight],
    );
    return (
        <Paper
            variant="outlined"
            sx={labelStyles}>
            <Typography variant="caption"> {labelName} </Typography>
        </Paper>
    );
}
