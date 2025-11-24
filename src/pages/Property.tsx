import { useEffect, useState, type ReactElement } from 'react';
import { PageContainer } from '@components/ui/PageContainer';
import { Box } from '@mui/material';
import MainPropertyImage from '@components/property/MainPropertyImage';
import InfoProperty from '@components/property/InfoProperty';
import RatingProperty from '@components/property/RatingProperty';
import { useParams } from 'react-router';
import { getPropertyById } from '@services/propertyService';
import type { PropertyType } from '../types/PropertyType';
import type { AmenitiesType } from '../types/AmenitiesType';

export default function Property(): ReactElement {
    const { id } = useParams();
    const [property, setProperty] = useState<PropertyType | null>(null);

    useEffect(() => {
        const getById = async () => {
            try {
                const response = await getPropertyById(id!);
                setProperty(response);
                console.log('Obtendo registro unico: ', response);
            } catch (error) {
                console.error(error);
            }
        };

        getById();
    }, []);

    return (
        <PageContainer sx={(theme) => ({ marginTop: theme.spacing(12) })}>
            <Box
                sx={(theme) => ({
                    paddingY: theme.spacing(10),
                    width: '90%',
                })}>
                <MainPropertyImage
                    src={property?.img!}
                    location={property?.location!}
                    name={property?.name!}
                    rating={Number(property?.rating!)}
                    label={property?.label!}
                />
                <InfoProperty
                    description={property?.description ?? ''}
                    name={property?.name ?? ''}
                    location={property?.location ?? ''}
                    price={property?.price ?? 0}
                    acomodations={property?.amenities ?? ({} as AmenitiesType)}
                />
                <RatingProperty />
            </Box>
        </PageContainer>
    );
}
