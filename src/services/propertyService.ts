import type { PropertyType } from '../types/HighlightType';
import axios from 'axios';

const url: string = 'http://localhost:3000/api/v1/properties';

export const getProperties = async (): Promise<PropertyType[] | null> => {
    try {
        const response = await axios.get(url);
        const result: PropertyType[] = response.data.data;
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
};
