import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function PriceValueProperty({
    price,
}: {
    price: number;
}): ReactElement {
    return (
        <Typography sx={{ fontSize: 30 }}>
            {`R$ ${price.toFixed(2)}`}
            <Box
                component="span"
                sx={{
                    fontSize: 12,
                    opacity: 0.7,
                    letterSpacing: 1.3,
                }}>
                /noite
            </Box>
        </Typography>
    );
}
