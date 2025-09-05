import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import MainTitle from '../Presentation/MainTitle';
import { exclusiveDestines } from '../../data/exclusiveDestinyData';
import ExclusiveComponent from './ExclusiveComponent';

export default function ExclusiveDestinyContainer(props: {
     className: string;
}): ReactElement {
     return (
          <Box
               className={props.className}
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    rowGap: (theme) => theme.spacing(8),
               }}
          >
               <Box
                    sx={{
                         width: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'space-between',
                         alignItems: 'center',
                    }}
               >
                    <MainTitle
                         align="center"
                         string="Destinos exclusivos"
                    />
                    <Typography variant="subtitle2">
                         Explore as maravilhas naturais e culturais do Brasil
                         através de acomodações únicas.
                    </Typography>
               </Box>
               <Stack
                    direction="row"
                    sx={{
                         columnGap: (theme) => theme.spacing(8),
                         padding: (theme) => theme.spacing(8),
                    }}
               >
                    {exclusiveDestines.map((el) => (
                         <ExclusiveComponent
                              key={el.index}
                              name={el.name}
                              available={el.available}
                              img={el.img}
                         />
                    ))}
               </Stack>
          </Box>
     );
}
