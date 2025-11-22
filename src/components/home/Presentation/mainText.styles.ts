import type { Theme } from '@mui/material';
import type { MainTextSxType } from './presentation.types';

export const mainTextSx = (theme: Theme): MainTextSxType => ({
    mainTextContainer: {
        marginTop: theme.spacing(13),
        width: '80%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        rowGap: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.up('md')]: {
            width: '100%',
            marginTop: theme.spacing(0),
        },
    },
    boxTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        rowGap: theme.spacing(2),
    },
    typographySx: {
        textShadow: '1px 1px 1px black',
        letterSpacing: 0.7,
    },
});
