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
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import type { BookingProperty } from '../../types/property/BookingProperty';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import DatePickerCustom from '@components/DatePickerCustom';
import InputSelect from '@components/InputSelect';
import ButtonCustom from '@components/ButtonCustom';
import { allSelectItemsData } from '@data/allSelectItemsData';

export default function InfoProperty(): ReactElement {
     const { handleSubmit, control } = useForm<BookingProperty>({
          defaultValues: {
               arrival: null,
               exit: null,
               person: '',
          },
     });

     const onSubmit: SubmitHandler<BookingProperty> = (data) =>
          console.log(data);
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
                    <Box
                         onSubmit={handleSubmit(onSubmit)}
                         component="form"
                         sx={{
                              width: '100%',
                         }}>
                         <LocalizationProvider dateAdapter={AdapterMoment}>
                              <Box
                                   sx={(theme) => ({
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        rowGap: theme.spacing(4),
                                   })}>
                                   <Controller
                                        name="arrival"
                                        control={control}
                                        render={({ field }) => (
                                             <DatePickerCustom
                                                  label={'Chegada'}
                                                  value={field.value ?? null}
                                                  onChange={field.onChange}
                                             />
                                        )}
                                   />
                                   <Controller
                                        name="exit"
                                        control={control}
                                        render={({ field }) => (
                                             <DatePickerCustom
                                                  label={'Saída'}
                                                  value={field.value ?? null}
                                                  onChange={field.onChange}
                                             />
                                        )}
                                   />
                                   <Controller
                                        name="person"
                                        control={control}
                                        render={({ field }) => (
                                             <InputSelect
                                                  label="Localização"
                                                  onChange={field.onChange}
                                                  value={field.value}
                                                  allItems={allSelectItemsData}
                                             />
                                        )}
                                   />
                                   <ButtonCustom
                                        submit
                                        main={true}
                                        buttonName="Buscar"
                                   />
                              </Box>
                         </LocalizationProvider>
                    </Box>
               </Box>
          </Box>
     );
}
