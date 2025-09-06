import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import { advantages, dataContainer } from '../../data/specialPropertiesAdData';
import AdvantagePropertiesAdComponent from './AdvantagePropertiesAdComponent';
import ButtonCustom from '../ButtonWithIcon';
import MainTitle from '../Presentation/MainTitle';
import ContainerSectionHome from '../ui/ContainerSectionHome';

export default function SpecialPropertiesAdContainer(props: {
     className: string;
}): ReactElement {
     return (
          <ContainerSectionHome
               className={props.className}
               sx={{
                    width: '95%',
                    border: 0.5,
                    paddingY: (theme) => theme.spacing(10),
                    borderColor: (theme) => theme.palette.primary.contrastText,
                    borderRadius: (theme) => theme.shape.borderRadius,
               }}>
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                    }}>
                    <MainTitle
                         string={dataContainer.title + '?'}
                         align="center"
                    />
                    <Typography variant="subtitle2">
                         {dataContainer.subtitle}
                    </Typography>
               </Box>
               <Stack
                    direction="row"
                    spacing={4}>
                    {advantages.map((el) => (
                         <AdvantagePropertiesAdComponent
                              key={el.index}
                              title={el.title}
                              description={el.description}
                         />
                    ))}
               </Stack>
               <Stack
                    direction="row"
                    spacing={8}>
                    <ButtonCustom buttonName={dataContainer.buttonRegister} />
                    <ButtonCustom buttonName={dataContainer.buttonMore} />
               </Stack>
          </ContainerSectionHome>
     );
}
