import { Avatar } from '@mui/material';
import type { ReactElement } from 'react';

export default function AvatarUserRating(props: {
     userName: string;
}): ReactElement {
     const getInitials = () => {
          let string = props.userName.split(' ');
          let initials = '';
          string.forEach((el) => {
               initials += el[0];
          });
          return initials;
     };

     return (
          <Avatar
               sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    fontSize: '16px',
               }}
          >
               {getInitials()}
          </Avatar>
     );
}
