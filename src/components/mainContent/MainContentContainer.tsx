import { Box, Grid } from "@mui/material";
import type { ReactElement } from "react";
import HeaderContainer from "../Header/HeaderContainer";
import backgroundImage from '../../assets/images/Gemini_Generated_Image_wvn7uswvn7uswvn7.png'
import MainText from "../MainText";
import { mainTexts } from "../../data/mainTexts";

export default function MainContentContainer (): ReactElement {
    return (
        <Box sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                filter: "brightness(80%) contrast(90%)",
                height: '100vh',
                width: '100%',
                
        }}>
            <HeaderContainer />
            <Grid container component='main' sx={{
                width: '100%',
                padding: 4,
                justifyContent: 'flex-start',
                alignItems: 'end',
                backdropFilter: 'opacity(40%)',
                height: '40%',
                border: 2
            }}>
                <MainText title={mainTexts.title} desc={mainTexts.desc} />
            </Grid>
        </Box>
    )
}