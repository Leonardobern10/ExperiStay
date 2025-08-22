import type { ReactElement } from "react";
import type { ItemNavProps } from "../../types/ItemNavProps";
import { ListItem } from "@mui/material";

export default function ItemNav ({nameItem}: ItemNavProps): ReactElement {
    return (
         <ListItem sx={{
            fontWeight: 200,
            color: '#FFF'
         }}>{nameItem}</ListItem>
    )
}