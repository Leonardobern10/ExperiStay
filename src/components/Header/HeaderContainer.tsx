import { Box, useTheme, type Theme } from '@mui/material';
import { useMemo, useRef, type ReactElement, type RefObject } from 'react';
import { headerItemsNav } from '@data/headerItemsNav';
import useWidth from '@hooks/useWidth';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { headerContainerSx } from './header.styles';
import { motion } from 'motion/react';

export default function HeaderContainer(props: {
    className?: string;
}): ReactElement {
    let width: boolean = useWidth('md');
    let elem3: RefObject<null | HTMLButtonElement> = useRef(null);
    const elem1: RefObject<null | HTMLElement> = useRef(null);
    const elem2: RefObject<null | HTMLElement> = useRef(null);
    const theme: Theme = useTheme();
    const boxSx = useMemo(() => headerContainerSx(theme), [theme]);

    return (
        <Box
            component={motion.header}
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            zIndex={1000}
            className={props.className}
            sx={boxSx}>
            {width ? (
                <HeaderDesktop
                    refLogo={elem1}
                    refNav={elem2}
                    refButton={elem3}
                    headerItemsNav={headerItemsNav}
                />
            ) : (
                <HeaderMobile
                    refLogo={elem1}
                    refButton={elem3}
                    headerItemsNav={headerItemsNav}
                />
            )}
        </Box>
    );
}
