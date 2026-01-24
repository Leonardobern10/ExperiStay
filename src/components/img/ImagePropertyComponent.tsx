import { Box, Stack } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import ImageComponent from './ImageComponent';
import LabelProperty from '../LabelProperty';
import { imagePropertySx } from './ImagePropertyComponent.styles';
import type { ImagePropertyComponentProps } from '../../types/property/ImagePropertyComponentProps';
import RatingValue from '@components/rating/RatingValue';

export default function ImagePropertyComponent({
    src,
    name,
    location,
    rating,
    label,
    full,
}: ImagePropertyComponentProps): ReactElement {
    const imagePropertyStyles = useMemo(() => imagePropertySx(full), [full]);
    return (
        <Box sx={imagePropertyStyles}>
            <ImageComponent
                src={src}
                alt={`imagem do imovel em destaque ${name} no(a) ${location}`}
            />
            <RatingValue value={rating} />
            <Stack
                direction="row"
                width="100%">
                <LabelProperty
                    highlight={true}
                    labelName={label}
                />
            </Stack>
        </Box>
    );
}
