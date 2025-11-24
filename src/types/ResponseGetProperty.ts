import type { PropertyType } from './PropertyType';
import type { MetaDataGetProperty } from './MetaDataGetProperty';

export type ResponseGetProperty = {
    data: PropertyType[];
    meta: MetaDataGetProperty;
};
