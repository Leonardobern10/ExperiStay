import { Box, Paper, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { ExperienceComponentsProps } from '../../types/ExperienceComponentProps';
import InfoIcon from '@mui/icons-material/Info';

export default function ExperienceComponent(
     data: ExperienceComponentsProps,
): ReactElement {
     const Icon = data.icon;

     return (
          <Paper
               variant="elevation"
               sx={{
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    padding: (theme) => theme.spacing(8),
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-start',
                    rowGap: (theme) => theme.spacing(4),
                    borderRadius: (theme) => theme.shape.borderRadius,
               }}>
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'row',
                         justifyContent: 'center',
                         alignItems: 'center',
                         columnGap: (theme) => theme.spacing(4),
                    }}>
                    <Icon />
                    <Typography variant="h4">{data.title}</Typography>
               </Box>
               <Typography color="textSecondary">{data.description}</Typography>
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'row',
                         alignItems: 'center',
                         columnGap: (theme) => theme.spacing(),
                    }}>
                    <InfoIcon />
                    <Typography color="textSecondary">{data.alert}</Typography>
               </Box>
          </Paper>
     );
}
