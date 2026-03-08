import { Grid, useTheme, Typography } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { containerPropertiesSx } from './ContainerProperties.styles';
import type { PropertyType } from '../types/PropertyType';
import HighlightComponent from './home/highlights/HighlightComponent';
import SkeletonDestine from './SkeletonDestines';

const highlightOption = (el: PropertyType) => ({
    _id: el._id,
    key: el._id,
    index: el._id,
    name: el.name,
    location: el.location,
    description: el.description,
    price: el.price,
    rating: el.rating,
    liked: el.liked,
    img: el.img,
    label: el.label,
});

const nullPropertiesMsg = 'Nenhum registo encontrado!';

const SkeletonsGroup = () =>
    [...Array(9)].map((_, index) => <SkeletonDestine key={index} />);
const PropertiesGroup = ({ properties }: { properties: PropertyType[] }) =>
    properties.map((el: PropertyType) => (
        <HighlightComponent {...highlightOption(el)} />
    ));

export default function ContainerProperties({
    properties,
    loading,
}: {
    properties: PropertyType[] | null;
    loading: boolean;
}): ReactElement {
    const theme = useTheme();
    const propertiesStyles = useMemo(
        () => containerPropertiesSx(theme),
        [theme],
    );

    return (
        <Grid sx={propertiesStyles}>
            {loading ? (
                <SkeletonsGroup />
            ) : properties ? (
                <PropertiesGroup properties={properties} />
            ) : (
                <Typography>{nullPropertiesMsg}</Typography>
            )}
        </Grid>
    );
}
