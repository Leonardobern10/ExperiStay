import { Box, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { ratingValueSx } from './RatingValue.styles';

export default function RatingValue(props: { value: number }): ReactElement {
    const theme = useTheme();
    const ratingValueStyle = useMemo(() => ratingValueSx(theme), [theme]);
    return (
        <Box
            component="div"
            sx={ratingValueStyle.ratingBoxSx}>
            <StarIcon
                sx={ratingValueStyle.ratingIconSx}
                color="primary"
            />
            <Typography variant="body1">
                {props.value.toPrecision(2)}
            </Typography>
        </Box>
    );
}
