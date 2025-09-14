import { Box, Link, ListItem, Stack } from '@mui/material';
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
               sx={(theme) => ({
                    height: '100%',
                    width: '100%',
                    justifyContent: 'space-between',
                    paddingY: theme.spacing(1),
                    paddingX: theme.spacing(16),
               })}>
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
                    sx={(theme) => ({
                         display: 'flex',
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         columnGap: theme.spacing(4),
                    })}>
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
