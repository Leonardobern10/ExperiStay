import { Avatar, useTheme } from '@mui/material';
import { getInitials } from '@services/avatarService';
import { useMemo, type ReactElement } from 'react';
import { avatarSx } from './ratings.styles';

export default function AvatarUserRating({
    userName,
}: {
    userName: string;
}): ReactElement {
    const theme = useTheme();
    const avatarStyle = useMemo(() => avatarSx(theme), [theme]);
    return <Avatar sx={avatarStyle}>{getInitials(userName)}</Avatar>;
}
