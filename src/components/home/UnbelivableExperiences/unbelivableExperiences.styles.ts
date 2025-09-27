import type { Theme } from '@mui/material';
import type {
    ExperienceComponentSxType,
    UnbelivableExperiencesSxType,
} from './unbelivableExperiences.types';

export const experienceComponentSx = (
    theme: Theme,
): ExperienceComponentSxType => ({
    cardSx: {
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        rowGap: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(8),
        },
    },
    boxTitleSx: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: theme.spacing(4),
    },
    boxAlertSx: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: theme.spacing(2),
    },
});

export const unbelivableExperiencesSx = (
    theme: Theme,
): UnbelivableExperiencesSxType => ({
    boxTitleSx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    boxMobileSx: {
        width: '100%',
        height: '100%',
        paddingX: theme.spacing(4),
    },
});
