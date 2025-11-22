import { Grid, styled } from '@mui/material';

export const PageContainer = styled(Grid)(({ theme }) => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: theme.spacing(20),
    backgroundColor: theme.palette.background.default,
}));
