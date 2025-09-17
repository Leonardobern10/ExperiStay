import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import MainTitle from '../MainTitle';
import { ratings } from '../../data/ratingsData';
import RatingComponent from '../../RatingComponent';
import ContainerSectionHome from '../ui/ContainerSectionHome';
import useWidth from '../../hooks/useWidth';
import Carousel from '../Carousel';

export default function RatingsContainer(props: {
     className: string;
}): ReactElement {
     const currentWidth = useWidth('md');

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
                    {/** Subtitulo da seção */}
                    <Typography variant="subtitle2">
                         Veja o que nosso hóspedes dizem sobre nossas
                         experiências inesquecíveis
                    </Typography>
               </Box>
               {currentWidth ? (
                    <Stack
                         direction="row"
                         spacing={8}
                         paddingX={8}>
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
               ) : (
                    <Box
                         sx={(theme) => ({
                              width: '100%',
                              paddingX: theme.spacing(4),
                         })}>
                         <Carousel
                              children={ratings.map((el) => (
                                   <RatingComponent
                                        key={el.index}
                                        rating={el.rating}
                                        textRating={el.textRating}
                                        name={el.name}
                                        location={el.location}
                                   />
                              ))}
                         />
                    </Box>
               )}
          </ContainerSectionHome>
     );
}
