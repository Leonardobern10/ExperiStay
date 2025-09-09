import type { ReactElement } from 'react';
import type { DatePickerProps } from '../types/DatePickerProps';
import DatePickerUI from '@components/ui/DatePickerUI';

export default function DatePickerCustom({
     label,
     value,
     onChange,
}: DatePickerProps): ReactElement {
     return (
          <DatePickerUI
               slotProps={{
                    openPickerIcon: {
                         sx: (theme) => ({ color: theme.palette.primary.main }),
                    },
               }}
               label={label}
               value={value}
               onChange={onChange}
          />
     );
}
