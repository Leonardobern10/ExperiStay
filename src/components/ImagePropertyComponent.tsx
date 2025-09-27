import { Box, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import ImageComponent from './ImageComponent';
import RatingValue from './RatingValue';
import LabelProperty from './LabelProperty';
import { imagePropertySx } from './ImagePropertyComponent.styles';
import type { ImagePropertyComponentProps } from '../types/property/ImagePropertyComponentProps';

export default function ImagePropertyComponent({
    src,
    name,
    location,
    rating,
    label,
    full,
}: ImagePropertyComponentProps): ReactElement {
    const theme = useTheme();
    const imagePropertyStyles = useMemo(
        () => imagePropertySx(theme, full),
        [theme, full],
    );
    return (
        <Box sx={imagePropertyStyles}>
            <ImageComponent
                src={src}
                alt={`imagem do imovel em destaque ${name} no(a) ${location}`}
            />
            <RatingValue value={rating} />
            <LabelProperty
                highlight={true}
                labelName={label}
            />
        </Box>
    );
}
