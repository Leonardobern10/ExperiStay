import { Box } from "@mui/material";
import type { ReactElement, RefObject } from "react";

export default function Logo (props: {ref?: RefObject<HTMLElement | null>}): ReactElement {
    return (
    <Box ref={props.ref} sx={{ width: "fit-content", fontWeight: 200, color: (theme) => theme.palette.text.primary}  }>
        ExperiStay
      </Box>
    )
}