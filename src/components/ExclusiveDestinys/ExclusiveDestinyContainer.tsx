import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import useWidth from '@hooks/useWidth';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import Carousel from '@components/Carousel';
import MainTitle from '@components/Presentation/MainTitle';
import ExclusiveComponent from './ExclusiveComponent';
import { exclusiveDestines } from '@data/exclusiveDestinyData';

export default function ExclusiveDestinyContainer(props: {
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
                         justifyContent: 'space-between',
                         alignItems: 'center',
                    }}>
                    <MainTitle
                         align="center"
                         string="Destinos exclusivos"
                    />
                    <Typography variant="subtitle2">
                         Explore as maravilhas naturais e culturais do Brasil
                         através de acomodações únicas.
                    </Typography>
               </Box>
               {currentWidth ? (
                    <Stack
                         direction="row"
                         sx={{
                              columnGap: (theme) => theme.spacing(8),
                              padding: (theme) => theme.spacing(8),
                         }}>
                         {exclusiveDestines.map((el) => (
                              <ExclusiveComponent
                                   key={el.index}
                                   name={el.name}
                                   available={el.available}
                                   img={el.img}
                              />
                         ))}
                    </Stack>
               ) : (
                    <Box
                         sx={{
                              width: '100%',
                              paddingX: (theme) => theme.spacing(4),
                         }}>
                         <Carousel
                              children={exclusiveDestines.map((el) => (
                                   <ExclusiveComponent
                                        key={el.index}
                                        name={el.name}
                                        available={el.available}
                                        img={el.img}
                                   />
                              ))}
                         />
                    </Box>
               )}
          </ContainerSectionHome>
     );
}
