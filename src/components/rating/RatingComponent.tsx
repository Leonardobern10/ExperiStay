import { Rating, Stack, Typography, Card, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';

import { ratingComponentSx } from './RatingComponent.styles';
import AvatarUserRating from '@components/home/Ratings/AvatarUserRating';
import type { RatingProps } from '../../types/RatingProps';

export default function RatingComponent(data: RatingProps): ReactElement {
    const theme = useTheme();
    const ratingStyles = useMemo(() => ratingComponentSx(theme), [theme]);
    return (
        <Card sx={ratingStyles.cardSx}>
            <Rating
                sx={ratingStyles.valueRatingSx}
                precision={0.5}
                value={data.rating}
                readOnly
            />
            <Typography
                sx={ratingStyles.typographyRatingSx}
                variant="body1">
                "{data.textRating}"
            </Typography>
            <Stack
                direction="row"
                justifyContent="flex-start"
                spacing={3}>
                <AvatarUserRating userName={data.name} />
                <Stack
                    direction="column"
                    alignItems="flex-start">
                    <Typography>{data.name}</Typography>
                    <Typography sx={ratingStyles.typographyLocationSx}>
                        {data.location}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    );
}
