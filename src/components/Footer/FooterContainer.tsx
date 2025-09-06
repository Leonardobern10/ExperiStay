import { Box, Divider, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import { footerContainerData, footerNavList } from '../../data/footerData';
import FooterNavList from './FooterNavList';
import Logo from '../Logo';
import IconSocial from './IconSocial';

export default function FooterContainer(): ReactElement {
     return (
          <Box
               sx={{
                    height: '50vh',
                    width: '100%',
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    padding: (theme) => theme.spacing(8),
               }}>
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         height: '80%',
                    }}>
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              width: '30%',
                              rowGap: (theme) => theme.spacing(4),
                         }}>
                         <Logo />
                         <Typography
                              sx={{
                                   opacity: '70%',
                                   fontWeight: 300,
                              }}>
                              {footerContainerData.description}
                         </Typography>
                         <Stack
                              direction="row"
                              spacing={4}>
                              {footerContainerData.socials.map((el) => (
                                   <IconSocial icon={el} />
                              ))}
                         </Stack>
                    </Box>
                    {footerNavList.map((el) => (
                         <FooterNavList
                              title={el.title}
                              items={el.items}
                         />
                    ))}
               </Box>
               <Divider
                    sx={{
                         backgroundColor: (theme) =>
                              theme.palette.primary.contrastText,
                    }}
                    variant="middle"
               />
               <Stack
                    direction="row"
                    spacing={4}
                    sx={{
                         alignItems: 'flex-end',
                         height: '20%',
                    }}>
                    <Typography>
                         2025 ExperiStay. Todos os direitos reservados.
                    </Typography>
                    <Stack
                         direction="row"
                         spacing={4}>
                         <Typography>Termos de uso</Typography>
                         <Typography>Política de privacidade</Typography>
                         <Typography>Cookies</Typography>
                    </Stack>
               </Stack>
          </Box>
     );
}
