import { Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function PriceHighlight(props: { value: number }): ReactElement {
     return (
          <Typography variant="h3">
               R$ {props.value}
               <Typography component="span">/noite</Typography>
          </Typography>
     );
}
