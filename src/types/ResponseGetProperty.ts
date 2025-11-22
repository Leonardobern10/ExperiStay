import type { PropertyType } from './HighlightType';
import type { MetaDataGetProperty } from './MetaDataGetProperty';

export type ResponseGetProperty = {
    data: PropertyType[];
    meta: MetaDataGetProperty;
};
