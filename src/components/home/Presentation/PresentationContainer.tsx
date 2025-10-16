import { Box, Grid, useTheme } from '@mui/material';
import { useMemo, useRef, type ReactElement } from 'react';
import MainText from './MainText';
import { mainTexts } from '@data/mainTexts';
import GridMainText from './GridMainText';
import ContainerMainDestination from './MainContainerDestination';
import { presentationContainerSx } from './presentationContainer.styles';
import { motion } from 'motion/react';

export default function PresentationContainer({
    className,
}: {
    className?: string;
}): ReactElement {
    const container = useRef(null);
    const mainText = useRef(null);
    const theme = useTheme();
    const presentationStyles = useMemo(
        () => presentationContainerSx(theme),
        [theme],
    );

    return (
        <Box
            className={className}
            ref={container}
            sx={presentationStyles.boxContainer}>
            {/* Importação o objeto declarado no fim do arquivo */}
            <Box
                component={motion.div}
                sx={presentationStyles.boxImage}
                initial={{ opacity: 0, x: '-50%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}>
                <GridMainText
                    children={
                        <MainText
                            ref={mainText}
                            title={mainTexts.title}
                            desc={mainTexts.desc}
                        />
                    }
                />
                {/* Importação o objeto declarado no fim do arquivo */}
                <Grid sx={presentationStyles.gridCustom}>
                    <ContainerMainDestination />
                </Grid>
            </Box>
        </Box>
    );
}
