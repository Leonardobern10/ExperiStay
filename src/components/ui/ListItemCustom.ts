import { ListItem, styled } from "@mui/material";

const ListItemCustom = styled(ListItem)(({theme}) => ({
  fontWeight: 300,
    color: theme.palette.primary.light,
    textShadow: "1px 1px 2px black",
    fontSize: "1.1rem",                 
}));

export default ListItemCustom;