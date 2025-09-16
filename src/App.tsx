import FooterContainer from '@components/Footer/FooterContainer';
import HeaderContainer from '@components/Header/HeaderContainer';
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
                    width: '100vw',
                    overflow: 'hidden',
               }}>
               <HeaderContainer />
               <Outlet />
               <FooterContainer />
          </Grid>
     );
}

export default App;
