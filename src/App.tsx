import HeaderContainer from '@components/Header/HeaderContainer';
import FooterContainer from '@components/home/Footer/FooterContainer';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router';

const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
};

function App() {
    return (
        <Grid
            component="div"
            sx={appStyle}>
            <HeaderContainer />
            <Outlet />
            <FooterContainer />
        </Grid>
    );
}

export default App;
