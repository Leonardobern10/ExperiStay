import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import MainTitle from '../Presentation/MainTitle';

export default function ExclusiveDestinyContainer(props: {
     className: string;
}): ReactElement {
     return (
          <Box
               className={props.className}
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
               }}
          >
               <MainTitle string="Destinos exclusivos" />
               <Typography variant="subtitle2">
                    Explore as maravilhas naturais e culturais do Brasil através
                    de acomodações únicas.
               </Typography>
               <Stack>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
               </Stack>
          </Box>
     );
}
