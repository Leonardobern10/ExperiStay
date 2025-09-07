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
                    rowGap: 4,
               }}>
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: { xs: 'column', md: 'row' },
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         height: '70%',
                         width: '100%',
                         padding: 8,
                    }}>
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              alignItems: {
                                   xs: 'center',
                                   md: 'flex-start',
                              },
                              width: { xs: '100%', md: '30%' },
                              rowGap: 4,
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
                              {footerContainerData.socials.map((el, index) => (
                                   <IconSocial
                                        key={index}
                                        icon={el}
                                   />
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
                                   key={el.index}
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
