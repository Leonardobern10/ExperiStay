import { Select, styled, type SelectProps } from '@mui/material';

const SelectCustomUI = styled(Select)<SelectProps>(({ theme }) => ({
     backgroundColor: `${theme.palette.primary.dark}`,
     minWidth: '10rem',
     maxWidth: '15rem',
}));

export default SelectCustomUI;
