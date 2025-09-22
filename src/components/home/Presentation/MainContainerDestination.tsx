import { Box } from '@mui/material';
import { type ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import SearchIcon from '@mui/icons-material/Search';
import ButtonCustom from '@components/ButtonCustom';

import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { allSelectItemsData } from '@data/allSelectItemsData';
import type { SearchPropertiesProps } from '../../../types/SearchAvailablePropertiesProps';
import DatePickerCustom from '@components/DatePickerCustom';
import InputSelect from '@components/InputSelect';

export default function ContainerMainDestination(): ReactElement {
     const { handleSubmit, control } = useForm<SearchPropertiesProps>({
          defaultValues: {
               arrival: null,
               exit: null,
               location: '',
          },
     });

     // Implementar submit ao servidor
     const onSubmit: SubmitHandler<SearchPropertiesProps> = (data) =>
          console.log(data);

     return (
          <LocalizationProvider dateAdapter={AdapterMoment}>
               <Box
                    onSubmit={handleSubmit(onSubmit)}
                    component="form"
                    sx={(theme) => ({
                         width: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         height: '100%',
                         padding: theme.spacing(2),
                         paddingTop: theme.spacing(4),
                         paddingBottom: theme.spacing(4),
                         rowGap: theme.spacing(2),
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         backgroundColor: theme.palette.background.default,
                         borderRadius: theme.shape.borderRadius,
                         [theme.breakpoints.up('md')]: {
                              flexDirection: 'row',
                              padding: theme.spacing(2),
                              justifyContent: 'space-evenly',
                              height: '100%',
                              columnGap: theme.spacing(2),
                         },
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
                         name="location"
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
                         buttonIcon={SearchIcon}
                         buttonName="Buscar"
                    />
               </Box>
          </LocalizationProvider>
     );
}
