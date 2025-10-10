import RatingComponent from '@components/rating/RatingComponent';
import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function RatingProperty(): ReactElement {
    return (
        <Box>
            <Typography variant="h3">Avaliações dos hóspedes</Typography>
            <Box
                sx={(theme) => ({
                    paddingY: theme.spacing(4),
                })}>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    spacing={2}>
                    <RatingComponent
                        rating={3}
                        textRating={
                            'O penthouse no Rio superou todas as expectativas. Ver o pôr do sol de Ipanema da nossa varanda privativa foi um momento único e emocionante'
                        }
                        name={'João Saldanha'}
                        location={'Belo Horizonte, MG'}
                    />
                </Stack>
            </Box>
        </Box>
    );
}
