import type { ReactElement } from "react";
import ButtonWithIconUI from "./ui/ButtonWithIcon";
import type { ButtonWithIconProps } from "../types/ButtonWithIconProps";

export default function ButtonWithIcon({ buttonName, buttonIcon: Icon, onClick }: ButtonWithIconProps): ReactElement {
    return (
        <ButtonWithIconUI
            variant="outlined"
            sx={{ width: "fit-content" }}
            onClick={onClick}
            startIcon={Icon ? <Icon /> : undefined}
        >
            {buttonName}
        </ButtonWithIconUI>
    );
}
