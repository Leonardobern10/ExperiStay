import { Grid } from '@mui/material';
import type { ReactElement } from 'react';

export default function GridMainText(props: {
     children: ReactElement;
}): ReactElement {
     return (
          <Grid
               container
               component="main"
               sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifySelf: 'flex-start',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'fit-content',
                    paddingX: theme.spacing(8),
                    textAlign: 'center',
                    marginTop: theme.spacing(4),
                    [theme.breakpoints.up('md')]: {
                         padding: theme.spacing(20),
                         position: 'relative',
                         left: 0,
                         top: 0,
                    },
               })}>
               {props.children}
          </Grid>
     );
}
