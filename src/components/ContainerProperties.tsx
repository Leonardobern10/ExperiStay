import { Grid, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { containerPropertiesSx } from './ContainerProperties.styles';
import { allProperties } from '@data/propertyHighlightsData';
import HighlightComponent from './home/Highlights/HighlightComponent';
import type { HighlightType } from '../types/HighlightType';

export default function ContainerProperties(): ReactElement {
    const theme = useTheme();
    const propertiesStyles = useMemo(
        () => containerPropertiesSx(theme),
        [theme],
    );
    return (
        <Grid sx={propertiesStyles}>
            {allProperties.map((el: HighlightType) => (
                <HighlightComponent
                    key={el.index}
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
