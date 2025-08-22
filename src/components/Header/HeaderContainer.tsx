import { Box, Button, List, Stack } from "@mui/material";
import type { ReactElement } from "react";
import { headerItemsNav } from "../../data/headerItemsNav";
import ItemNav from "./ItemNav";

export default function HeaderContainer (): ReactElement {
    return (
  <Stack
        direction="row"
        spacing={1}
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        paddingX={5}>
        <Box sx={{width: 'fit-content'}}>ExperiStay</Box>
        <Box component="nav">
          <List
            component="ul"
            sx={{
              display: "flex",
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}
          >
            {headerItemsNav.map((el) => (
                <ItemNav key={el.index} nameItem={el.nameItem} />
            ))}
          </List>
        </Box>
        <Button sx={{
            fontWeight: 400,
            color: 'text.primary',
        }} >Login</Button>
      </Stack>
    )
}