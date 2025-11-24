import { Stack, Typography } from '@mui/material';
import type { AcomodationsPropertyProps } from '../../types/property/AcomodationsPropertyProps';
import type { ReactElement } from 'react';

export default function HeadAcomodationItem({
    acomodationIcon,
    acomodationValue,
}: AcomodationsPropertyProps): ReactElement {
    const Icon = acomodationIcon;
    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            spacing={2}>
            <Icon fontSize="inherit" />
            <Typography variant="body2">{acomodationValue}</Typography>
        </Stack>
    );
}
