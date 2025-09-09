import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import MainTitle from '@components/MainTitle';
import { experienceComponents } from '@data/unbelivableExperiences';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import { BoxGridCustomUI } from '@components/ui/BoxGridCustomUI';
import useWidth from '@hooks/useWidth';
import Carousel from '@components/Carousel';
import ExperienceComponent from './ExperienceComponent';

export default function UnbelivableExperiences(props: {
     className: string;
}): ReactElement {
     const currentWidth = useWidth('md');

     return (
          <ContainerSectionHome className={props.className}>
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'space-evenly',
                         alignItems: 'center',
                    }}>
                    <MainTitle
                         align="center"
                         string="Experiências incríveis"
                    />
                    {/** Subtitulo da seção */}
                    <Typography variant="subtitle2">
                         Cada imóvel oference acesso à experiências únicas que
                         conectam você aos tesouros escondidos do Brasil
                    </Typography>
               </Box>
               {currentWidth ? (
                    <BoxGridCustomUI>
                         {experienceComponents.map((el) => (
                              <ExperienceComponent
                                   key={el.index}
                                   title={el.title}
                                   description={el.description}
                                   icon={el.icon}
                                   alert={el.alert}
                              />
                         ))}
                    </BoxGridCustomUI>
               ) : (
                    <Box
                         sx={(theme) => ({
                              width: '100%',
                              height: '100%',
                              paddingX: theme.spacing(4),
                         })}>
                         <Carousel
                              arrow={true}
                              children={experienceComponents.map((el) => (
                                   <ExperienceComponent
                                        key={el.index}
                                        title={el.title}
                                        description={el.description}
                                        icon={el.icon}
                                        alert={el.alert}
                                   />
                              ))}
                         />
                    </Box>
               )}
          </ContainerSectionHome>
     );
}
