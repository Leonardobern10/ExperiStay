import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { type ReactElement } from 'react';
import SelectCustomUI from '@components/ui/SelectCustomUI';

export default function InputSelect(props: {
     value: string | null;
     onChange: (value: string) => void;
     label: string;
}): ReactElement {
     return (
          <FormControl sx={{ minWidth: 120, maxWidth: '70%' }}>
               <InputLabel
                    sx={{
                         color: (theme) => theme.palette.primary.main,
                    }}
                    color="primary"
                    id="demo-simple-select-label">
                    {props.label}
               </InputLabel>
               <SelectCustomUI
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
                    <MenuItem value={'RJ'}>Rio de Janeiro</MenuItem>
                    <MenuItem value={'SP'}>São Paulo</MenuItem>
                    <MenuItem value={'Curitiba'}>Curitiba</MenuItem>
               </SelectCustomUI>
          </FormControl>
     );
}
