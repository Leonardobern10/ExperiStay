import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { type ReactElement } from 'react';
import SelectCustomUI from '@components/ui/SelectCustomUI';
import type { SelectItemType } from '../types/SelectItemType';

export default function InputSelect(props: {
     value: string | null;
     onChange: (value: string) => void;
     label: string;
     allItems: SelectItemType[];
     fullWidth?: boolean;
}): ReactElement {
     return (
          <FormControl
               sx={{
                    minWidth: '15rem',
                    width: `${props.fullWidth && '100%'}`,
               }}>
               <InputLabel
                    sx={(theme) => ({ color: theme.palette.primary.main })}
                    color="primary"
                    id="demo-simple-select-label">
                    {props.label}
               </InputLabel>
               <SelectCustomUI
                    sx={{ width: '100%' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.value}
                    label={props.label}
                    onChange={(e: any) => props.onChange(e.target.value)}
                    MenuProps={{
                         PaperProps: {
                              sx: {
                                   '& .MuiList-root': {
                                        display: 'block', // força layout vertical
                                   },
                              },
                         },
                    }}>
                    {props.allItems.map((el) => (
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
