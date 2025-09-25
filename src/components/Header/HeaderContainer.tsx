import { Box, type Theme } from '@mui/material';
import { useRef, type ReactElement, type RefObject } from 'react';
import { headerItemsNav } from '@data/headerItemsNav';
import useWidth from '@hooks/useWidth';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { useHeaderAnimation } from '@hooks/useAnimation';

export default function HeaderContainer(props: {
     className?: string;
}): ReactElement {
     let width: boolean = useWidth('md');
     let elem3: RefObject<null | HTMLButtonElement> = useRef(null);
     const elem1: RefObject<null | HTMLElement> = useRef(null);
     const elem2: RefObject<null | HTMLElement> = useRef(null);

     useHeaderAnimation(elem1, elem2, elem3);

     return (
          <Box
               zIndex={1000}
               className={props.className}
               sx={customBox}>
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

// Estilização para o Box
const customBox = (theme: Theme) => ({
     position: 'fixed',
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     minHeight: 'fit-content',
     maxHeight: '4rem',
     width: '100vw',
     backgroundColor: theme.palette.background.default,
});
