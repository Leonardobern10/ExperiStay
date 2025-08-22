import { Box, Button, List, Stack } from "@mui/material";
import { useRef, type ReactElement } from "react";
import { headerItemsNav } from "../../data/headerItemsNav";
import ItemNav from "./ItemNav";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HeaderContainer(): ReactElement {
  const logo = useRef(null);
  const nav = useRef(null);
  const login = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(logo.current, { duration: 2, opacity: 0, y: -20 })
      .from(nav.current, { duration: 1, opacity: 0, y: -20 })
      .from(login.current, { duration: 1, opacity: 0, y: -20 });
  }, []);

  return (
    <Stack
      direction="row"
      spacing={1}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingX={5}
    >
      <Box ref={logo} sx={{ width: "fit-content" }}>
        ExperiStay
      </Box>
      <Box ref={nav} component="nav">
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
        ref={login}
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
