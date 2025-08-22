import { Box, List, Stack } from "@mui/material";
import { type ReactElement } from "react";
import type { HeaderProps } from "../../types/HeaderProps";
import ItemNav from "./ItemNav";

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
      <Box ref={refLogo} sx={{ width: "fit-content" }}>
        ExperiStay
      </Box>

      <List>
        {headerItemsNav.map((el) => (
          <ItemNav key={el.index} nameItem={el.nameItem} />
        ))}
      </List>
    </Stack>
  );
}
