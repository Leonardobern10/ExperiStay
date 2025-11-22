import { Grid, useTheme, Typography, CircularProgress } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { containerPropertiesSx } from './ContainerProperties.styles';
import type { PropertyType } from '../types/HighlightType';
import HighlightComponent from './home/highlights/HighlightComponent';
import { useProperties } from '@hooks/useEmployees';

export default function ContainerProperties({
    quantity,
}: {
    quantity?: number;
}): ReactElement {
    const theme = useTheme();
    const { properties, loading, error } = useProperties(quantity);
    const propertiesStyles = useMemo(
        () => containerPropertiesSx(theme, loading),
        [theme],
    );
    return (
        <Grid sx={propertiesStyles}>
            {loading && <CircularProgress />}
            {error && <Typography>Erro ao obter dados: {error}</Typography>}
            {!loading &&
                !error &&
                properties?.map((el: PropertyType) => (
                    <HighlightComponent
                        _id={el._id}
                        key={el._id}
                        index={el.index}
                        name={el.name}
                        location={el.location}
                        description={el.description}
                        price={el.price}
                        rating={el.rating}
                        liked={el.liked}
                        img={el.img}
                        label={el.label}
                    />
                ))}
        </Grid>
    );
}
