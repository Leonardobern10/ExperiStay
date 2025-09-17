import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import type { HeadInfoPropertyProps } from '../../types/property/HeadInfoPropertyProps';
import HeadAcomodationItem from './HeadAcomodationItem';

export default function HeadInfoProperty({
     headTitle,
     headLocation,
     headAcomodations,
}: HeadInfoPropertyProps): ReactElement {
     return (
          <Box>
               <Typography variant="h2">{headTitle}</Typography>
               <Stack
                    direction="row"
                    justifyContent="flex-start"
                    spacing={2}>
                    <LocationOnIcon fontSize="inherit" />
                    <Typography variant="body1">{headLocation}</Typography>
               </Stack>
               <Stack
                    direction="row"
                    justifyContent="flex-start"
                    spacing={2}>
                    {headAcomodations.map((el) => (
                         <HeadAcomodationItem
                              acomodationIcon={el.acomodationIcon}
                              acomodationValue={el.acomodationValue}
                              key={el.acomodationIndex}
                         />
                    ))}
               </Stack>
          </Box>
     );
}
