import { Box } from '@mui/material';
import { useEffect, useState, type ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import type { Moment } from 'moment';
import InputSelect from '../InputSelect';
import DatePickerCustom from '../DatePickerCustom';
import SearchIcon from '@mui/icons-material/Search';
import ButtonCustom from '@components/ButtonCustom';

export default function ContainerMainDestination(): ReactElement {
     const [arrival, setArrival] = useState<Moment | null>(null);
     const [exit, setExit] = useState<Moment | null>(null);

     useEffect(() => {
          console.log(arrival, exit);
     }, [arrival?.format('L'), exit?.format()]);

     return (
          <LocalizationProvider dateAdapter={AdapterMoment}>
               <Box
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
                    <DatePickerCustom
                         label="Chegada"
                         value={arrival}
                         onChange={(newArrival) => setArrival(newArrival)}
                    />
                    <DatePickerCustom
                         label="Saída"
                         value={exit}
                         onChange={(newExit) => setExit(newExit)}
                    />
                    <InputSelect />
                    <ButtonCustom
                         main={true}
                         buttonIcon={SearchIcon}
                         buttonName="Buscar"
                    />
               </Box>
          </LocalizationProvider>
     );
}
