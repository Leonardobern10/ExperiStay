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
    const Icon = data.icon;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: theme.spacing,
                padding: theme.spacing(4),
                backgroundColor: theme.palette.secondary.main,
                borderRadius: theme.shape,
                width: '100%',
            }}>
            <Box sx={{ padding: theme.spacing }}>
                <Icon
                    color={theme.palette.primary.main}
                    size={80}
                />
            </Box>
            <Box sx={advantageStyles.boxSx}>
                <Typography variant="h3">{data.title}</Typography>
                <Typography
                    variant="body1"
                    sx={advantageStyles.descriptionSx}>
                    {data.description}
                </Typography>
            </Box>
        </Box>
    );
}
