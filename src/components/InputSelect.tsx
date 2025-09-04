import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState, type ReactElement } from "react";
import SelectCustomUI from "./ui/InputCustomUI";

export default function InputSelect(): ReactElement {

    const [location, setLocation] = useState<string | null>(null);

    const handleChange = (e: any) => {
        setLocation(e.target.value)
    }

    return (
        <FormControl>
            <InputLabel color='secondary' id="demo-simple-select-label">Location</InputLabel>
            <SelectCustomUI
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={'Rio de Janeiro'}>Rio de Janeiro</MenuItem>
                <MenuItem value={'São Paulo'}>São Paulo</MenuItem>
                <MenuItem value={'Curitiba'}>Curitiba</MenuItem>
            </SelectCustomUI>
        </FormControl>
    )
}