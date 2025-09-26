import { Box, Grid, useTheme } from '@mui/material';
import { useMemo, useRef, type ReactElement } from 'react';
import MainText from './MainText';
import { mainTexts } from '@data/mainTexts';
import { useMainContentAnimation } from '@hooks/useAnimation';
import GridMainText from './GridMainText';
import ContainerMainDestination from './MainContainerDestination';
import { presentationContainerSx } from './presentationContainer.styles';

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
    useMainContentAnimation(container, mainText);

    return (
        <Box
            className={className}
            ref={container}
            sx={presentationStyles.boxContainer}>
            {/* Importação o objeto declarado no fim do arquivo */}
            <Box sx={presentationStyles.boxImage}>
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
