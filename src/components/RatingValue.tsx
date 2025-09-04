import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";
import StarIcon from '@mui/icons-material/Star';

export default function RatingValue(props: { value: number }): ReactElement {
    return (
        <Box component='div' sx={{ width: 'fit-content', height: '2rem', padding: (theme) => theme.spacing(2), position: 'absolute', top: '85%', left: '5%', backgroundColor: (theme) => theme.palette.background.default, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', columnGap: (theme) => theme.spacing(2), borderRadius: (theme) => theme.shape.borderRadius }}>
            <StarIcon color='primary' />
            <Typography variant="h6">{props.value.toPrecision(2)}</Typography>
        </Box>
    )
}