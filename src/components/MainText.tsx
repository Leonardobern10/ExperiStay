import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";
import type { MainTextProps } from "../types/MainTextProps";

export default function MainText ({title, desc}: MainTextProps): ReactElement {
    return (
        <Box sx={{
            border: 2,
            width: '60%',
        }}>
            <Typography variant='h1' sx={{
                width: '100%'
            }}>{title}</Typography>
            <Typography>{desc}</Typography>
        </Box>
    )
}