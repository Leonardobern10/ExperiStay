import { Box, Link, ListItem, Stack, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import type { HeaderProps } from '../../types/HeaderProps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavList from '@components/ui/NavList';
import ButtonCustom from '@components/ButtonCustom';
import { headerDesktopSx } from './header.styles';

export default function HeaderDesktop({
    refLogo,
    refNav,
    refButton,
    headerItemsNav,
}: HeaderProps): ReactElement {
    const theme = useTheme();
    const desktopStyle = useMemo(() => headerDesktopSx(theme), [theme]);
    return (
        <Stack
            direction="row"
            sx={desktopStyle.stackSx}>
            <Box
                ref={refLogo}
                sx={desktopStyle.logoSx}>
                ExperiStay
            </Box>
            <Box
                ref={refNav}
                component="nav">
                <NavList>
                    {headerItemsNav.map((el) => (
                        <ListItem key={el.index}>
                            <Link
                                underline="none"
                                color="textPrimary"
                                href={el.href}>
                                {el.nameItem}
                            </Link>
                        </ListItem>
                    ))}
                </NavList>
            </Box>
            <Box
                ref={refButton}
                sx={desktopStyle.boxSx}>
                <ButtonCustom
                    buttonName="Login"
                    buttonIcon={AccountCircleIcon}
                />
                <ButtonCustom
                    main={true}
                    buttonName="Anuncie seu imóvel"
                />
            </Box>
        </Stack>
    );
}
