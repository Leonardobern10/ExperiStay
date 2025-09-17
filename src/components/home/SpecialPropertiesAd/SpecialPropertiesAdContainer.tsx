import { Box, Stack, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import { advantages, dataContainer } from '@data/specialPropertiesAdData';
import AdvantagePropertiesAdComponent from './AdvantagePropertiesAdComponent';
import MainTitle from '../MainTitle';
import ContainerSectionHome from '@components/ui/ContainerSectionHome';
import ButtonCustom from '@components/ButtonCustom';

export default function SpecialPropertiesAdContainer(props: {
     className: string;
}): ReactElement {
     return (
          <ContainerSectionHome
               className={props.className}
               sx={(theme) => ({
                    width: '95%',
                    border: 0.5,
                    paddingY: theme.spacing(10),
                    borderColor: theme.palette.primary.contrastText,
                    borderRadius: theme.shape.borderRadius,
               })}>
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
                    {/** Subtitulo da seção */}
                    <Typography variant="subtitle2">
                         {dataContainer.subtitle}
                    </Typography>
               </Box>
               <Stack
                    spacing={4}
                    sx={(theme) => ({
                         flexDirection: {
                              sx: 'column',
                              md: 'row',
                         },
                         paddingX: theme.spacing(4),
                    })}>
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
                    <ButtonCustom
                         main
                         buttonName={dataContainer.buttonRegister}
                    />
                    <ButtonCustom buttonName={dataContainer.buttonMore} />
               </Stack>
          </ContainerSectionHome>
     );
}
