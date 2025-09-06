import { Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function BannerTitle(props: { title: string }): ReactElement {
     return (
          <Typography
               color="primary"
               variant="h1"
               sx={{
                    textShadow: '2px 2px 2px black',
               }}>
               {props.title}
          </Typography>
     );
}
