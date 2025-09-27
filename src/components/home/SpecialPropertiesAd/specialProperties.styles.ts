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
        paddingY: theme.spacing(10),
    },
    descriptionSx: {
        width: '80%',
        textAlign: 'center',
        opacity: '70%',
        fontWeight: 200,
    },
});

export const specialPropertiesSx = (theme: Theme): SpecialPropertiesSxType => ({
    sectionSx: {
        width: '70%',
        border: 0.5,
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
    },
    boxTitleSx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});
