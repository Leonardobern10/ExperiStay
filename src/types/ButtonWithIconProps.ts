import type { ElementType, RefObject } from "react";

export type ButtonWithIconProps = {
    buttonName: string;
    buttonIcon: ElementType;
    ref?: RefObject<HTMLElement | null>;
    onClick?: () => void;
}