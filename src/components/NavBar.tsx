import { Box, List, ListItem } from '@mui/material';
import type { ReactElement, RefObject } from 'react';
import type { ItemNavProps } from '../types/ItemNavProps';

export default function NavBar(props: {
     refNav: RefObject<HTMLElement | null>;
     headerItemsNav: Array<ItemNavProps>;
}): ReactElement {
     return (
          <Box
               ref={props.refNav}
               component="nav">
               <List
                    component="ul"
                    sx={{
                         xs: {
                              height: '100%',
                              flexDirection: 'column',
                         },
                         md: {
                              flexDirection: 'row',
                              width: '100%',
                         },
                    }}>
                    {props.headerItemsNav.map((el) => (
                         <ListItem key={el.index}>{el.nameItem}</ListItem>
                    ))}
               </List>
          </Box>
     );
}
