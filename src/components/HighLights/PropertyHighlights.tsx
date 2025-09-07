import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { PropertyHighlightsType } from '../../types/PropertyHighlightsType';
import {
     allProperties,
     propertyHighlightsData,
} from '@data/PropertyHighlightsData';
import HighlightComponent from './HightlightComponent';
import MainTitle from '../MainTitle';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import useWidth from '@hooks/useWidth';
import Carousel from '../Carousel';
import ButtonCustom from '@components/ButtonCustom';

export default function PropertyHighlights(props: {
     className: string;
}): ReactElement {
     const data: PropertyHighlightsType = propertyHighlightsData;
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
                         align="center"
                         string={data.title}
                    />
                    <Typography variant="subtitle2">{data.subtitle}</Typography>
               </Box>
               {currentWidth ? (
                    <Box
                         sx={{
                              paddingX: (theme) => theme.spacing(8),
                              width: '100vw',
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-evenly',
                              alignItems: 'center',
                              columnGap: (theme) => theme.spacing(6),
                         }}>
                         {allProperties.map((el) => (
                              <HighlightComponent
                                   key={el.index}
                                   index={el.index}
                                   name={el.name}
                                   location={el.location}
                                   description={el.description}
                                   price={el.price}
                                   rating={el.rating}
                                   liked={el.liked}
                                   img={el.img}
                                   label={el.label}
                              />
                         ))}
                    </Box>
               ) : (
                    <Box
                         sx={{
                              width: '100%',
                              paddingX: (theme) => theme.spacing(4),
                         }}>
                         <Carousel
                              arrow={true}
                              children={allProperties.map((el) => (
                                   <HighlightComponent
                                        key={el.index}
                                        index={el.index}
                                        name={el.name}
                                        location={el.location}
                                        description={el.description}
                                        price={el.price}
                                        rating={el.rating}
                                        liked={el.liked}
                                        img={el.img}
                                        label={el.label}
                                   />
                              ))}
                         />
                    </Box>
               )}
               <ButtonCustom buttonName={data.buttonName} />
          </ContainerSectionHome>
     );
}
