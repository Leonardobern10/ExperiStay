import type { ReactElement } from "react";
import type { ItemNavProps } from "../../types/ItemNavProps";
import { ListItem } from "@mui/material";

export default function NavItem({ nameItem }: ItemNavProps): ReactElement {
  return (
    <ListItem
      sx={{
        fontWeight: 200,
        color: "#ffffffff",
        textShadow: "2px 2px 2px black",
        fontSize: "1.3rem",
      }}
    >
      {nameItem}
    </ListItem>
  );
}
