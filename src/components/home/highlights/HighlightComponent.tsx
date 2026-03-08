import {
    Box,
    CardActionArea,
    Typography,
    useTheme,
    type SxProps,
    type Theme,
} from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import type { PropertyType } from '../../../types/PropertyType';
import PriceHighlight from './PriceHighlight';
import DescriptionHighlight from './DescriptionHighlights';
import ImagePropertyComponent from '@components/img/ImagePropertyComponent';
import { useNavigate, type NavigateFunction } from 'react-router';
import LikedComponent from '@components/LikedComponent';
import { highlightComponentSx } from './HighlightsComponent.styles';

const cardActionOptions = (
    id: string,
    style: SxProps<Theme>,
    navigate: NavigateFunction,
) => ({
    className: 'cardProperty',
    onClick: () => navigate(`/destinos/${id}`),
    sx: style,
});

const imagePropertyOptions = (hightLightData: PropertyType) => ({
    src: hightLightData.img,
    name: hightLightData.name,
    label: hightLightData.label,
    rating: hightLightData.rating,
    location: hightLightData.location,
});

export default function HighlightComponent(
    hightLightData: PropertyType,
): ReactElement {
    const navigate = useNavigate();
    const theme = useTheme();
    const highlightStyles = useMemo(() => highlightComponentSx(theme), [theme]);

    return (
        <CardActionArea
            {...cardActionOptions(
                hightLightData._id,
                highlightStyles.cardSx,
                navigate,
            )}>
            <ImagePropertyComponent {...imagePropertyOptions(hightLightData)} />
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
