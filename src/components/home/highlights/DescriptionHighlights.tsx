import { Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function DescriptionHighlight({
    description,
}: {
    description: string;
}): ReactElement {
    const limitString = (limit: number): string => {
        if (description.length > limit)
            return `${description.slice(0, limit)}...`;
        return description;
    };

    return <Typography variant="body1">{limitString(100)}</Typography>;
}
