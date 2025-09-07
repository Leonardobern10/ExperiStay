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
               sx={{
                    height: '100%',
                    width: '100vw',
                    paddingY: 3,
                    marginY: 0.5,
               }}>
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
                    <NavList
                         sx={{
                              width: '50vw',
                         }}>
                         {headerItemsNav.map((el) => (
                              <ListItem key={el.index}>{el.nameItem}</ListItem>
                         ))}
                    </NavList>
               </Drawer>
          </Stack>
     );
}
