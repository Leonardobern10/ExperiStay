import { Box, List, Stack } from "@mui/material";
import { type ReactElement } from "react";
import type { HeaderProps } from "../../types/HeaderProps";
import NavItem from "./NavItem";
import Logo from "../Logo";

export default function HeaderMobile({
  refLogo,
  headerItemsNav,
}: HeaderProps): ReactElement {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      padding={4}
    >

      <Logo ref={refLogo} />

      <List>
        {headerItemsNav.map((el) => (
          <NavItem key={el.index} nameItem={el.nameItem} />
        ))}
      </List>
    </Stack>
  );
}
