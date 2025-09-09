import Logo from '@components/Logo';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import { footerContainerData, footerNavList } from '@data/footerData';
import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import IconSocial from './IconSocial';
import FooterNavList from './FooterNavList';

export default function FooterContainer(): ReactElement {
     return (
          <ContainerSectionHome
               sx={(theme) => ({
                    height: { xs: '100%', md: '60vh' },
                    backgroundColor: theme.palette.secondary.main,
                    rowGap: {
                         xs: theme.spacing(1),
                         md: theme.spacing(4),
                    },
               })}>
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
                         sx={(theme) => ({
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              alignItems: {
                                   xs: 'center',
                                   md: 'flex-start',
                              },
                              width: { xs: '100%', md: '30%' },
                              rowGap: theme.spacing(4),
                         })}>
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
                         sx={(theme) => ({
                              display: 'flex',
                              flexDirection: 'row',
                              paddingY: theme.spacing(4),
                              paddingX: theme.spacing(8),
                              columnGap: theme.spacing(2),
                         })}>
                         {footerNavList.map((el) => (
                              <FooterNavList
                                   key={el.index}
                                   title={el.title}
                                   items={el.items}
                              />
                         ))}
                    </Box>
               </Box>
               <Stack
                    sx={(theme) => ({
                         flexDirection: {
                              xs: 'column-reverse',
                              md: 'row',
                         },
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         height: '20%',
                         width: '100%',
                         paddingX: {
                              xs: theme.spacing(0),
                              md: theme.spacing(8),
                         },
                    })}>
                    <Typography variant="body2">
                         2025 ExperiStay. Todos os direitos reservados.
                    </Typography>
                    <Stack
                         direction="row"
                         spacing={4}>
                         <Typography variant="body2">Termos de uso</Typography>
                         <Typography variant="body2">
                              Política de privacidade
                         </Typography>
                         <Typography variant="body2">Cookies</Typography>
                    </Stack>
               </Stack>
          </ContainerSectionHome>
     );
}
