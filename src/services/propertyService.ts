import type { ResponseGetProperty } from '../types/ResponseGetProperty';
import axios from 'axios';

const url: string = 'http://localhost:3000/api/v1/properties';

export const getProperties = async (
    quantity?: number,
): Promise<ResponseGetProperty | null> => {
    try {
        const result = await axios.get(url, {
            params: {
                limit: quantity,
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
