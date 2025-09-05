import { Box, Typography } from '@mui/material';
import { forwardRef, type ReactElement } from 'react';
import type { MainTextProps } from '../../types/MainTextProps';
import useWidth from '../../hooks/useWidth';
import MainTitle from './MainTitle';

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
                         padding: (theme) => theme.spacing(4),
                         borderRadius: (theme) => theme.shape.borderRadius,
                    }}
               >
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: (theme) => theme.spacing(2),
                         }}
                    >
                         <MainTitle string={title} />
                         {width && (
                              <Typography
                                   variant="subtitle1"
                                   sx={{ textShadow: '1px 1px 1px black' }}
                                   color="textPrimary"
                              >
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
