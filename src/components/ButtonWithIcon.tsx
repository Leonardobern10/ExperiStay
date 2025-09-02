import type { ReactElement } from "react";
import ButtonWithIconUI from "./ui/ButtonWithIcon";
import { Typography } from "@mui/material";
import type { ButtonWithIconProps } from "../types/ButtonWithIconProps";

export default function ButtonWithIcon({ buttonName, buttonIcon, onClick }: ButtonWithIconProps): ReactElement {
    const Icon = buttonIcon;

    return (
        <ButtonWithIconUI
            variant="outlined"
            sx={{ width: "fit-content" }}
            onClick={onClick}>
            <Typography>{buttonName}</Typography>
            <Icon />
        </ButtonWithIconUI>
    )
}