import type { RefObject } from "react";
import type { ItemNavProps } from "./ItemNavProps";

export type HeaderMobileProps = {
  refLogo: RefObject<null | HTMLElement>;
  refButton: RefObject<null | HTMLButtonElement>;
  headerItemsNav: Array<ItemNavProps>;
};
