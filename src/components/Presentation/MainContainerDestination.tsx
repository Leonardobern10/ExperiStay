import { Box } from "@mui/material";
import { useEffect, useState, type ReactElement } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import type { Moment } from "moment";
import InputSelect from "../InputSelect";
import DatePickerCustom from "../DatePickerCustom";
import ButtonWithIcon from "../ButtonWithIcon";
import SearchIcon from '@mui/icons-material/Search';

export default function ContainerMainDestination(): ReactElement {

    const [arrival, setArrival] = useState<Moment | null>(null);
    const [exit, setExit] = useState<Moment | null>(null);

    useEffect(() => {
        console.log(arrival, exit);
    }, [arrival?.format('L'), exit?.format()])

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Box component="form" sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly", // centraliza
                alignItems: "center",
                columnGap: 4,
            }}>

                <DatePickerCustom label="Chegada" value={arrival} onChange={(newArrival) => setArrival(newArrival)} />
                <DatePickerCustom label="Saída" value={exit} onChange={(newExit) => setExit(newExit)} />
                <InputSelect />
                <ButtonWithIcon buttonIcon={SearchIcon} buttonName="Buscar" />
            </Box>
        </LocalizationProvider>

    )

}