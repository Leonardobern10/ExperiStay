import { Paper, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function LabelHighlight(props: {
     labelName: string;
}): ReactElement {
     return (
          <Paper
               variant="outlined"
               sx={{
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    width: 'fit-content',
                    color: (theme) => theme.palette.primary.dark,
                    paddingX: (theme) => theme.spacing(2),
                    borderRadius: (theme) => theme.shape.borderRadius,
               }}
          >
               <Typography
                    sx={{
                         fontSize: '.8rem',
                         fontWeight: '400',
                    }}
               >
                    {props.labelName}
               </Typography>
          </Paper>
     );
}
