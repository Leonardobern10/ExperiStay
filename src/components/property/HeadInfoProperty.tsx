import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import type { HeadInfoPropertyProps } from '../../types/property/HeadInfoPropertyProps';
import AcomodationsContainer from './AcomodationsContainer';

export default function HeadInfoProperty({
    headTitle,
    headLocation,
    headAcomodations,
}: HeadInfoPropertyProps): ReactElement {
    const { quartos, banheiros, suite, metragem, garagem } = headAcomodations;

    return (
        <Box width="100%">
            <Typography variant="h2">{headTitle}</Typography>
            <Stack
                direction="row"
                justifyContent="flex-start"
                spacing={2}>
                <LocationOnIcon fontSize="inherit" />
                <Typography variant="body2">{headLocation}</Typography>
            </Stack>
            <Stack
                direction="row"
                justifyContent="flex-start"
                spacing={2}>
                <AcomodationsContainer
                    quartos={quartos}
                    banheiros={banheiros}
                    metragem={metragem}
                    suite={suite}
                    garagem={garagem}
                />
            </Stack>
        </Box>
    );
}
