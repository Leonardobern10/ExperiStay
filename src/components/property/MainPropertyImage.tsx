import ImagePropertyComponent from '@components/img/ImagePropertyComponent';
import { Box } from '@mui/material';
import type { ReactElement } from 'react';

export default function MainPropertyImage({
    location,
    name,
    src,
    rating,
    label,
}: {
    src: string;
    location: string;
    name: string;
    rating: number;
    label: string;
}): ReactElement {
    return (
        <Box sx={{ height: '60vh' }}>
            <ImagePropertyComponent
                src={src}
                name={name}
                rating={rating}
                location={location}
                label={label}
                full
            />
        </Box>
    );
}
