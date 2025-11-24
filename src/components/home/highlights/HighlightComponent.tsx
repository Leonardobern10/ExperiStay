import { Box, CardActionArea, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import type { PropertyType } from '../../../types/PropertyType';
import PriceHighlight from './PriceHighlight';
import DescriptionHighlight from './DescriptionHighlights';
import ImagePropertyComponent from '@components/img/ImagePropertyComponent';
import { useNavigate } from 'react-router';
import LikedComponent from '@components/LikedComponent';
import { highlightComponentSx } from './HighlightsComponent.styles';

export default function HighlightComponent(
    hightLightData: PropertyType,
): ReactElement {
    const navigate = useNavigate();
    const theme = useTheme();
    const highlightStyles = useMemo(() => highlightComponentSx(theme), [theme]);

    return (
        <CardActionArea
            className="cardProperty"
            onClick={() => navigate(`/destinos/${hightLightData._id}`)}
            sx={highlightStyles.cardSx}>
            <ImagePropertyComponent
                src={hightLightData.img}
                name={hightLightData.name}
                label={hightLightData.label}
                rating={hightLightData.rating}
                location={hightLightData.location}
            />
            <Box sx={highlightStyles.boxInfoSx}>
                <Box>
                    <Typography variant="h3">{hightLightData.name}</Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary">
                        {hightLightData.location}
                    </Typography>
                </Box>
                <DescriptionHighlight
                    description={hightLightData.description}
                />
                <Box sx={highlightStyles.boxValueSx}>
                    <PriceHighlight value={hightLightData.price} />
                    <LikedComponent liked={hightLightData.liked} />
                </Box>
            </Box>
        </CardActionArea>
    );
}
