import { allProperties } from '@data/propertyHighlightsData';
import { Grid } from '@mui/material';
import type { ReactElement } from 'react';
import HighlightComponent from './home/Highlights/HighlightComponent';

export default function ContainerProperties(): ReactElement {
    return (
        <Grid
            sx={(theme) => ({
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                columnGap: theme.spacing(6),
                paddingX: theme.spacing(20),
                paddingY: theme.spacing(10),
            })}>
            {allProperties.map((el) => (
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
