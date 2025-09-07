import { Box, Card, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { HighlightType } from '../../types/HighlightType';
import ImageComponent from '../ImageComponent';
import RatingValue from '../RatingValue';
import LikedComponent from '../LikedComponent';
import PriceHighlight from './PriceHighlight';
import DescriptionHighlight from './DescriptionHighlight';
import LabelHighlight from './LabelHighlight';

export default function HighlightComponent(
     hightLightData: HighlightType,
): ReactElement {
     return (
          <Card
               sx={{
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    borderRadius: (theme) => theme.shape.borderRadius,
                    height: '33rem',
                    overflow: 'hidden',
               }}>
               <Box
                    sx={{
                         height: '50%',
                         width: '100%',
                         position: 'relative',
                    }}>
                    <ImageComponent
                         src={hightLightData.img}
                         alt={`imagem do imovel em destaque ${hightLightData.name} no(a) ${hightLightData.location}`}
                    />
                    <RatingValue value={hightLightData.rating} />
                    <LabelHighlight labelName={hightLightData.label} />
               </Box>
               <Box
                    sx={{
                         height: '100%',
                         paddingY: (theme) => theme.spacing(4),
                         paddingX: (theme) => theme.spacing(6),
                         display: 'flex',
                         flexDirection: 'column',
                         rowGap: (theme) => theme.spacing(3),
                    }}>
                    <Box>
                         <Typography variant="h3">
                              {hightLightData.name}
                         </Typography>
                         <Typography
                              variant="body1"
                              color="textSecondary">
                              {hightLightData.location}
                         </Typography>
                    </Box>
                    <DescriptionHighlight
                         description={hightLightData.description}
                    />
                    <Box
                         sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                         }}>
                         <PriceHighlight value={hightLightData.price} />
                         <LikedComponent liked={hightLightData.liked} />
                    </Box>
               </Box>
          </Card>
     );
}
