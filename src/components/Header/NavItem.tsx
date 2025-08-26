import type { ReactElement } from "react";
import type { ItemNavProps } from "../../types/ItemNavProps";
import ListItemCustom from "../ui/ListItemCustom";

export default function NavItem({ nameItem }: ItemNavProps): ReactElement {
  return (
    <ListItemCustom>
      {nameItem}
    </ListItemCustom>
  );
}
