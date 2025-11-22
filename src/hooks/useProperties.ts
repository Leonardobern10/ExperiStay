import { getProperties } from '@services/propertyService';
import type { PropertyType } from '../types/HighlightType';
import { useEffect, useState } from 'react';

export const useProperties = (quantity?: number) => {
    const [properties, setProperties] = useState<PropertyType[] | null>(null);
    const [total, setTotal] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getAll = async () => {
        try {
            setLoading(true);
            let response;
            if (quantity) response = await getProperties(quantity);
            else response = await getProperties();

            if (!response)
                throw new Error('Não foi possível encontrados os registros...');
            console.log(response);
            setProperties(response.data);
            setError(null);
            setTotal(response.meta.total);
        } catch (error) {
            setProperties(null);
            setError(error as string);
            setTotal(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAll();
    }, []);

    return { properties, total, loading, error };
};
