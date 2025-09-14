import { forwardRef, type ReactElement } from 'react';
import type { ButtonWithIconProps } from '../types/ButtonWithIconProps';
import { Button } from '@mui/material';

const ButtonCustom = forwardRef<HTMLButtonElement, ButtonWithIconProps>(
     ({ main, onClick, submit, buttonIcon, buttonName }, ref): ReactElement => {
          const Icon = buttonIcon;

          return (
               <Button
                    ref={ref}
                    variant={main ? 'main' : 'default'}
                    onClick={onClick}
                    type={submit ? 'submit' : 'button'}
                    startIcon={Icon ? <Icon /> : undefined}>
                    {buttonName && buttonName}
               </Button>
          );
     },
);

export default ButtonCustom;
