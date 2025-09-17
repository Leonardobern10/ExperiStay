import { Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import CircleIcon from '@mui/icons-material/Circle';

export default function AcomodationsItem({
     acomodationItemName,
}: {
     acomodationItemName: string;
}): ReactElement {
     return (
          <Stack
               direction="row"
               justifyContent="flex-start"
               spacing={2}>
               <CircleIcon sx={{ fontSize: 10 }} />
               <Typography variant="body1">{acomodationItemName}</Typography>
          </Stack>
     );
}
