import Logo from '@components/Logo';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import { footerContainerData, footerNavList } from '@data/footerData';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import IconSocial from '../../IconSocial';
import FooterNavList from './FooterNavList';
import { footerContainerSx } from './FooterContainer.styles';

export default function FooterContainer(): ReactElement {
    // Importação do theme global
    const theme = useTheme();
    // utilização dos estilos sx sem que disparem outra renderização
    const styleSx = useMemo(() => footerContainerSx(theme), [theme]);

    return (
        <ContainerSectionHome sx={styleSx.sectionHomeSx}>
            <Box sx={styleSx.containerFooterSx}>
                <Box sx={styleSx.containerMainSx}>
                    <Logo />
                    <Typography sx={styleSx.typographySx}>
                        {footerContainerData.description}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={4}>
                        {footerContainerData.socials.map((el, index) => (
                            <IconSocial
                                key={index}
                                icon={el}
                            />
                        ))}
                    </Stack>
                </Box>
                <Box sx={styleSx.containerNavSx}>
                    {footerNavList.map((el) => (
                        <FooterNavList
                            key={el.index}
                            title={el.title}
                            items={el.items}
                        />
                    ))}
                </Box>
            </Box>
            <Stack sx={styleSx.containerRightsSx}>
                <Typography variant="body2">
                    2025 ExperiStay. Todos os direitos reservados.
                </Typography>
                <Stack
                    direction="row"
                    spacing={4}>
                    <Typography variant="body2">Termos de uso</Typography>
                    <Typography variant="body2">
                        Política de privacidade
                    </Typography>
                    <Typography variant="body2">Cookies</Typography>
                </Stack>
            </Stack>
        </ContainerSectionHome>
    );
}
