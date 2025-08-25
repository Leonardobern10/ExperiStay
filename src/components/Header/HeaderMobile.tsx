import { Box, Stack } from "@mui/material";
import { type ReactElement } from "react";
import type { HeaderProps } from "../../types/HeaderProps";
import NavItem from "./NavItem";
import NavList from "../ui/NavList";

export default function HeaderMobile({
  refLogo,
  headerItemsNav,
}: HeaderProps): ReactElement {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      padding={(theme) => theme.spacing(3)}
    >
      <Box ref={refLogo} sx={{ width: "fit-content" }}>
        ExperiStay
      </Box>
      <NavList>
        {headerItemsNav.map((el) => (
          <NavItem key={el.index} nameItem={el.nameItem} />
        ))}
      </NavList>
    </Stack>
  );
}
