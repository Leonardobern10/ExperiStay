import type { ReactElement } from 'react';
import type { ButtonWithIconProps } from '../types/ButtonWithIconProps';
import { Button } from '@mui/material';

export default function ButtonCustom({
     buttonName,
     buttonIcon: Icon,
     onClick,
     main,
     ref,
     submit,
}: ButtonWithIconProps): ReactElement {
     return (
          <Button
               ref={ref}
               variant={main ? 'main' : 'default'}
               onClick={onClick}
               type={submit ? 'submit' : 'button'}
               startIcon={Icon ? <Icon /> : undefined}>
               {buttonName}
          </Button>
     );
}
