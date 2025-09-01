import { Typography } from "@mui/material";
import type { ReactElement } from "react";
import ImageComponent from "../ImageComponent";
import PaperImage from "../ui/PaperImage";

export default function HighlightComponent(props: { highlightName: string, src: string }): ReactElement {
    return (
        <PaperImage sx={{ display: "flex", flexDirection: "column" }} variant="outlined">
            <ImageComponent alt="Imagem do imovel de destaque 1" src={props.src} />
            <Typography>{props.highlightName}</Typography>
        </PaperImage>
    )
}