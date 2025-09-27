import type { Theme } from '@mui/material';

export const destinesSx = (theme: Theme) => ({
    destinesMainContainerSx: {
        paddingTop: theme.spacing(25),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingX: theme.spacing(16),
    },
    destinesPropertiesContainerSx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});
