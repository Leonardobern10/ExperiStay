import type { ReactElement } from "react";
import type { ItemNavProps } from "../../types/ItemNavProps";
import ListItemCustom from "../ui/ListItemCustom";

export default function NavItem({ nameItem }: ItemNavProps): ReactElement {
  return (
    <ListItem
      sx={{
        fontWeight: 200,
        color: (theme) => theme.palette.text.primary,
        textShadow: "2px 2px 2px black",
        fontSize: "1.3rem",
      }}
    >
      {nameItem}
    </ListItemCustom>
  );
}
