import { Drawer, ListItem, Stack } from '@mui/material';
import { useState, type ReactElement } from 'react';
import type { HeaderProps } from '../../types/HeaderProps';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '@components/Logo';
import ButtonCustom from '@components/ButtonCustom';
import NavList from '@components/ui/NavList';

export default function HeaderMobile({
     refLogo,
     refButton,
     headerItemsNav,
}: HeaderProps): ReactElement {
     const [open, setOpen] = useState<boolean>(false);
     const toggleMenu = (isOpen: boolean) => setOpen(isOpen);

     return (
          <Stack
               direction="row"
               justifyContent="space-between"
               alignItems="center"
               height="100%"
               sx={{ width: '100vw', paddingY: (theme) => theme.spacing(4) }}>
               <Logo ref={refLogo} />
               <ButtonCustom
                    ref={refButton}
                    onClick={() => toggleMenu(true)}
                    buttonName="Menu"
                    buttonIcon={MenuIcon}
               />
               <Drawer
                    open={open}
                    onClose={() => toggleMenu(false)}>
                    <NavList>
                         {headerItemsNav.map((el) => (
                              <ListItem key={el.index}>{el.nameItem}</ListItem>
                         ))}
                    </NavList>
               </Drawer>
          </Stack>
     );
}
