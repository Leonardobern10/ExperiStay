import { Paper, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function LabelProperty(props: {
     labelName: string;
     highlight?: boolean;
}): ReactElement {
     return (
          <Paper
               variant="outlined"
               sx={(theme) => ({
                    position: `${props.highlight ? 'absolute' : ''}`,
                    top: `${props.highlight ? '10px' : ''}`,
                    right: `${props.highlight ? '10px' : ''}`,
                    width: 'fit-content',
                    color: theme.palette.primary.main,
                    paddingX: theme.spacing(2),
                    borderRadius: theme.shape.borderRadius,
                    border: 1,
               })}>
               <Typography variant="caption"> {props.labelName} </Typography>
          </Paper>
     );
}
