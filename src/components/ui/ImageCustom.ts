import { styled } from '@mui/material';

const ImageCustom = styled('img')(({ theme }) => ({
     width: '100%',
     height: '100%',
     objectFit: 'cover',
     objectPosition: 'center',
     boxSizing: 'border-box',
     borderRadius: theme.shape.borderRadius,
}));

export default ImageCustom;
