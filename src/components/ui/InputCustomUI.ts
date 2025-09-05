import { Select, styled, type SelectProps } from '@mui/material';

const SelectCustomUI = styled(Select)<SelectProps>(({ theme }) => ({
     backgroundColor: `${theme.palette.primary.dark}`,
     minWidth: '15rem',
     maxWidth: 'fit-content',
}));

export default SelectCustomUI;
