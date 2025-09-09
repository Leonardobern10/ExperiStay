import { type ReactElement } from 'react';
import { Grid } from '@mui/material';
import HeaderContainer from '@components/Header/HeaderContainer';
import UnbelivableExperiences from '@components/UnbelivableExperiences/UnbelivableExperiencesContainer';
import ExclusiveDestinyContainer from '@components/ExclusiveDestinys/ExclusiveDestinyContainer';
import RatingsContainer from '@components/Ratings/RatingsContainer';
import SpecialPropertiesAdContainer from '@components/SpecialPropertiesAd/SpecialPropertiesAdContainer';
import FooterContainer from '@components/Footer/FooterContainer';
import PresentationContainer from '@components/Presentation/PresentationContainer';
import PropertyHighlights from '@components/HighLights/PropertyHighlights';

export default function Home(): ReactElement {
     return (
          <Grid
               sx={(theme) => ({
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    rowGap: theme.spacing(20),
                    backgroundColor: theme.palette.background.default,
               })}>
               <HeaderContainer />
               <PresentationContainer className="section" />
               {/* Todas as sections abaixo utilizam ContainerSectionHome */}
               <PropertyHighlights className="section" />
               <UnbelivableExperiences className="section" />
               <ExclusiveDestinyContainer className="section" />
               <RatingsContainer className="section" />
               <SpecialPropertiesAdContainer className="section" />
               <FooterContainer />
          </Grid>
     );
}
