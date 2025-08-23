import { Box, List } from "@mui/material";
import type { ReactElement, RefObject } from "react";
import ItemNav from "./Header/ItemNav";
import type { ItemNavProps } from "../types/ItemNavProps";

export default function NavBar(props: {
  refNav: RefObject<HTMLElement | null>;
  headerItemsNav: Array<ItemNavProps>;
}): ReactElement {
  return (
    <Box ref={props.refNav} component="nav">
      <List
        component="ul"
        sx={{
          xs: {
            height: "100%",
            flexDirection: "column",
          },
          md: {
            flexDirection: "row",
            width: "100%",
          },
        }}
      >
        {props.headerItemsNav.map((el) => (
          <ItemNav key={el.index} nameItem={el.nameItem} />
        ))}
      </List>
    </Box>
  );
}
