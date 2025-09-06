import { Box, styled } from '@mui/material';

export const BoxGridCustomUI = styled(Box)(({ theme }) => ({
     display: 'grid',
     gap: theme.spacing(2),
     padding: theme.spacing(6),
     [theme.breakpoints.down('md')]: {
          gridTemplateRows: 'repeat(4, 1fr)',
     },
     [theme.breakpoints.up('md')]: {
          gridTemplateColumns: 'repeat(2, 1fr)',
     },
}));
