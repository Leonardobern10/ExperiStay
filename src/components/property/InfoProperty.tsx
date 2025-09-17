import { Box, Paper, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
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
import useWidth from '@hooks/useWidth';

export default function InfoProperty(): ReactElement {
     const width: boolean = useWidth('md');

     return (
          <Box
               sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingY: theme.spacing(8),
                    rowGap: theme.spacing(8),
                    [theme.breakpoints.up('md')]: {
                         flexDirection: 'row',
                         columnGap: theme.spacing(4),
                    },
               })}>
               <Box
                    sx={(theme) => ({
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'space-between',
                         alignItems: 'flex-start',
                         height: 'fit-content',
                         rowGap: theme.spacing(4),
                         border: 2,
                    })}>
                    <HeadInfoProperty
                         headTitle={headInfoPropertyData.headTitle}
                         headLocation={headInfoPropertyData.headLocation}
                         headAcomodations={
                              headInfoPropertyData.headAcomodations
                         }
                    />
                    <Typography
                         sx={(theme) => ({
                              width: '100%',
                              [theme.breakpoints.up('md')]: {
                                   width: '70%',
                              },
                         })}
                         variant="body1">
                         {descriptionExample}
                    </Typography>
                    <Box
                         sx={(theme) => ({
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: theme.spacing(2),
                         })}>
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
                    <Box
                         sx={(theme) => ({
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: theme.spacing(2),
                         })}>
                         <Typography variant="h3">
                              {acommodationsData.title}
                         </Typography>
                         <Box
                              sx={(theme) => ({
                                   display: 'grid',
                                   gridTemplateColumns: 'repeat(2, 1fr)',
                                   minWidth: '50vw',
                                   rowGap: theme.spacing(1),
                              })}>
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
                    sx={(theme) => ({
                         backgroundColor: theme.palette.secondary.main,
                         borderRadius: 2,
                         padding: theme.spacing(4),
                         rowGap: theme.spacing(8),
                         display: 'flex',
                         flexDirection: 'column',
                         minWidth: '40%',
                    })}>
                    <Stack
                         direction="row"
                         justifyContent="space-between">
                         <PriceValueProperty price={1200} />
                         <FavoriteBorderIcon />
                    </Stack>
                    <BookingForm />
                    <Divider
                         sx={(theme) => ({
                              backgroundColor: theme.palette.primary.light,
                              opacity: 0.2,
                         })}
                         variant="middle"
                         flexItem
                    />
                    <Box>
                         <Stack
                              direction="row"
                              justifyContent="space-between">
                              <Typography variant="body1">
                                   Taxa de serviço
                              </Typography>
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
