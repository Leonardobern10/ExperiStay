import { Grid } from '@mui/material';
import type { ReactElement } from 'react';

export default function GridMainText(props: {
     children: ReactElement;
}): ReactElement {
     return (
          <Grid
               container
               component="main"
               sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    padding: (theme) => theme.spacing(2),
                    justifySelf: 'flex-start',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'fit-content',
                    position: 'relative',
                    left: 0,
                    top: 0,
               }}
          >
               {props.children}
          </Grid>
     );
}
