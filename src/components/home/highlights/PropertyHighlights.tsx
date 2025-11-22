import { Box, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import type { PropertyHighlightsType } from '../../../types/PropertyHighlightsType';
import MainTitle from '@components/MainTitle';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import useWidth from '@hooks/useWidth';
import Carousel from '@components/Carousel';
import ButtonCustom from '@components/ButtonCustom';
import ContainerProperties from '@components/ContainerProperties';
import { propertyHighlightsSx } from './propertyHighlights.styles';
import HighlightComponent from './HighlightComponent';
import type { PropertyType } from '../../../types/HighlightType';
import { highlightsData } from '@data/propertyHighlightsData';
import { useProperties } from '@hooks/useProperties';

export default function PropertyHighlights({
    className,
}: {
    className: string;
}): ReactElement {
    const data: PropertyHighlightsType = highlightsData;
    const currentWidth = useWidth('md');
    const theme = useTheme();
    const propertyHighlightStyle = useMemo(
        () => propertyHighlightsSx(theme),
        [theme],
    );
    const { properties, loading } = useProperties();
    const top3: PropertyType[] = properties?.slice(0, 3)!;

    return (
        <ContainerSectionHome className={className}>
            <Box sx={propertyHighlightStyle.boxTitleSx}>
                <MainTitle
                    align="center"
                    string={data.title}
                />
                {/** Subtitulo da seção */}
                <Typography variant="subtitle2">{data.subtitle}</Typography>
            </Box>
            {currentWidth ? (
                <ContainerProperties
                    loading={loading}
                    properties={top3}
                />
            ) : (
                <Box sx={propertyHighlightStyle.boxMobileSx}>
                    <Carousel
                        arrow={true}
                        children={top3!.map((el: PropertyType) => (
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
                    />
                </Box>
            )}
            <ButtonCustom buttonName={data.buttonName} />
        </ContainerSectionHome>
    );
}
