import ImagePropertyComponent from '@components/ImagePropertyComponent';
import type { ReactElement } from 'react';
import test from '@images/Gemini_Generated_Image_y0d4kby0d4kby0d4.png';
import { PageContainer } from '@components/ui/PageContainer';
import { Box, Stack, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import DatePickerCustom from '@components/DatePickerCustom';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import type { Moment } from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import ButtonCustom from '@components/ButtonCustom';
import InputSelect from '@components/InputSelect';
import { allSelectItemsData } from '@data/allSelectItemsData';
import LabelProperty from '@components/LabelProperty';
import RatingComponent from '@components/RatingComponent';
import HeadInfoProperty from '@components/property/HeadInfoProperty';
import { headInfoPropertyData } from '@data/property/headInfoPropertyData';

type BookingProperty = {
     arrival: Moment | null;
     exit: Moment | null;
     person: string;
};

export default function Property(): ReactElement {
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
          <PageContainer sx={(theme) => ({ marginTop: theme.spacing(12) })}>
               <Box
                    sx={(theme) => ({
                         paddingY: theme.spacing(10),
                         width: '90%',
                    })}>
                    <Box sx={{ height: '70vh' }}>
                         <ImagePropertyComponent
                              src={test}
                              name="text"
                              rating={5}
                              location="Miami"
                              label="Muito bom"
                              full
                         />
                    </Box>
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
                                   headLocation={
                                        headInfoPropertyData.headLocation
                                   }
                                   headAcomodations={
                                        headInfoPropertyData.headAcomodations
                                   }
                              />
                              <Typography
                                   width="70%"
                                   variant="body1">
                                   Cobertura de luxo com vista panorâmica para a
                                   praia de Ipanema. Localização privilegiada no
                                   coração do Rio de Janeiro com acesso aos
                                   melhores pontos turísticos.
                              </Typography>
                              <Box
                                   sx={(theme) => ({
                                        display: 'flex',
                                        flexDirection: 'column',
                                        rowGap: theme.spacing(4),
                                   })}>
                                   <Typography variant="h3">
                                        Características Únicas
                                   </Typography>
                                   <Stack
                                        direction="row"
                                        justifyContent="flex-start"
                                        spacing={2}>
                                        <LabelProperty labelName="Luxo" />
                                        <LabelProperty labelName="Luxo" />
                                        <LabelProperty labelName="Luxo" />
                                   </Stack>
                              </Box>
                              <Box
                                   sx={(theme) => ({
                                        display: 'flex',
                                        flexDirection: 'column',
                                        rowGap: theme.spacing(4),
                                   })}>
                                   <Typography variant="h3">
                                        Comodidades
                                   </Typography>
                                   <Box
                                        sx={(theme) => ({
                                             display: 'grid',
                                             gridTemplateColumns:
                                                  'repeat(2, 1fr)',
                                             width: '50vw',
                                             rowGap: theme.spacing(1),
                                        })}>
                                        <Stack
                                             direction="row"
                                             justifyContent="flex-start"
                                             spacing={2}>
                                             <CircleIcon
                                                  sx={{
                                                       fontSize: 10,
                                                  }}
                                             />
                                             <Typography variant="body1">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                        <Stack
                                             direction="row"
                                             justifyContent="flex-start"
                                             spacing={2}>
                                             <CircleIcon fontSize="inherit" />
                                             <Typography variant="body1">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                        <Stack
                                             direction="row"
                                             justifyContent="flex-start"
                                             spacing={2}>
                                             <CircleIcon fontSize="inherit" />
                                             <Typography variant="body1">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                        <Stack
                                             direction="row"
                                             justifyContent="flex-start"
                                             spacing={2}>
                                             <CircleIcon fontSize="inherit" />
                                             <Typography variant="body1">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                        <Stack
                                             direction="row"
                                             justifyContent="flex-start"
                                             spacing={2}>
                                             <CircleIcon fontSize="inherit" />
                                             <Typography variant="body1">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                        <Stack
                                             direction="row"
                                             justifyContent="flex-start"
                                             spacing={2}>
                                             <CircleIcon fontSize="inherit" />
                                             <Typography variant="body1">
                                                  Vista para o mar
                                             </Typography>
                                        </Stack>
                                   </Box>
                              </Box>
                         </Box>
                         <Box
                              sx={(theme) => ({
                                   backgroundColor:
                                        theme.palette.secondary.main,
                                   borderRadius: theme.shape.borderRadius,
                                   padding: theme.spacing(8),
                                   rowGap: theme.spacing(8),
                                   display: 'flex',
                                   flexDirection: 'column',
                                   width: '40%',
                              })}>
                              <Box>
                                   <Typography variant="h3">
                                        R$ 1200/noite
                                   </Typography>
                              </Box>
                              <Box
                                   onSubmit={handleSubmit(onSubmit)}
                                   component="form"
                                   sx={{
                                        width: '100%',
                                   }}>
                                   <LocalizationProvider
                                        dateAdapter={AdapterMoment}>
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
                                                            value={
                                                                 field.value ??
                                                                 null
                                                            }
                                                            onChange={
                                                                 field.onChange
                                                            }
                                                       />
                                                  )}
                                             />
                                             <Controller
                                                  name="exit"
                                                  control={control}
                                                  render={({ field }) => (
                                                       <DatePickerCustom
                                                            label={'Saída'}
                                                            value={
                                                                 field.value ??
                                                                 null
                                                            }
                                                            onChange={
                                                                 field.onChange
                                                            }
                                                       />
                                                  )}
                                             />
                                             <Controller
                                                  name="person"
                                                  control={control}
                                                  render={({ field }) => (
                                                       <InputSelect
                                                            label="Localização"
                                                            onChange={
                                                                 field.onChange
                                                            }
                                                            value={field.value}
                                                            allItems={
                                                                 allSelectItemsData
                                                            }
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
                    <Box>
                         <Typography variant="h3">
                              Avaliações dos hóspedes
                         </Typography>
                         <Box
                              sx={(theme) => ({
                                   paddingY: theme.spacing(4),
                              })}>
                              <Stack
                                   direction="row"
                                   justifyContent="flex-start"
                                   spacing={2}>
                                   <RatingComponent
                                        rating={3}
                                        textRating={
                                             'O penthouse no Rio superou todas as expectativas. Ver o pôr do sol de Ipanema da nossa varanda privativa foi um momento único e emocionante'
                                        }
                                        name={'João Saldanha'}
                                        location={'Belo Horizonte, MG'}
                                   />
                              </Stack>
                         </Box>
                    </Box>
               </Box>
          </PageContainer>
     );
}
