import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import MainTitle from '../Presentation/MainTitle';
import { ratings } from '../../data/ratingsData';
import RatingComponent from './RatingComponent';
import ContainerSectionHome from '../ui/ContainerSectionHome';

export default function RatingsContainer(props: {
     className: string;
}): ReactElement {
     return (
          <ContainerSectionHome className={props.className}>
               <Box
                    sx={{
                         width: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                    }}>
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
          </ContainerSectionHome>
     );
}
