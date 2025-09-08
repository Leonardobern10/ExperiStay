import { Grid } from '@mui/material';
import { Outlet } from 'react-router';

function App() {
     return (
          <Grid
               component="div"
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
               }}>
               <Outlet />
          </Grid>
     );
}

export default App;
