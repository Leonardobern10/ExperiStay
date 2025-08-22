import { Box, Button, Drawer, List, Stack } from "@mui/material";
import { useState, type ReactElement } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import type { HeaderProps } from "../../types/HeaderProps";
import ItemNav from "./ItemNav";

export default function HeaderMobile({
  refLogo,
  refButton,
  headerItemsNav,
}: HeaderProps): ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = (currentState: boolean): void => setOpen(currentState);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      padding={4}
      alignItems="center"
    >
      <Box ref={refLogo} sx={{ width: "fit-content" }}>
        ExperiStay
      </Box>
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          backgroundColor: "background.default",
          borderRadius: "12px",
        }}
        onClick={() => toggleMenu(true)}
        ref={refButton}
      >
        <MenuIcon />
      </Button>
      <Drawer
        anchor="top"
        open={open}
        onClose={() => toggleMenu(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%", // largura em pixels
            height: "50%",
          },
        }}
      >
        <List>
          {headerItemsNav.map((el) => (
            <ItemNav key={el.index} nameItem={el.nameItem} />
          ))}
        </List>
      </Drawer>
    </Stack>
  );
}
