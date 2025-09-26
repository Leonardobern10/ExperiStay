import { Stack, Typography, useTheme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import type { FooterNavListProps } from '../../../types/FooterNavListProps';
import { footerNavListSx } from './FooterNavList.styles';

export default function FooterNavList(
    footerData: FooterNavListProps,
): ReactElement {
    const theme = useTheme();
    const styleSx = useMemo(() => footerNavListSx(theme), [theme]);
    return (
        <Stack sx={styleSx.stackSx}>
            <Typography
                variant="body1"
                sx={styleSx.typographyTitleSectionSx}>
                {footerData.title}
            </Typography>
            {footerData.items.map((el, index) => (
                <Typography
                    variant="body2"
                    key={index}
                    sx={styleSx.typographyAllSectionsSx}>
                    {el}
                </Typography>
            ))}
        </Stack>
    );
}
