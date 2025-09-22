import { Box, Typography, type Theme } from '@mui/material';
import type { ReactElement } from 'react';
import type { AdvantageAdProps } from '../../../types/AdvantagesAdProps';

export default function AdvantagePropertiesAdComponent(
     data: AdvantageAdProps,
): ReactElement {
     return (
          <Box sx={boxSx}>
               <Typography variant="h3">{data.title}</Typography>
               <Typography
                    variant="body2"
                    sx={descriptionSx}>
                    {data.description}
               </Typography>
          </Box>
     );
}

// Contém as propriedades customizadas do Box
const boxSx = (theme: Theme) => ({
     display: 'flex',
     alignItems: 'center',
     flexDirection: 'column',
     paddingY: theme.spacing(10),
});

// Contém as propriedades customizadas do Typography responsável pela descrição
const descriptionSx = () => ({
     width: '80%',
     textAlign: 'center',
     opacity: '70%',
     fontWeight: 200,
});
