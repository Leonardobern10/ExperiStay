import { Grid, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { containerPropertiesSx } from './ContainerProperties.styles';
import type { HighlightType } from '../types/HighlightType';
import { allProperties } from '@data/nhame';
import HighlightComponent from './home/highlights/HighlightComponent';

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
