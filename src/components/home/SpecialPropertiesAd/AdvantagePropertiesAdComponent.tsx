import { Box, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import type { AdvantageAdProps } from '../../../types/AdvantagesAdProps';
import { advantagePropertiesSx } from './specialProperties.styles';

export default function AdvantagePropertiesAdComponent(
    data: AdvantageAdProps,
): ReactElement {
    const theme = useTheme();
    const advantageStyles = useMemo(
        () => advantagePropertiesSx(theme),
        [theme],
    );
    return (
        <Box sx={advantageStyles.boxSx}>
            <Typography variant="h3">{data.title}</Typography>
            <Typography
                variant="body1"
                sx={advantageStyles.descriptionSx}>
                {data.description}
            </Typography>
        </Box>
    );
}
