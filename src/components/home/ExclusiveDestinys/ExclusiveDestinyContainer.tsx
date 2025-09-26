import {
    Box,
    Stack,
    Typography,
    useTheme,
    type SxProps,
    type Theme,
} from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import useWidth from '@hooks/useWidth';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import Carousel from '@components/Carousel';
import MainTitle from '@components/MainTitle';
import ExclusiveComponent from './ExclusiveComponent';
import { exclusiveDestines } from '@data/exclusiveDestinyData';

type StyleCustom = {
    boxTitle: SxProps<Theme>;
    boxDestinesDesktop: SxProps<Theme>;
    boxDestinesMobile: SxProps<Theme>;
};

const styleCustom = (theme: Theme): StyleCustom => ({
    boxTitle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxDestinesDesktop: {
        columnGap: theme.spacing(2),
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    boxDestinesMobile: {
        width: '100%',
        paddingX: theme.spacing(4),
    },
});

export default function ExclusiveDestinyContainer(props: {
    className: string;
}): ReactElement {
    const currentWidth = useWidth('md');
    const theme = useTheme();
    const style = useMemo(() => styleCustom(theme), [theme]);
    return (
        <ContainerSectionHome className={props.className}>
            <Box sx={style.boxTitle}>
                <MainTitle
                    align="center"
                    string="Destinos exclusivos"
                />
                {/** Subtitulo da seção */}
                <Typography variant="subtitle2">
                    Explore as maravilhas naturais e culturais do Brasil através
                    de acomodações únicas.
                </Typography>
            </Box>
            {currentWidth ? (
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={style.boxDestinesDesktop}>
                    {exclusiveDestines.map((el) => (
                        <ExclusiveComponent
                            key={el.index}
                            name={el.name}
                            available={el.available}
                            img={el.img}
                        />
                    ))}
                </Stack>
            ) : (
                <Box sx={style.boxDestinesMobile}>
                    <Carousel
                        children={exclusiveDestines.map((el) => (
                            <ExclusiveComponent
                                key={el.index}
                                name={el.name}
                                available={el.available}
                                img={el.img}
                            />
                        ))}
                    />
                </Box>
            )}
        </ContainerSectionHome>
    );
}
