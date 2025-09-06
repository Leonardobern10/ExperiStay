import { Drawer, Stack } from '@mui/material';
import { useState, type ReactElement } from 'react';
import type { HeaderProps } from '../../types/HeaderProps';
import NavItem from './NavItem';
import Logo from '../Logo';
import NavList from '../ui/NavList';
import Button from '../ButtonWithIcon';
import MenuIcon from '@mui/icons-material/Menu';

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
               <Button
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
                              <NavItem
                                   key={el.index}
                                   nameItem={el.nameItem}
                              />
                         ))}
                    </NavList>
               </Drawer>
          </Stack>
     );
}
