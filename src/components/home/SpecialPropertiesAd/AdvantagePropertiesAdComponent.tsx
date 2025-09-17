import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { AdvantageAdProps } from '../../../types/AdvantagesAdProps';

export default function AdvantagePropertiesAdComponent(
     data: AdvantageAdProps,
): ReactElement {
     return (
          <Box
               sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingY: theme.spacing(10),
                    [theme.breakpoints.up('md')]: {},
               })}>
               <Typography variant="h3">{data.title}</Typography>
               <Typography
                    variant="body2"
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
