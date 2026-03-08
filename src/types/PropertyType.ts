import type { AmenitiesType } from './AmenitiesType';

export type PropertyType = {
    _id: string;
    name: string;
    location: string;
    description: string;
    price: number;
    rating: number;
    liked: boolean;
    img: string;
    label: string;
    labels?: string[];
    amenities?: AmenitiesType;
    features?: string[];
};
