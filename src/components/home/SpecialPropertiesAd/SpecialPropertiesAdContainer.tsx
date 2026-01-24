import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import { advantages, dataContainer } from '@data/specialPropertiesAdData';
import AdvantagePropertiesAdComponent from './AdvantagePropertiesAdComponent';
import MainTitle from '@components/MainTitle';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import ButtonCustom from '@components/ButtonCustom';
import { specialPropertiesSx } from './specialProperties.styles';

export default function SpecialPropertiesAdContainer(props: {
    className: string;
}): ReactElement {
    const theme = useTheme();
    const specialPropertiesStyle = useMemo(
        () => specialPropertiesSx(theme),
        [theme],
    );
    return (
        <ContainerSectionHome
            className={props.className}
            sx={specialPropertiesStyle.sectionSx}>
            <Box sx={specialPropertiesStyle.boxTitleSx}>
                <MainTitle
                    string={dataContainer.title + '?'}
                    align="center"
                />
                {/** Subtitulo da seção */}
                <Typography variant="subtitle2">
                    {dataContainer.subtitle}
                </Typography>
            </Box>
            <Stack
                spacing={4}
                sx={specialPropertiesStyle.propertySx}>
                {advantages.map((el) => (
                    <AdvantagePropertiesAdComponent
                        key={el.index}
                        icon={el.icon}
                        title={el.title}
                        description={el.description}
                    />
                ))}
            </Stack>
            <Stack sx={specialPropertiesStyle.stackButtonSx}>
                <ButtonCustom
                    main
                    buttonName={dataContainer.buttonRegister}
                />
                <ButtonCustom buttonName={dataContainer.buttonMore} />
            </Stack>
        </ContainerSectionHome>
    );
}
