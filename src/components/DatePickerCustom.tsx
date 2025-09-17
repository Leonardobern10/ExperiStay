import type { ReactElement } from 'react';
import type { DatePickerProps } from '../types/DatePickerProps';
import DatePickerUI from '@components/ui/DatePickerUI';

export default function DatePickerCustom({
     label,
     value,
     onChange,
     fullWidth,
     main,
}: DatePickerProps): ReactElement {
     return (
          <DatePickerUI
               sx={(theme) => ({
                    width: `${fullWidth && '100%'}`,
                    backgroundColor: `${main && theme.palette.primary.dark}`,
               })}
               slotProps={{
                    openPickerIcon: {
                         sx: (theme) => ({
                              color: theme.palette.primary.main,
                         }),
                    },
               }}
               label={label}
               value={value}
               onChange={onChange}
          />
     );
}
