import { List, styled } from "@mui/material";

const NavList = styled(List)(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    }
}))

export default NavList;