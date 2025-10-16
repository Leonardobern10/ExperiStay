import { Box, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { priceValueSx } from './priceValueProperty.styles';

export default function PriceValueProperty({
    price,
}: {
    price: number;
}): ReactElement {
    const theme = useTheme();
    const priceValueStyle = useMemo(() => priceValueSx(), [theme]);
    return (
        <Typography
            variant="h2"
            color="primary"
            sx={priceValueStyle.priceValueTypoSx}>
            {`R$ ${price}`}
            <Box
                component="span"
                sx={priceValueStyle.priceValueboxSx}>
                /noite
            </Box>
        </Typography>
    );
}
