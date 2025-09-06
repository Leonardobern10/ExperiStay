import { Box, Grid } from '@mui/material';
import { useRef, type ReactElement } from 'react';
import backgroundImage from '../../assets/images/downloadedImage_1.png';
import MainText from './MainText';
import { mainTexts } from '../../data/mainTexts';
import { useMainContentAnimation } from '../../hooks/useAnimation';
import GridMainText from './GridMainText';
import ContainerMainDestination from './MainContainerDestination';

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
               sx={{
                    width: '100%',
                    height: '100%',
                    marginTop: (theme) => theme.spacing(5),
                    paddingY: (theme) => theme.spacing(8),
               }}>
               <Box
                    sx={{
                         backgroundImage: `url(${backgroundImage})`,
                         backgroundSize: 'cover',
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center',
                         height: '90vh',
                         width: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'center',
                         alignItems: 'center',
                         rowGap: (theme) => theme.spacing(5),
                         padding: { xs: 1, md: (theme) => theme.spacing(4) },
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
                    <Grid
                         sx={{
                              width: '80%',
                              height: '15%',
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: (theme) => theme.spacing(1),
                              backgroundColor: (theme) =>
                                   theme.palette.primary.dark,
                              borderRadius: (theme) => theme.shape.borderRadius,
                         }}>
                         <ContainerMainDestination />
                    </Grid>
               </Box>
          </Box>
     );
}
