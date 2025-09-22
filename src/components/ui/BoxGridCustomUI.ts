import { Box, styled } from '@mui/material';

export const BoxGridCustomUI = styled(Box)(({ theme }) => ({
     display: 'grid',
     gap: theme.spacing(2),
     paddingTop: theme.spacing(8),
     paddingBottom: theme.spacing(8),
     [theme.breakpoints.down('md')]: {
          gridTemplateRows: 'repeat(4, 1fr)',
     },
     [theme.breakpoints.up('md')]: {
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: theme.spacing(6),
     },
}));
