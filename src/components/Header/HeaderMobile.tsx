import { Drawer, ListItem, Stack, useTheme, type Theme } from '@mui/material';
import { useMemo, useState, type ReactElement } from 'react';
import type { HeaderProps } from '../../types/HeaderProps';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '@components/Logo';
import ButtonCustom from '@components/ButtonCustom';
import NavList from '@components/ui/NavList';
import { headerMobileSx } from './header.styles';

export default function HeaderMobile({
    refLogo,
    refButton,
    headerItemsNav,
}: HeaderProps): ReactElement {
    const [open, setOpen] = useState<boolean>(false);
    const toggleMenu = (isOpen: boolean) => setOpen(isOpen);
    const theme = useTheme();
    const mobileStyle = useMemo(() => headerMobileSx(theme), [theme]);

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={mobileStyle.stackSx}>
            <Logo ref={refLogo} />
            <ButtonCustom
                ref={refButton}
                onClick={() => toggleMenu(true)}
                buttonName="Menu"
                buttonIcon={MenuIcon}
            />
            <Drawer
                anchor="top"
                open={open}
                onClose={() => toggleMenu(false)}>
                <NavList sx={mobileStyle.navSx}>
                    {headerItemsNav.map((el) => (
                        <ListItem key={el.index}>{el.nameItem}</ListItem>
                    ))}
                </NavList>
            </Drawer>
        </Stack>
    );
}
