import { Grid, styled } from '@mui/material';

export const PageContainer = styled(Grid)(({ theme }) => ({
    paddingTop: theme.spacing(5),
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: theme.spacing(20),
    paddingX: theme.spacing(8),
    backgroundColor: theme.palette.background.default,
}));
