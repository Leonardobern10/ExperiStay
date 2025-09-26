import { Box, Typography, useTheme } from '@mui/material';
import { forwardRef, useMemo, type ReactElement } from 'react';
import type { MainTextProps } from '../../../types/MainTextProps';
import useWidth from '@hooks/useWidth';
import { slideAnimation } from '@hooks/useAnimation';
import { mainTextSx } from './mainText.styles';

const MainText = forwardRef<HTMLDivElement, MainTextProps>(
    ({ title, desc }, ref): ReactElement => {
        let width: boolean = useWidth('md');
        slideAnimation('.mainTextAnimated');
        const theme = useTheme();
        const mainTextStyle = useMemo(() => mainTextSx(theme), [theme]);
        return (
            <Box
                ref={ref}
                sx={mainTextStyle.mainTextContainer}>
                <Box
                    className="mainTextAnimated"
                    sx={mainTextStyle.boxTitle}>
                    <Typography
                        className="textAnimated"
                        variant="h1">
                        {title}
                    </Typography>
                    {width && (
                        <Typography
                            variant="subtitle1"
                            sx={mainTextStyle.typographySx}>
                            {desc}
                        </Typography>
                    )}
                </Box>
            </Box>
        );
    },
);

export default MainText;
