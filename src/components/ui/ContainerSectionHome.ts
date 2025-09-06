import { Box, styled } from '@mui/material';

const ContainerSectionHome = styled(Box)(({ theme }) => ({
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-between',
     alignItems: 'center',
     height: '100%',
     width: '100%',
     rowGap: theme.spacing(10),
     paddingY: theme.spacing(10),
     paddingX: theme.spacing(8),
}));

export default ContainerSectionHome;
