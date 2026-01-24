import type { Theme } from '@mui/material';
import type {
    AdvantagePropertiesSxType,
    SpecialPropertiesSxType,
} from './specialProperties.types';

export const advantagePropertiesSx = (
    theme: Theme,
): AdvantagePropertiesSxType => ({
    boxSx: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'stretch',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        rowGap: theme.spacing(2),
        width: '100%',
        height: 'fit-content',
        [theme.breakpoints.up('md')]: {
            height: '100%',
        },
    },
    descriptionSx: {
        width: '100%',
        paddingRight: theme.spacing,
        paddingLeft: theme.spacing,
        textAlign: 'center',
        opacity: '70%',
        fontWeight: 200,
        [theme.breakpoints.up('md')]: {
            width: '90%',
        },
    },
});

export const specialPropertiesSx = (theme: Theme): SpecialPropertiesSxType => ({
    sectionSx: {
        width: '80%',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        borderColor: theme.palette.primary.contrastText,
        borderRadius: theme.shape.borderRadius,
        marginBottom: theme.spacing(20),
    },
    propertySx: {
        flexDirection: {
            sx: 'column',
            md: 'row',
        },
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        columnGap: theme.spacing(8),
    },
    boxTitleSx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        rowGap: theme.spacing(2),
    },
    stackButtonSx: {
        flexDirection: 'column',
        rowGap: theme.spacing(5),
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            columnGap: theme.spacing(8),
        },
    },
});
