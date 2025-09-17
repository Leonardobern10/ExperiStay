import ImagePropertyComponent from '@components/ImagePropertyComponent';
import { Box } from '@mui/material';
import type { ReactElement } from 'react';

export default function MainPropertyImage({
     testImage,
}: {
     testImage: string;
}): ReactElement {
     return (
          <Box sx={{ height: '60vh' }}>
               <ImagePropertyComponent
                    src={testImage}
                    name="text"
                    rating={5}
                    location="Miami"
                    label="Muito bom"
                    full
               />
          </Box>
     );
}
