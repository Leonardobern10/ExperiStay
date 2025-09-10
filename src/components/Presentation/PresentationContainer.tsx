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

     return (
          <Box
               className={props.className}
               ref={container}
               sx={(theme) => ({
                    width: '100%',
                    height: '100vh',
                    marginTop: theme.spacing(5),
                    paddingY: theme.spacing(8),
               })}>
               <Box
                    sx={(theme) => ({
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
                         rowGap: {
                              xs: theme.spacing(4),
                              md: theme.spacing(8),
                         },
                         padding: {
                              xs: theme.spacing(4),
                              md: theme.spacing(4),
                         },
                    })}>
                    <GridMainText
                         children={
                              <MainText
                                   ref={mainText}
                                   title={mainTexts.title}
                                   desc={mainTexts.desc}
                              />
                         }
                    />
                    <Grid
                         sx={(theme) => ({
                              width: '80%',
                              height: {
                                   xs: '70%',
                                   md: 'fit-content',
                              },
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: theme.spacing(1),
                              backgroundColor: theme.palette.primary.dark,
                              borderRadius: theme.shape.borderRadius,
                              border: 2,
                              borderColor: theme.palette.secondary.main,
                         })}>
                         <ContainerMainDestination />
                    </Grid>
               </Box>
          </Box>
     );
}
