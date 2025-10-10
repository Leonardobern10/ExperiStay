import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { ratings } from '@data/ratingsData';
import ContainerSectionHome from '../../ui/ContainerSectionHome';
import useWidth from '@hooks/useWidth';
import Carousel from '@components/Carousel';
import MainTitle from '@components/MainTitle';
import { containerSx } from './ratings.styles';
import RatingComponent from '@components/rating/RatingComponent';

export default function RatingsContainer(props: {
    className: string;
}): ReactElement {
    const currentWidth = useWidth('md');
    const theme = useTheme();
    const containerStyles = useMemo(() => containerSx(theme), [theme]);

    return (
        <ContainerSectionHome className={props.className}>
            <Box sx={containerStyles.boxContainerSx}>
                <MainTitle
                    string="Experiências Reais"
                    align="center"
                />
                {/** Subtitulo da seção */}
                <Typography variant="subtitle2">
                    Veja o que nosso hóspedes dizem sobre nossas experiências
                    inesquecíveis
                </Typography>
            </Box>
            {currentWidth ? (
                <Stack
                    direction="row"
                    spacing={8}>
                    {ratings.map((el) => (
                        <RatingComponent
                            key={el.index}
                            rating={el.rating}
                            textRating={el.textRating}
                            name={el.name}
                            location={el.location}
                        />
                    ))}
                </Stack>
            ) : (
                <Box sx={containerStyles.boxMobile}>
                    <Carousel
                        children={ratings.map((el) => (
                            <RatingComponent
                                key={el.index}
                                rating={el.rating}
                                textRating={el.textRating}
                                name={el.name}
                                location={el.location}
                            />
                        ))}
                    />
                </Box>
            )}
        </ContainerSectionHome>
    );
}
