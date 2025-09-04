import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";
import Button from "../ButtonWithIcon";
import type { PropertyHighlightsType } from "../../types/PropertyHighlightsType";
import { allProperties, propertyHighlightsData } from "../../data/PropertyHighlightsData";
import HighlightComponent from "./HightlightComponent";
import MainTitle from "../Presentation/MainTitle";

export default function PropertyHighlights(props: { className: string, title: string, subtitle: string }): ReactElement {
    const data: PropertyHighlightsType = propertyHighlightsData;

    return (
        <Box className={props.className} sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            rowGap: (theme) => theme.spacing(20),
            paddingY: (theme) => theme.spacing(15),
            paddingX: (theme) => theme.spacing(8),
        }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>

                <MainTitle align="center" string={data.title} />
                <Typography sx={{
                    width: '60%',
                    textAlign: 'center'
                }} variant="subtitle2" color="textSecondary">{data.subtitle}</Typography>
            </Box>
            <Box sx={{
                paddingX: (theme) => theme.spacing(8),
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                columnGap: (theme) => theme.spacing(6)
            }}>
                {allProperties.map((el) => (
                    <HighlightComponent key={el.index} index={el.index} name={el.name} location={el.location} description={el.description} price={el.price} rating={el.rating} liked={el.liked} img={el.img} label={el.label} />)
                )}
            </Box>
            <Button buttonName={data.buttonName} />
        </Box>
    )
}