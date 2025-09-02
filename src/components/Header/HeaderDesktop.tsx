import { Box, Stack } from "@mui/material";
import type { ReactElement } from "react";
import type { HeaderProps } from "../../types/HeaderProps";
import NavItem from "./NavItem";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavList from "../ui/NavList";
import ButtonWithIcon from "../ButtonWithIcon";

export default function HeaderDesktop({
  refLogo,
  refNav,
  refButton,
  headerItemsNav,
}: HeaderProps): ReactElement {
  return (
    <Stack direction="row" width='100%'>
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
      <ButtonWithIcon ref={refButton} buttonName="Login" buttonIcon={AccountCircleIcon} />
    </Stack>
  );
}
