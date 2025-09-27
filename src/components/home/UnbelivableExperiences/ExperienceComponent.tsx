import { Box, Card, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import type { ExperienceComponentsProps } from '../../../types/ExperienceComponentProps';
import InfoIcon from '@mui/icons-material/Info';
import { experienceComponentSx } from './unbelivableExperiences.styles';

export default function ExperienceComponent(
    data: ExperienceComponentsProps,
): ReactElement {
    const Icon = data.icon;
    const theme = useTheme();
    const expComponentStyles = useMemo(
        () => experienceComponentSx(theme),
        [theme],
    );
    return (
        <Card
            variant="elevation"
            sx={expComponentStyles.cardSx}>
            <Box sx={expComponentStyles.boxTitleSx}>
                <Icon />
                <Typography variant="h3">{data.title}</Typography>
            </Box>
            <Typography variant="body1">{data.description}</Typography>
            <Box sx={expComponentStyles.boxAlertSx}>
                <InfoIcon />
                <Typography
                    variant="body1"
                    color="textSecondary">
                    {data.alert}
                </Typography>
            </Box>
        </Card>
    );
}
