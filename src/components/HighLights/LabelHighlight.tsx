import { Paper, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function LabelHighlight(props: {
     labelName: string;
}): ReactElement {
     return (
          <Paper
               variant="outlined"
               sx={(theme) => ({
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    width: 'fit-content',
                    color: theme.palette.primary.main,
                    paddingX: theme.spacing(2),
                    borderRadius: theme.shape.borderRadius,
               })}>
               <Typography variant="caption"> {props.labelName} </Typography>
          </Paper>
     );
}
