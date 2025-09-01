import { styled } from "@mui/material";

const ImageCustom = styled('img')(() => ({
    width: '20rem',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
}));

export default ImageCustom;