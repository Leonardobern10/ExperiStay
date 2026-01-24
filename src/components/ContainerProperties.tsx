import { Grid, useTheme, Typography } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { containerPropertiesSx } from './ContainerProperties.styles';
import type { PropertyType } from '../types/PropertyType';
import HighlightComponent from './home/highlights/HighlightComponent';

export default function ContainerProperties({
    properties,
    loading,
}: {
    properties: PropertyType[] | null;
    loading: boolean;
}): ReactElement {
    const theme = useTheme();
    const propertiesStyles = useMemo(
        () => containerPropertiesSx(theme, loading),
        [theme],
    );
    return (
        <Grid sx={propertiesStyles}>
            {properties ? (
                properties.map((el: PropertyType) => (
                    <HighlightComponent
                        _id={el._id}
                        key={el._id}
                        index={el._id}
                        name={el.name}
                        location={el.location}
                        description={el.description}
                        price={el.price}
                        rating={el.rating}
                        liked={el.liked}
                        img={el.img}
                        label={el.label}
                    />
                ))
            ) : (
                <Typography>Nenhum registo encontrado!</Typography>
            )}
        </Grid>
    );
}
