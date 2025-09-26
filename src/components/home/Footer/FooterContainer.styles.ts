import type { Theme } from '@mui/material';
import type { footerContainerSxType } from './footer.types';

export const footerContainerSx = (theme: Theme): footerContainerSxType => ({
    sectionHomeSx: {
        height: { xs: '100%', md: '70vh' },
        backgroundColor: theme.palette.secondary.main,
        rowGap: {
            xs: theme.spacing(1),
            md: theme.spacing(4),
        },
    },
    containerFooterSx: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70%',
        width: '100%',
        padding: 8,
    },
    containerMainSx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: {
            xs: 'center',
            md: 'flex-start',
        },
        width: { xs: '100%', md: '30%' },
        rowGap: theme.spacing(4),
    },
    typographySx: {
        opacity: '70%',
        fontWeight: 300,
    },
    containerNavSx: {
        display: 'flex',
        flexDirection: 'row',
        paddingY: theme.spacing(4),
        paddingX: theme.spacing(8),
        columnGap: theme.spacing(2),
    },
    containerRightsSx: {
        flexDirection: {
            xs: 'column-reverse',
            md: 'row',
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        width: '100%',
        paddingX: {
            xs: theme.spacing(0),
            md: theme.spacing(8),
        },
    },
});
