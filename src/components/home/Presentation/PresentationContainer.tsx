import { Box, Grid, type Theme } from '@mui/material';
import { useRef, type ReactElement } from 'react';
import backgroundImage from '@images/downloadedImage.png';
import MainText from './MainText';
import { mainTexts } from '@data/mainTexts';
import { useMainContentAnimation } from '@hooks/useAnimation';
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
               sx={(theme) => ({
                    width: '100%',
                    height: '100vh',
                    paddingY: theme.spacing(8),
               })}>
               {/* Importação o objeto declarado no fim do arquivo */}
               <Box sx={boxImage}>
                    <GridMainText
                         children={
                              <MainText
                                   ref={mainText}
                                   title={mainTexts.title}
                                   desc={mainTexts.desc}
                              />
                         }
                    />
                    {/* Importação o objeto declarado no fim do arquivo */}
                    <Grid sx={gridCustom}>
                         <ContainerMainDestination />
                    </Grid>
               </Box>
          </Box>
     );
}

const boxImage = (theme: Theme) => ({
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
});

const gridCustom = (theme: Theme) => ({
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
});
