import ContainerProperties from '@components/ContainerProperties';
import InputSelect from '@components/InputSelect';
import ContainerMainDestination from '@components/Presentation/MainContainerDestination';
import { PageContainer } from '@components/ui/PageContainer';
import { sortOptions } from '@data/allSelectItemsData';
import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function Destines(): ReactElement {
     return (
          <PageContainer>
               <Box
                    sx={(theme) => ({
                         paddingTop: theme.spacing(25),
                         display: 'flex',
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         width: '100%',
                         paddingX: theme.spacing(16),
                    })}>
                    <Typography variant="h2">Todos os imóveis</Typography>
                    <Typography variant="subtitle2">
                         Encontre a acomodação perfeita para sua próxima
                         experiência única no Brasil
                    </Typography>
               </Box>
               <Box>
                    <ContainerMainDestination />
               </Box>
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                    }}>
                    <Stack
                         direction="row"
                         width="90%">
                         <Typography variant="body1">
                              3 imóveis disponíveis
                         </Typography>
                         <InputSelect
                              onChange={() => console.log('Ola')}
                              label="Organizar por"
                              allItems={sortOptions}
                         />
                    </Stack>
                    <ContainerProperties />
               </Box>
          </PageContainer>
     );
}
