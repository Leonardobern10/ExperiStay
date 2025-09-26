import {
    Box,
    Paper,
    Typography,
    useTheme,
    type SxProps,
    type Theme,
} from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import type { ExclusiveDestinyProps } from '../../../types/ExcluviseDestinyProps';
import ImageCustom from '@components/ui/ImageCustom';

type StyleCustom = {
    paperSx: SxProps<Theme>;
    boxImageSx: SxProps<Theme>;
    boxBackgroundSx: SxProps<Theme>;
    boxTextSx: SxProps<Theme>;
    typographySx: SxProps<Theme>;
};

const styleCustom = (theme: Theme): StyleCustom => ({
    paperSx: {
        height: '25rem',
        minWidth: '19rem',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
    },
    boxImageSx: {
        position: 'relative',
        height: '70%',
    },
    boxBackgroundSx: {
        position: 'absolute',
        background:
            'linear-gradient(180deg, rgba(42, 123, 155, 0) 0%, rgba(14, 12, 12, 0.77) 69%, rgba(0, 0, 0, 1) 100%)',
        width: '100%',
        height: '100%',
        bottom: 0,
        left: 0,
        zIndex: 0, // fica atrás de tudo
    },
    boxTextSx: {
        position: 'absolute',
        bottom: 0,
        zIndex: 2, // acima do gradiente
        color: 'white',
        width: '100%',
        padding: theme.spacing(4),
    },
    typographySx: {
        color: theme.palette.text.secondary,
    },
});

export default function ExclusiveComponent(
    data: ExclusiveDestinyProps,
): ReactElement {
    const theme = useTheme();
    const style = useMemo(() => styleCustom(theme), [theme]);
    return (
        <Paper
            variant="elevation"
            sx={style.paperSx}>
            {/* Imagem */}
            <Box sx={style.boxImageSx}>
                <ImageCustom
                    src={data.img}
                    alt={`Imagem do destino ${data.name}`}
                />
            </Box>

            {/* Texto */}
            <Box sx={style.boxTextSx}>
                <Typography variant="h3">{data.name}</Typography>
                <Typography
                    sx={style.typographySx}
                    variant="body1">
                    {data.available} propriedades disponíveis
                </Typography>
            </Box>

            {/* Gradiente de fundo */}
            <Box sx={style.boxBackgroundSx} />
        </Paper>
    );
}
