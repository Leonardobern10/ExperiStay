import type { ReactElement } from "react";
import ImageCustom from "./ui/ImageCustom";

export default function ImageComponent(
    props: {
        alt: string;
        src: string;
    }
): ReactElement {
    return (
        <ImageCustom alt={props.alt} src={props.src} loading="lazy" />
    )
}