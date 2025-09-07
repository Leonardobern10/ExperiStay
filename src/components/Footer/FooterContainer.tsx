import Logo from '@components/Logo';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import { footerContainerData, footerNavList } from '@data/footerData';
import { Box, Divider, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import IconSocial from './IconSocial';
import FooterNavList from './FooterNavList';

export default function FooterContainer(): ReactElement {
     return (
          <ContainerSectionHome
               sx={{
                    height: { xs: '100%', md: '60vh' },
                    width: '100vw',
                    backgroundColor: (theme) => theme.palette.secondary.main,
               }}>
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: { xs: 'column', md: 'row' },
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         height: '70%',
                         width: '100%',
                         padding: (theme) => theme.spacing(8),
                    }}>
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: {
                                   xs: 'column',
                                   md: 'row',
                              },
                              justifyContent: 'space-between',
                              alignItems: {
                                   xs: 'center',
                                   md: 'flex-start',
                              },
                              width: { xs: '100%', md: '30%' },
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
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              paddingY: (theme) => theme.spacing(4),
                              columnGap: (theme) => theme.spacing(2),
                         }}>
                         {footerNavList.map((el) => (
                              <FooterNavList
                                   title={el.title}
                                   items={el.items}
                              />
                         ))}
                    </Box>
               </Box>
               <Divider
                    sx={{
                         backgroundColor: (theme) =>
                              theme.palette.primary.contrastText,
                    }}
                    variant="middle"
               />
               <Stack
                    spacing={4}
                    sx={{
                         flexDirection: {
                              xs: 'column-reverse',
                              md: 'row',
                         },
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         height: '20%',
                         width: '100%',
                         paddingX: (theme) => theme.spacing(8),
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
          </ContainerSectionHome>
     );
}
