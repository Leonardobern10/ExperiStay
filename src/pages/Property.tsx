import type { ReactElement } from 'react';
import test from '@images/Gemini_Generated_Image_y0d4kby0d4kby0d4.png';
import { PageContainer } from '@components/ui/PageContainer';
import { Box } from '@mui/material';
import MainPropertyImage from '@components/property/MainPropertyImage';
import InfoProperty from '@components/property/InfoProperty';
import RatingProperty from '@components/property/RatingProperty';

export default function Property(): ReactElement {
     return (
          <PageContainer sx={(theme) => ({ marginTop: theme.spacing(12) })}>
               <Box
                    sx={(theme) => ({
                         paddingY: theme.spacing(10),
                         width: '90%',
                    })}>
                    <MainPropertyImage testImage={test} />
                    <InfoProperty />
                    <RatingProperty />
               </Box>
          </PageContainer>
     );
}
