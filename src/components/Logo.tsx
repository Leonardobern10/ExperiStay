import { Box } from '@mui/material';
import type { ReactElement, RefObject } from 'react';

export default function Logo(props: {
     ref?: RefObject<HTMLElement | null>;
}): ReactElement {
     return (
          <Box
               ref={props.ref}
               sx={{
                    width: 'fit-content',
                    fontWeight: 800,
                    fontSize: {
                         xs: '1.2rem',
                         md: '2rem',
                    },
                    paddingX: (theme) => theme.spacing(2),
                    color: (theme) => theme.palette.text.primary,
               }}>
               ExperiStay
          </Box>
     );
}
