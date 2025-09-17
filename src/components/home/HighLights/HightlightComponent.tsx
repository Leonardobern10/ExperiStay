import { Box, Card, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import type { HighlightType } from '../../types/HighlightType';
import LikedComponent from '../LikedComponent';
import PriceHighlight from './PriceHighlight';
import DescriptionHighlight from './DescriptionHighlight';
import ImagePropertyComponent from '@components/ImagePropertyComponent';
import { useNavigate } from 'react-router';

export default function HighlightComponent(
     hightLightData: HighlightType,
): ReactElement {
     const navigate = useNavigate();

     return (
          <Card
               className="cardProperty"
               onClick={() => navigate(`/destinos/${hightLightData.index}`)}
               sx={(theme) => ({
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: theme.shape.borderRadius,
                    height: '33rem',
                    overflow: 'hidden',
               })}>
               <ImagePropertyComponent
                    src={hightLightData.img}
                    name={hightLightData.name}
                    label={hightLightData.label}
                    rating={hightLightData.rating}
                    location={hightLightData.location}
               />
               <Box
                    sx={(theme) => ({
                         height: '100%',
                         paddingY: theme.spacing(4),
                         paddingX: theme.spacing(6),
                         display: 'flex',
                         flexDirection: 'column',
                         rowGap: theme.spacing(3),
                    })}>
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
