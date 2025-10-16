import { Box } from '@mui/material';
import type { BookingProperty } from '../../types/property/BookingProperty';
import type { ReactElement } from 'react';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { allSelectItemsData } from '@data/allSelectItemsData';
import ButtonCustom from '@components/ButtonCustom';
import DatePickerCustom from '@components/datePicker/DatePickerCustom';
import InputSelect from '@components/input/InputSelect';

export default function BookingForm(): ReactElement {
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
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={(theme) => ({
                width: '100%',
            })}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Box
                    sx={(theme) => ({
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        rowGap: theme.spacing(4),
                        width: '100%',
                    })}>
                    <Controller
                        name="arrival"
                        control={control}
                        render={({ field }) => (
                            <DatePickerCustom
                                fullWidth
                                label={'Chegada'}
                                value={field.value ?? null}
                                onChange={field.onChange}
                                main
                            />
                        )}
                    />
                    <Controller
                        name="exit"
                        control={control}
                        render={({ field }) => (
                            <DatePickerCustom
                                fullWidth
                                label={'Saída'}
                                value={field.value ?? null}
                                onChange={field.onChange}
                                main
                            />
                        )}
                    />
                    <Controller
                        name="person"
                        control={control}
                        render={({ field }) => (
                            <InputSelect
                                fullWidth
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
    );
}
