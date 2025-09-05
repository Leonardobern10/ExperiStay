import { Paper, Rating, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { RatingProps } from '../../types/RatingProps';
import AvatarUserRating from './AvatarUserRating';

export default function RatingComponent(data: RatingProps): ReactElement {
     return (
          <Paper
               elevation={4}
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '30%',
                    padding: (theme) => theme.spacing(6),
                    rowGap: (theme) => theme.spacing(4),
                    borderRadius: (theme) => theme.shape.borderRadius,
               }}
          >
               <Rating
                    sx={{
                         opacity: '70%',
                    }}
                    precision={0.5}
                    value={data.rating}
                    readOnly
               />
               <Typography
                    sx={{
                         opacity: '80%',
                         fontWeight: 200,
                         fontStyle: 'italic',
                    }}
                    variant="body2"
               >
                    "{data.textRating}"
               </Typography>
               <Stack
                    direction="row"
                    justifyContent="flex-start"
                    spacing={3}
               >
                    <AvatarUserRating userName={data.name} />
                    <Stack
                         direction="column"
                         alignItems="flex-start"
                    >
                         <Typography>{data.name}</Typography>
                         <Typography
                              sx={{
                                   opacity: '70%',
                                   fontWeight: 200,
                              }}
                         >
                              {data.location}
                         </Typography>
                    </Stack>
               </Stack>
          </Paper>
     );
}
