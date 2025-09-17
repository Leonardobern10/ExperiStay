import { Rating, Stack, Typography, Card } from '@mui/material';
import type { ReactElement } from 'react';
import type { RatingProps } from '../types/RatingProps';
import AvatarUserRating from './home/Ratings/AvatarUserRating';

export default function RatingComponent(data: RatingProps): ReactElement {
     return (
          <Card
               sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: '30%',
                    maxWidth: '30rem',
                    padding: theme.spacing(6),
                    rowGap: theme.spacing(4),
               })}>
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
                         fontStyle: 'italic',
                    }}
                    variant="body1">
                    "{data.textRating}"
               </Typography>
               <Stack
                    direction="row"
                    justifyContent="flex-start"
                    spacing={3}>
                    <AvatarUserRating userName={data.name} />
                    <Stack
                         direction="column"
                         alignItems="flex-start">
                         <Typography>{data.name}</Typography>
                         <Typography
                              sx={{
                                   opacity: '70%',
                                   fontWeight: 200,
                              }}>
                              {data.location}
                         </Typography>
                    </Stack>
               </Stack>
          </Card>
     );
}
