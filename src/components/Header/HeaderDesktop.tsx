import { Box, List, Stack } from "@mui/material";
import type { ReactElement } from "react";
import type { HeaderProps } from "../../types/HeaderProps";
import NavItem from "./NavItem";
import ButtonWithIcon from "../ui/ButtonWithIcon";

export default function HeaderDesktop({
  refLogo,
  refNav,
  refButton,
  headerItemsNav,
}: HeaderProps): ReactElement {
  return (
    <Stack direction="row" flexDirection="row" height="100%">
      <Box ref={refLogo} sx={{ width: "fit-content" }}>
        ExperiStay
      </Box>
      <Box ref={refNav} component="nav">
        <List
          component="ul"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {headerItemsNav.map((el) => (
            <NavItem key={el.index} nameItem={el.nameItem} />
          ))}
        </List>
      </Box>
      <ButtonWithIcon ref={refButton} variant="outlined">
        Login
      </ButtonWithIcon>
    </Stack>
  );
}
