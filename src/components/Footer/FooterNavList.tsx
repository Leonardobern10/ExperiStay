import { Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { FooterNavListProps } from '../../types/FooterNavListProps';

export default function FooterNavList(
     footerData: FooterNavListProps,
): ReactElement {
     return (
          <Stack
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
               }}>
               <Typography
                    sx={{
                         fontWeight: 500,
                         paddingBottom: (theme) => theme.spacing(3),
                    }}>
                    {footerData.title}
               </Typography>
               {footerData.items.map((el, index) => (
                    <Typography
                         key={index}
                         sx={{
                              opacity: '70%',
                              fontWeight: 300,
                              paddingY: (theme) => theme.spacing(1),
                         }}>
                         {el}
                    </Typography>
               ))}
          </Stack>
     );
}
