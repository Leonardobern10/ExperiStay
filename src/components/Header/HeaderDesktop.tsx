import { Box, ListItem, Stack } from '@mui/material';
import type { ReactElement } from 'react';
import type { HeaderProps } from '../../types/HeaderProps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavList from '@components/ui/NavList';
import ButtonCustom from '@components/ButtonCustom';

export default function HeaderDesktop({
     refLogo,
     refNav,
     refButton,
     headerItemsNav,
}: HeaderProps): ReactElement {
     return (
          <Stack
               direction="row"
               sx={{
                    width: '100%',
                    padding: (theme) => theme.spacing(7),
               }}>
               <Box
                    ref={refLogo}
                    sx={{ width: 'fit-content' }}>
                    ExperiStay
               </Box>
               <Box
                    ref={refNav}
                    component="nav">
                    <NavList>
                         {headerItemsNav.map((el) => (
                              <ListItem key={el.index}>{el.nameItem}</ListItem>
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
