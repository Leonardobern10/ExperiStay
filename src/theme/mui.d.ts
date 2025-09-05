import type {} from '@mui/material/Button';

declare module '@mui/material/Button' {
     interface ButtonPropsVariantOverrides {
          main: true;
          default: true;
     }
}
