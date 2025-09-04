import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";
import StarIcon from '@mui/icons-material/Star';

export default function RatingValue(props: { value: number }): ReactElement {
    return (
        <Box component='div' sx={{ width: '5rem', padding: (theme) => theme.spacing(1), position: 'absolute', top: '85%', left: '5%', backgroundColor: (theme) => theme.palette.background.default, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', columnGap: (theme) => theme.spacing(1), borderRadius: (theme) => theme.shape.borderRadius }}>
            <StarIcon sx={{
                height: '1.2rem'
            }} color='primary' />
            <Typography variant="body1">{props.value.toPrecision(2)}</Typography>
        </Box>
    )
}