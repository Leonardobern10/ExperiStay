import { Box, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import MainTitle from '@components/MainTitle';
import { experienceComponents } from '@data/unbelivableExperiences';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import { BoxGridCustomUI } from '@components/ui/BoxGridCustomUI';
import useWidth from '@hooks/useWidth';
import Carousel from '@components/Carousel';
import ExperienceComponent from './ExperienceComponent';
import { unbelivableExperiencesSx } from './unbelivableExperiences.styles';

export default function UnbelivableExperiences({
    className,
}: {
    className: string;
}): ReactElement {
    const currentWidth = useWidth('md');
    const theme = useTheme();
    const unbelivableStyle = useMemo(
        () => unbelivableExperiencesSx(theme),
        [theme],
    );

    return (
        <ContainerSectionHome className={className}>
            <Box sx={unbelivableStyle.boxTitleSx}>
                <MainTitle
                    align="center"
                    string="Experiências incríveis"
                />
                {/** Subtitulo da seção */}
                <Typography variant="subtitle2">
                    Cada imóvel oference acesso à experiências únicas que
                    conectam você aos tesouros escondidos do Brasil
                </Typography>
            </Box>
            {currentWidth ? (
                <BoxGridCustomUI>
                    {experienceComponents.map((el) => (
                        <ExperienceComponent
                            key={el.index}
                            title={el.title}
                            description={el.description}
                            icon={el.icon}
                            alert={el.alert}
                        />
                    ))}
                </BoxGridCustomUI>
            ) : (
                <Box sx={unbelivableStyle.boxMobileSx}>
                    <Carousel
                        arrow={true}
                        children={experienceComponents.map((el) => (
                            <ExperienceComponent
                                key={el.index}
                                title={el.title}
                                description={el.description}
                                icon={el.icon}
                                alert={el.alert}
                            />
                        ))}
                    />
                </Box>
            )}
        </ContainerSectionHome>
    );
}
