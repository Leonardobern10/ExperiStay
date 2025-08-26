import { Box } from "@mui/material";
import type { ReactElement, RefObject } from "react";

export default function Logo (props: {ref?: RefObject<HTMLElement | null>}): ReactElement {
    return (
    <Box ref={props.ref} sx={{ width: "fit-content", color: "primary.contrastText"}}>
        ExperiStay
      </Box>
    )
}