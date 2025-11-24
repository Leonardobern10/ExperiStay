import type { PropertyType } from '../types/PropertyType';
import type { ResponseGetProperty } from '../types/ResponseGetProperty';
import axios from 'axios';

const url: string = 'http://localhost:3000/api/v1/properties';

export const getProperties = async (
    quantity?: number,
    page?: number,
): Promise<ResponseGetProperty | null> => {
    try {
        const result = await axios.get(url, {
            params: {
                limit: quantity || 12,
                page: page || 1,
            },
        });
        const response: ResponseGetProperty = result.data;
        const { data, meta } = response;
        return { data, meta };
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getPropertyById = async (
    id: string,
): Promise<PropertyType | null> => {
    console.log(id);
    const concatUrl = url + '/' + id;
    try {
        const response = await axios.get(concatUrl);
        return response.data.properties;
    } catch (error) {
        console.error(error);
        return null;
    }
};
