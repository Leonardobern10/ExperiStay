import { useMemo, type ReactElement } from 'react';
import type { DatePickerProps } from '../types/DatePickerProps';
import DatePickerUI from '@components/ui/DatePickerUI';
import { useTheme } from '@mui/material';
import { datePickerSx } from './DatePickerCustom.styles';

export default function DatePickerCustom({
    label,
    value,
    onChange,
    fullWidth,
    main,
}: DatePickerProps): ReactElement {
    const theme = useTheme();
    const datePickerStyles = useMemo(
        () => datePickerSx(theme, fullWidth, main),
        [theme, fullWidth, main],
    );
    return (
        <DatePickerUI
            sx={datePickerStyles.datePickerSx}
            slotProps={{
                openPickerIcon: {
                    sx: datePickerStyles.openPickerSx,
                },
            }}
            label={label}
            value={value}
            onChange={onChange}
        />
    );
}
