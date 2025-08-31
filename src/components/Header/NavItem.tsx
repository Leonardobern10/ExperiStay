import type { ReactElement } from "react";
import type { ItemNavProps } from "../../types/ItemNavProps";
import ListItemCustom from "../ui/ListItemCustom";

export default function NavItem({ nameItem }: ItemNavProps): ReactElement {
  return (
    <ListItemCustom
      sx={{
        fontWeight: 200,
        color: (theme) => theme.palette.text.primary,
        fontSize: "1.3rem",
      }}
    >
      {nameItem}
    </ListItemCustom>
  );
}
