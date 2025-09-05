import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { AdvantageAdProps } from '../../types/AdvantagesAdProps';

export default function AdvantagePropertiesAdComponent(
     data: AdvantageAdProps,
): ReactElement {
     return (
          <Box
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingY: (theme) => theme.spacing(10),
               }}>
               <Typography variant="h5">{data.title}</Typography>
               <Typography
                    sx={{
                         width: '70%',
                         textAlign: 'center',
                         opacity: '70%',
                         fontWeight: 200,
                    }}>
                    {data.description}
               </Typography>
          </Box>
     );
}
