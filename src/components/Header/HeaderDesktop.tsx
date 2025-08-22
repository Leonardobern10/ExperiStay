import { Box, Button, List, Stack } from "@mui/material";
import type { ReactElement } from "react";
import type { HeaderProps } from "../../types/HeaderProps";
import ItemNav from "./ItemNav";

export default function HeaderDesktop({
  refLogo,
  refNav,
  refButton,
  headerItemsNav,
}: HeaderProps): ReactElement {
  return (
    <Stack
      direction="row"
      spacing={1}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingX={5}
      height="100%"
    >
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
            <ItemNav key={el.index} nameItem={el.nameItem} />
          ))}
        </List>
      </Box>
      <Button
        ref={refButton}
        variant="outlined"
        sx={{
          fontWeight: 400,
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        Login
      </Button>
    </Stack>
  );
}
