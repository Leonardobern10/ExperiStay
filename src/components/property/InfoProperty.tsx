import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import HeadInfoProperty from './HeadInfoProperty';
import {
    acommodationsData,
    descriptionExample,
    headInfoPropertyData,
    labelsPropertyData,
} from '@data/property/headInfoPropertyData';
import LabelProperty from '@components/LabelProperty';
import AcomodationsItem from './AcomodationsItems';
import BookingForm from './BookingForm';
import PriceValueProperty from './PricePropertyValue';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Divider from '@mui/material/Divider';
import { infoPropertySx } from './infoProperty.style';

export default function InfoProperty(): ReactElement {
    const theme = useTheme();
    const infoStyle = useMemo(() => infoPropertySx(theme), [theme]);
    return (
        <Box sx={infoStyle.infoBoxContainerSx}>
            <Box sx={infoStyle.infoBoxDescriptionSx}>
                <HeadInfoProperty
                    headTitle={headInfoPropertyData.headTitle}
                    headLocation={headInfoPropertyData.headLocation}
                    headAcomodations={headInfoPropertyData.headAcomodations}
                />
                <Typography
                    sx={infoStyle.infoTypographyDescriptionSx}
                    variant="body1">
                    {descriptionExample}
                </Typography>
                <Box sx={infoStyle.infoBoxTitleSx}>
                    <Typography variant="h3">
                        {labelsPropertyData.title}
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        spacing={2}>
                        {labelsPropertyData.allLabels.map((el) => (
                            <LabelProperty labelName={el.labelName} />
                        ))}
                    </Stack>
                </Box>
                <Box sx={infoStyle.infoBoxCharactersSx}>
                    <Typography variant="h3">
                        {acommodationsData.title}
                    </Typography>
                    <Box sx={infoStyle.infoBoxAcomodationsSx}>
                        {acommodationsData.allAcomodations.map((el) => (
                            <AcomodationsItem
                                acomodationItemName={el.name}
                                key={el.index}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
            <Paper
                elevation={2}
                sx={infoStyle.infoBoxAllAcomodationsSx}>
                <Stack
                    direction="row"
                    justifyContent="space-between">
                    <PriceValueProperty price={1200} />
                    <FavoriteBorderIcon />
                </Stack>
                <BookingForm />
                <Divider
                    sx={infoStyle.infoDividerSx}
                    variant="middle"
                    flexItem
                />
                <Box>
                    <Stack
                        direction="row"
                        justifyContent="space-between">
                        <Typography variant="body1">Taxa de serviço</Typography>
                        <Typography variant="body1">Incluída</Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="space-between">
                        <Typography variant="body1">
                            Cancelamento grátis
                        </Typography>
                        <Typography
                            variant="body1"
                            color="primary">
                            Até 48 horas antes
                        </Typography>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
}
