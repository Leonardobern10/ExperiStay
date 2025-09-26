import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function PriceHighlight({
    value,
}: {
    value: number;
}): ReactElement {
    return (
        <Typography variant="h3">
            R$ {value}
            <Box component="span">/noite</Box>
        </Typography>
    );
}
