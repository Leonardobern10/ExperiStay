import { Box, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { priceValueSx } from './priceValueProperty.styles';

export default function PriceValueProperty({
    price,
}: {
    price: number;
}): ReactElement {
    const theme = useTheme();
    const priceValueStyle = useMemo(() => priceValueSx(theme), [theme]);
    return (
        <Typography sx={priceValueStyle.priceValueTypoSx}>
            {`R$ ${price.toFixed(2)}`}
            <Box
                component="span"
                sx={priceValueStyle.priceValueboxSx}>
                /noite
            </Box>
        </Typography>
    );
}
