import { Box, Card, Skeleton, Stack, useTheme } from '@mui/material';
import { highlightComponentSx } from './home/highlights/HighlightsComponent.styles';
import { useMemo } from 'react';

const skeletonProps = {
    width: '100%',
    height: 100,
};

export default function SkeletonDestine() {
    const theme = useTheme();
    const highlightStyles = useMemo(() => highlightComponentSx(theme), [theme]);
    return (
        <Card sx={highlightStyles.cardSx}>
            <Skeleton
                variant="rectangular"
                height={300}
                width={skeletonProps.width}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 4,
                }}>
                <Skeleton
                    variant="text"
                    height={50}
                    width={skeletonProps.width}
                />
                <Skeleton
                    variant="text"
                    height={30}
                    width={skeletonProps.width}
                />
                <Skeleton
                    variant="text"
                    width={skeletonProps.width}
                    height={80}
                />
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        paddingBottom: 4,
                    }}>
                    <Skeleton
                        variant="text"
                        width="70%"
                        height={60}
                    />
                    <Skeleton
                        variant="rounded"
                        width={40}
                        height={30}
                    />
                </Stack>
            </Box>
        </Card>
    );
}
