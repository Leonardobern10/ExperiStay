import { Box, Stack } from "@mui/material";
import type { ReactElement } from "react";
import type { HeaderProps } from "../../types/HeaderProps";
import NavItem from "./NavItem";
import ButtonWithIcon from "../ui/ButtonWithIcon";
import Logo from "../Logo";
import NavList from "../ui/NavList";

export default function HeaderDesktop({
  refLogo,
  refNav,
  refButton,
  headerItemsNav,
}: HeaderProps): ReactElement {
  return (
    <Stack direction="row" height="100%">
      <Box ref={refLogo} sx={{ width: "fit-content" }}>
        ExperiStay
      </Box>
      <Box ref={refNav} component="nav">
        <NavList>
          {headerItemsNav.map((el) => (
            <NavItem key={el.index} nameItem={el.nameItem} />
          ))}
        </NavList>
      </Box>
      <ButtonWithIcon ref={refButton} variant="outlined">
        Login
      </ButtonWithIcon>
    </Stack>
  );
}
