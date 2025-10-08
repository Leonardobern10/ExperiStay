import type { Theme } from '@mui/material';
import type { footerContainerSxType } from './footer.types';

export const footerContainerSx = (theme: Theme): footerContainerSxType => ({
    sectionHomeSx: {
        height: '100%',
        backgroundColor: theme.palette.secondary.main,
        rowGap: theme.spacing(1),
        padding: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            height: '70vh',
            rowGap: theme.spacing(4),
        },
    },
    containerFooterSx: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70%',
        width: '100%',
    },
    containerMainSx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: {
            xs: 'center',
            md: 'flex-start',
        },
        width: { xs: '100%', md: '40%' },
        rowGap: theme.spacing(4),
    },
    typographySx: {
        opacity: '70%',
        width: 'fit-content',
        fontWeight: 300,
    },
    containerNavSx: {
        display: 'flex',
        flexDirection: 'row',
        paddingY: theme.spacing(4),
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
    },
});
