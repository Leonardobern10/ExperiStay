import { Box, Typography } from '@mui/material';
import { forwardRef, type ReactElement } from 'react';
import type { MainTextProps } from '../../types/MainTextProps';
import useWidth from '@hooks/useWidth';
import BannerTitle from './BannerTitle';

const MainText = forwardRef<HTMLDivElement, MainTextProps>(
     ({ title, desc }, ref): ReactElement => {
          let width: boolean = useWidth('md');

          return (
               <Box
                    ref={ref}
                    sx={{
                         width: `${width ? '80%' : '100%'}`,
                         display: 'flex',
                         flexDirection: 'column',
                         rowGap: (theme) => theme.spacing(2),
                         borderRadius: (theme) => theme.shape.borderRadius,
                    }}>
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              width: '100%',
                              rowGap: (theme) => theme.spacing(2),
                         }}>
                         <Typography
                              color="primary"
                              variant="h1">
                              {title}
                         </Typography>
                         {width && (
                              <Typography
                                   variant="subtitle1"
                                   sx={{
                                        textShadow: '1px 1px 1px black',
                                        letterSpacing: 0.7,
                                   }}
                                   color="primary">
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
