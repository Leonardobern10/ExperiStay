import { Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function DescriptionHighlight(props: {
     description: string;
}): ReactElement {
     const limitString = (limit: number): string => {
          if (props.description.length > limit)
               return `${props.description.slice(0, limit)}...`;
          return props.description;
     };

     return <Typography variant="body1">{limitString(100)}</Typography>;
}
