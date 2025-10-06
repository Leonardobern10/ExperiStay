import { type ReactElement } from 'react';
import { PageContainer } from '@components/ui/PageContainer';
import PresentationContainer from '@components/home/Presentation/PresentationContainer';
import UnbelivableExperiences from '@components/home/UnbelivableExperiences/UnbelivableExperiencesContainer';
import ExclusiveDestinyContainer from '@components/home/ExclusiveDestinys/ExclusiveDestinyContainer';
import RatingsContainer from '@components/home/Ratings/RatingsContainer';
import SpecialPropertiesAdContainer from '@components/home/SpecialPropertiesAd/SpecialPropertiesAdContainer';
import PropertyHighlights from '@components/home/highlights/PropertyHighlights';

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
