import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import MainTitle from '../Presentation/MainTitle';
import { ratings } from '../../data/ratingsData';
import RatingComponent from './RatingComponent';

export default function RatingsContainer(): ReactElement {
     return (
          <Box
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    padding: (theme) => theme.spacing(8),
                    rowGap: (theme) => theme.spacing(15),
               }}
          >
               <Box
                    sx={{
                         width: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                    }}
               >
                    <MainTitle
                         string="Experiências Reais"
                         align="center"
                    />
                    <Typography variant="subtitle2">
                         Veja o que nosso hóspedes dizem sobre nossas
                         experiências inesquecíveis
                    </Typography>
               </Box>
               <Stack direction="row">
                    {ratings.map((el) => (
                         <RatingComponent
                              key={el.index}
                              rating={el.rating}
                              textRating={el.textRating}
                              name={el.name}
                              location={el.location}
                         />
                    ))}
               </Stack>
          </Box>
     );
}
