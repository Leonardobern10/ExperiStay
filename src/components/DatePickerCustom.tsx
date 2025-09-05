import type { ReactElement } from 'react';
import type { DatePickerProps } from '../types/DatePickerProps';
import DatePickerUI from './ui/DatePickerUI';

export default function DatePickerCustom({
     label,
     value,
     onChange,
}: DatePickerProps): ReactElement {
     return (
          <DatePickerUI
               label={label}
               value={value}
               onChange={onChange}
          />
     );
}
