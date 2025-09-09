import { Box, Paper, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { ExclusiveDestinyProps } from '../../types/ExcluviseDestinyProps';
import ImageCustom from '@components/ui/ImageCustom';

export default function ExclusiveComponent(
     data: ExclusiveDestinyProps,
): ReactElement {
     return (
          <Paper
               variant="elevation"
               sx={(theme) => ({
                    height: '25rem',
                    minWidth: '20rem',
                    position: 'relative',
                    borderRadius: theme.shape.borderRadius,
               })}>
               {/* Imagem */}
               <Box sx={{ position: 'relative', height: '70%' }}>
                    <ImageCustom
                         src={data.img}
                         alt={`Imagem do destino ${data.name}`}
                    />
               </Box>

               {/* Texto */}
               <Box
                    sx={(theme) => ({
                         position: 'absolute',
                         bottom: 0,
                         zIndex: 2, // acima do gradiente
                         color: 'white',
                         width: '100%',
                         padding: theme.spacing(4),
                    })}>
                    {/** Mudar para h3 */}
                    <Typography variant="h3">{data.name}</Typography>
                    <Typography
                         sx={(theme) => ({
                              color: theme.palette.text.secondary,
                         })}
                         variant="body1">
                         {data.available} propriedades disponíveis
                    </Typography>
               </Box>

               {/* Gradiente de fundo */}
               <Box
                    sx={{
                         position: 'absolute',
                         background:
                              'linear-gradient(180deg, rgba(42, 123, 155, 0) 0%, rgba(14, 12, 12, 0.77) 69%, rgba(0, 0, 0, 1) 100%)',
                         width: '100%',
                         height: '100%',
                         bottom: 0,
                         left: 0,
                         zIndex: 0, // fica atrás de tudo
                    }}
               />
          </Paper>
     );
}
