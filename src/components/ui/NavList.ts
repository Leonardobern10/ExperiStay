import { List, styled } from "@mui/material";

const NavList = styled(List)(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    }
}))

export default NavList;