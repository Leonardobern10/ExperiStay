import { type ReactElement } from 'react';
import { Grid } from '@mui/material';
import PresentationContainer from '../components/Presentation/PresentationContainer';
import HeaderContainer from '../components/Header/HeaderContainer';
import PropertyHighlights from '../components/HighLights/PropertyHighlights';
import UnbelivableExperiences from '../components/UnbelivableExperiences/UnbelivableExperiencesContainer';
import ExclusiveDestinyContainer from '../components/ExclusiveDestinys/ExclusiveDestinyContainer';
import RatingsContainer from '../components/Ratings/RatingsContainer';
import SpecialPropertiesAdContainer from '../components/SpecialPropertiesAd/SpecialPropertiesAdContainer';

export default function Home(): ReactElement {
     return (
          <Grid
               sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    rowGap: (theme) => theme.spacing(8),
                    backgroundColor: (theme) =>
                         theme.palette.background.default,
               }}>
               <HeaderContainer />
               <PresentationContainer className="section" />
               <PropertyHighlights className="section" />
               <UnbelivableExperiences className="section" />
               <ExclusiveDestinyContainer className="section" />
               <RatingsContainer className="section" />
               <SpecialPropertiesAdContainer className="section" />
          </Grid>
     );
}
