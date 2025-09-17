import type { ElementType } from 'react';

export type ButtonWithIconProps = {
     buttonName?: string;
     buttonIcon?: ElementType;
     main?: boolean;
     onClick?: () => void;
     submit?: boolean;
     fullWidth?: boolean;
};
