import ContainerProperties from '@components/ContainerProperties';
import ContainerMainDestination from '@components/home/Presentation/MainContainerDestination';

import { PageContainer } from '@components/ui/PageContainer';
import { sortOptions } from '@data/allSelectItemsData';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { destinesSx } from './Destines.styles';
import InputSelect from '@components/input/InputSelect';

export default function Destines(): ReactElement {
    const theme = useTheme();
    const destinesStyles = useMemo(() => destinesSx(theme), [theme]);
    return (
        <PageContainer>
            <Box sx={destinesStyles.destinesMainContainerSx}>
                <Typography variant="h2">Todos os imóveis</Typography>
                <Typography variant="subtitle2">
                    Encontre a acomodação perfeita para sua próxima experiência
                    única no Brasil
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <ContainerMainDestination />
            </Box>
            <Box sx={destinesStyles.destinesPropertiesContainerSx}>
                <Stack sx={destinesStyles.destinesStack}>
                    <Typography variant="body1">
                        3 imóveis disponíveis
                    </Typography>
                    <InputSelect
                        onChange={() => console.log('Ola')}
                        label="Organizar por"
                        allItems={sortOptions}
                        value={null}
                    />
                </Stack>
                <ContainerProperties />
            </Box>
        </PageContainer>
    );
}
