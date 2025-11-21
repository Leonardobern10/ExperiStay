import { Typography } from '@mui/material';
import { useMemo, type ReactElement } from 'react';

type MainTitleProps = {
    string: string;
    align?: 'center' | 'flex-end' | 'flex-start';
};

export default function MainTitle(props: {
    string: string;
    align?: 'center' | 'flex-end' | 'flex-start';
}): ReactElement {
    const strings = useMemo(() => {
        let defaultText: Array<string> = props.string.split(' ');
        let coloredText = defaultText.splice(-1);

        return [defaultText.join(' '), coloredText[0]];
    }, [props.string]);

    return (
        <Typography
            color={'textPrimary'}
            variant="h2"
            sx={mainTitleStyle(props)}>
            {strings[0]}
            <Typography
                variant="h2"
                component={'span'}
                color="#ab9f19ff">
                {` ${strings[1]}`}
            </Typography>
        </Typography>
    );
}

const mainTitleStyle = (props: MainTitleProps) => ({
    width: '100%',
    textShadow: '2px 2px 2px black',
    textAlign: `${props.align && props.align}`,
});
