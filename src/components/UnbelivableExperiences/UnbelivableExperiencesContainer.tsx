import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";
import MainTitle from "../Presentation/MainTitle";
import ExperienceComponent from "./ExperienceComponent";
import { experienceComponents } from "../../data/unbelivableExperiences";

export default function UnbelivableExperiences(props: { className: string }): ReactElement {
    return (
        <Box className={props.className} sx={{
            paddingY: (theme) => theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            rowGap: (theme) => theme.spacing(8)
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                <MainTitle align="center" string="Experiências incríveis" />
                <Typography variant="subtitle2">Cada imóvel oference acesso à experiências únicas que conectam você aos tesouros escondidos do Brasil</Typography>
            </Box>
            <Box sx={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: (theme) => theme.spacing(2),
                padding: (theme) => theme.spacing(6)
            }}>
                {experienceComponents.map((el) => (
                    <ExperienceComponent key={el.index} title={el.title} description={el.description} icon={el.icon} alert={el.alert} />
                ))}
            </Box>

        </Box>
    )
}