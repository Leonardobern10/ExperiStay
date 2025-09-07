import { Box, Grid } from '@mui/material';
import { useRef, type ReactElement } from 'react';
import backgroundImage from '@images/downloadedImage.png';
import MainText from './MainText';
import { mainTexts } from '@data/mainTexts';
import { useMainContentAnimation } from '@hooks/useAnimation';
import GridMainText from './GridMainText';
import ContainerMainDestination from './MainContainerDestination';
import useWidth from '@hooks/useWidth';

export default function PresentationContainer(props: {
     className?: string;
}): ReactElement {
     const container = useRef(null);
     const mainText = useRef(null);
     useMainContentAnimation(container, mainText);

     const currentWidth = useWidth('md');

     return (
          <Box
               className={props.className}
               ref={container}
               sx={{
                    width: '100%',
                    height: '100vh',
                    marginTop: 5,
                    paddingY: 8,
               }}>
               <Box
                    sx={{
                         backgroundImage: `url(${backgroundImage})`,
                         backgroundSize: 'cover',
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                         height: '100%',
                         width: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         rowGap: { xs: 4, md: 8 },
                         padding: { xs: 4, md: 4 },
                    }}>
                    <GridMainText
                         children={
                              <MainText
                                   ref={mainText}
                                   title={mainTexts.title}
                                   desc={mainTexts.desc}
                              />
                         }
                    />
                    {currentWidth && (
                         <Grid
                              sx={{
                                   width: '80%',
                                   height: {
                                        xs: '70%',
                                        md: 'fit-content',
                                   },
                                   display: 'flex',
                                   flexDirection: 'row',
                                   justifyContent: 'space-between',
                                   alignItems: 'center',
                                   padding: 1,
                                   backgroundColor: (theme) =>
                                        theme.palette.primary.dark,
                                   borderRadius: (theme) =>
                                        theme.shape.borderRadius,
                              }}>
                              <ContainerMainDestination />
                         </Grid>
                    )}
               </Box>
          </Box>
     );
}
