import type { RefObject } from "react";
import type { ItemNavProps } from "./ItemNavProps";

export type HeaderProps = {
  refLogo: RefObject<HTMLElement | null>;
  refNav?: RefObject<HTMLElement | null>;
  refButton: RefObject<HTMLButtonElement | null>;
  headerItemsNav: Array<ItemNavProps>;
};
