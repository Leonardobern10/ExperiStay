import type { Theme } from '@mui/material';
import type { footerNavListSxType } from './footer.types';

export const footerNavListSx = (theme: Theme): footerNavListSxType => ({
    stackSx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    typographyTitleSectionSx: {
        fontWeight: 500,
        paddingBottom: theme.spacing(3),
    },
    typographyAllSectionsSx: {
        opacity: '70%',
        fontWeight: 300,
        paddingY: theme.spacing(1),
    },
});
