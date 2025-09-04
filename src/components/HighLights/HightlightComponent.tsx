import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";
import type { HighlightType } from "../../types/HighlightType";
import ImageComponent from "../ImageComponent";
import RatingValue from "../RatingValue";
import LikedComponent from "../LikedComponent";
import PriceHighlight from "./PriceHighlight";
import DescriptionHighlight from "./DescriptionHighlight";

export default function HighlightComponent(hightLightData: HighlightType): ReactElement {

    return (
        <Box sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            borderRadius: (theme) => theme.shape.borderRadius,
            height: '30rem',
        }}>
            <Box sx={{
                height: '50%',
                width: '100%',
                position: 'relative'
            }}>
                <ImageComponent src={hightLightData.img} alt={`imagem do imovel em destaque ${hightLightData.name} no(a) ${hightLightData.location}`} />
                <RatingValue value={hightLightData.rating} />
            </Box>
            <Box sx={{
                height: '50%',
                padding: (theme) => theme.spacing(4),
                display: 'flex',
                flexDirection: 'column',
                rowGap: (theme) => theme.spacing(3)
            }}>
                <Box>

                    <Typography variant="h5" color="textPrimary">{hightLightData.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{hightLightData.location}</Typography>
                </Box>
                <DescriptionHighlight description={hightLightData.description} />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <PriceHighlight value={hightLightData.price} />
                    <LikedComponent liked={hightLightData.liked} />
                </Box>
            </Box>
        </Box>
    )
}