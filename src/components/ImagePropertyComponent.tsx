import { Box } from '@mui/material';
import type { ReactElement } from 'react';
import ImageComponent from './ImageComponent';
import RatingValue from './RatingValue';
import LabelProperty from './HighLights/LabelHighlight';

export default function ImagePropertyComponent({
     src,
     name,
     location,
     rating,
     label,
     full,
}: {
     src: string;
     name: string;
     location: string;
     rating: number;
     label: string;
     full?: boolean;
}): ReactElement {
     return (
          <Box
               sx={{
                    height: `${full ? '100%' : '50%'}`,
                    width: '100%',
                    position: 'relative',
               }}>
               <ImageComponent
                    src={src}
                    alt={`imagem do imovel em destaque ${name} no(a) ${location}`}
               />
               <RatingValue value={rating} />
               <LabelProperty
                    highlight={true}
                    labelName={label}
               />
          </Box>
     );
}
