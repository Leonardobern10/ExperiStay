import { Box, Stack } from '@mui/material';
import type { ReactElement } from 'react';
import type { HeaderProps } from '../../types/HeaderProps';
import NavItem from './NavItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavList from '../ui/NavList';
import ButtonCustom from '../ButtonWithIcon';

export default function HeaderDesktop({
     refLogo,
     refNav,
     refButton,
     headerItemsNav,
}: HeaderProps): ReactElement {
     return (
          <Stack
               direction="row"
               width="100%"
          >
               <Box
                    ref={refLogo}
                    sx={{ width: 'fit-content' }}
               >
                    ExperiStay
               </Box>
               <Box
                    ref={refNav}
                    component="nav"
               >
                    <NavList>
                         {headerItemsNav.map((el) => (
                              <NavItem
                                   key={el.index}
                                   nameItem={el.nameItem}
                              />
                         ))}
                    </NavList>
               </Box>
               <ButtonCustom
                    main={true}
                    ref={refButton}
                    buttonName="Anuncie seu imóvel"
                    buttonIcon={AccountCircleIcon}
               />
          </Stack>
     );
}
