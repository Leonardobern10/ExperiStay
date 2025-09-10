import { Box, Typography } from '@mui/material';
import { forwardRef, type ReactElement } from 'react';
import type { MainTextProps } from '../../types/MainTextProps';
import useWidth from '@hooks/useWidth';
import { slideAnimation } from '@hooks/useAnimation';

const MainText = forwardRef<HTMLDivElement, MainTextProps>(
     ({ title, desc }, ref): ReactElement => {
          let width: boolean = useWidth('md');
          slideAnimation('.mainTextAnimated');

          return (
               <Box
                    ref={ref}
                    sx={(theme) => ({
                         width: `${width ? '80%' : '100%'}`,
                         height: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'space-between',
                         rowGap: theme.spacing(2),
                         borderRadius: theme.shape.borderRadius,
                    })}>
                    <Box
                         className="mainTextAnimated"
                         sx={(theme) => ({
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              width: '100%',
                              rowGap: theme.spacing(2),
                         })}>
                         <Typography
                              className="textAnimated"
                              variant="h1">
                              {title}
                         </Typography>
                         {width && (
                              <Typography
                                   variant="subtitle1"
                                   sx={{
                                        textShadow: '1px 1px 1px black',
                                        letterSpacing: 0.7,
                                   }}>
                                   {desc}
                              </Typography>
                         )}
                    </Box>
                    {/*<ButtonWithIcon buttonName="Exibir catálogo" buttonIcon={RealEstateAgentIcon}> */}
               </Box>
          );
     },
);

export default MainText;
