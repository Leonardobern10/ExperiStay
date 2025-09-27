import { FormControl, InputLabel, MenuItem, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import SelectCustomUI from '@components/ui/SelectCustomUI';
import type { InputSelectProps } from '../types/InputSelectProps';
import { InputSelectSx } from './InputSelect.styles';

export default function InputSelect({
    value,
    onChange,
    label,
    allItems,
    fullWidth,
}: InputSelectProps): ReactElement {
    const theme = useTheme();
    const inputSelectStyles = useMemo(
        () => InputSelectSx(theme),
        [theme, fullWidth],
    );
    return (
        <FormControl sx={inputSelectStyles.formSx}>
            <InputLabel
                sx={inputSelectStyles.inputLabelSx}
                color="primary"
                id="demo-simple-select-label">
                {label}
            </InputLabel>
            <SelectCustomUI
                sx={inputSelectStyles.selectCustomSx}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={label}
                onChange={(e: any) => onChange(e.target.value)}
                MenuProps={{
                    PaperProps: {
                        sx: inputSelectStyles.paperPropsSx,
                    },
                }}>
                {allItems.map((el) => (
                    <MenuItem
                        key={el.selectIndex}
                        value={el.selectValue}>
                        {el.selectName}
                    </MenuItem>
                ))}
            </SelectCustomUI>
        </FormControl>
    );
}
