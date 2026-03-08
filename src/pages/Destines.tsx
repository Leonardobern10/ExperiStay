import ContainerProperties from '@components/ContainerProperties';
import ContainerMainDestination from '@components/home/Presentation/MainContainerDestination';
import { PageContainer } from '@components/ui/PageContainer';
import { sortOptions } from '@data/allSelectItemsData';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { useMemo, useState, type ReactElement } from 'react';
import { destinesSx } from './Destines.styles';
import InputSelect from '@components/input/InputSelect';
import { useProperties } from '@hooks/useProperties';

const inputOptions = {
    onChange: () => console.log('Ola'),
    label: 'Organizar por',
    allItems: sortOptions,
    value: null,
};

const boxSx = {
    sx: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

export default function Destines(): ReactElement {
    const theme = useTheme();
    const destinesStyles = useMemo(() => destinesSx(theme), [theme]);
    const [currentPage, setCurrentPage] = useState(1);
    const { properties, total, loading, error, totalPages } = useProperties(
        12,
        currentPage,
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <PageContainer>
            <Box sx={destinesStyles.destinesMainContainerSx}>
                <Typography variant="h2">Todos os imóveis</Typography>
                <Typography variant="subtitle2">
                    Encontre a acomodação perfeita para sua próxima experiência
                    única no Brasil
                </Typography>
            </Box>
            <Box {...boxSx}>
                <ContainerMainDestination />
            </Box>
            <Box sx={destinesStyles.destinesPropertiesContainerSx}>
                <Stack sx={destinesStyles.destinesStack}>
                    <Typography variant="body1">
                        {total} imóveis disponíveis
                    </Typography>
                    <InputSelect {...inputOptions} />
                </Stack>
                {error && <Typography>Erro ao obter dados: {error}</Typography>}
                {!loading && !error && (
                    <ContainerProperties
                        properties={properties}
                        loading={loading}
                    />
                )}
                <Stack
                    direction="row"
                    spacing={5}
                    margin={10}>
                    {totalPages &&
                        [...Array(totalPages)].map((_, i) => (
                            <Button
                                sx={{ padding: 1, width: 'fit-content' }}
                                variant={
                                    currentPage === i + 1
                                        ? 'contained'
                                        : 'outlined'
                                }
                                key={i}
                                onClick={() => handlePageChange(i + 1)}>
                                {i + 1}
                            </Button>
                        ))}
                </Stack>
            </Box>
        </PageContainer>
    );
}
