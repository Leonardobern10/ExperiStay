import { type ReactElement } from 'react';
import UnbelivableExperiences from '@components/UnbelivableExperiences/UnbelivableExperiencesContainer';
import ExclusiveDestinyContainer from '@components/ExclusiveDestinys/ExclusiveDestinyContainer';
import RatingsContainer from '@components/Ratings/RatingsContainer';
import SpecialPropertiesAdContainer from '@components/SpecialPropertiesAd/SpecialPropertiesAdContainer';
import PresentationContainer from '@components/Presentation/PresentationContainer';
import PropertyHighlights from '@components/HighLights/PropertyHighlights';
import { PageContainer } from '@components/ui/PageContainer';

export default function Home(): ReactElement {
     return (
          <PageContainer>
               <PresentationContainer className="section" />
               {/* Todas as sections abaixo utilizam ContainerSectionHome */}
               <PropertyHighlights className="section" />
               <UnbelivableExperiences className="section" />
               <ExclusiveDestinyContainer className="section" />
               <RatingsContainer className="section" />
               <SpecialPropertiesAdContainer className="section" />
          </PageContainer>
     );
}
