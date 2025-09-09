import { Box } from '@mui/material';
import { type ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import InputSelect from '../InputSelect';
import DatePickerCustom from '../DatePickerCustom';
import SearchIcon from '@mui/icons-material/Search';
import ButtonCustom from '@components/ButtonCustom';
import type { SearchPropertiesProps } from '../../types/SearchAvailablePropertiesProps';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';

export default function ContainerMainDestination(): ReactElement {
     const { handleSubmit, control } = useForm<SearchPropertiesProps>({
          defaultValues: {
               arrival: null,
               exit: null,
               location: '',
          },
     });

     const onSubmit: SubmitHandler<SearchPropertiesProps> = (data) =>
          console.log(data);

     return (
          <LocalizationProvider dateAdapter={AdapterMoment}>
               <Box
                    onSubmit={handleSubmit(onSubmit)}
                    component="form"
                    sx={{
                         width: '100%',
                         display: 'flex',
                         flexDirection: {
                              xs: 'column',
                              md: 'row',
                         },
                         height: '100%',
                         paddingY: (theme) => theme.spacing(2),
                         justifyContent: 'space-evenly', // centraliza
                         alignItems: 'center',
                         rowGap: 2,
                         backgroundColor: (theme) =>
                              theme.palette.background.default,
                    }}>
                    <Controller
                         name="arrival"
                         control={control}
                         render={({ field }) => (
                              <DatePickerCustom
                                   label={field.name}
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
                                   label={field.name}
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
