import { Box, Stack, Typography } from '@mui/material';
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

export default function InfoProperty(): ReactElement {
     return (
          <Box
               sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    columnGap: theme.spacing(4),
                    paddingY: theme.spacing(8),
               })}>
               <Box
                    sx={(theme) => ({
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'space-between',
                         alignItems: 'flex-start',
                         rowGap: theme.spacing(6),
                    })}>
                    <HeadInfoProperty
                         headTitle={headInfoPropertyData.headTitle}
                         headLocation={headInfoPropertyData.headLocation}
                         headAcomodations={
                              headInfoPropertyData.headAcomodations
                         }
                    />
                    <Typography
                         width="70%"
                         variant="body1">
                         {descriptionExample}
                    </Typography>
                    <Box
                         sx={(theme) => ({
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: theme.spacing(4),
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
                              rowGap: theme.spacing(4),
                         })}>
                         <Typography variant="h3">
                              {acommodationsData.title}
                         </Typography>
                         <Box
                              sx={(theme) => ({
                                   display: 'grid',
                                   gridTemplateColumns: 'repeat(2, 1fr)',
                                   width: '50vw',
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
               <Box
                    sx={(theme) => ({
                         backgroundColor: theme.palette.secondary.main,
                         borderRadius: theme.shape.borderRadius,
                         padding: theme.spacing(8),
                         rowGap: theme.spacing(8),
                         display: 'flex',
                         flexDirection: 'column',
                         width: '40%',
                    })}>
                    <Box>
                         <Typography variant="h3">R$ 1200/noite</Typography>
                    </Box>
                    <BookingForm />
               </Box>
          </Box>
     );
}
