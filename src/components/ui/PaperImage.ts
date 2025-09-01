import { Paper, styled } from "@mui/material";

const PaperImage = styled(Paper)(({ theme }) => ({
    height: "80%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.default
}));

export default PaperImage;
