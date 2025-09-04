import { Box } from "@mui/material";
import type { ReactElement } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function LikedComponent(props: { liked: boolean }): ReactElement {
    return (
        <Box>
            {props.liked ? <FavoriteIcon color='primary' /> : <FavoriteBorderIcon color="primary" />}
        </Box>
    )
}