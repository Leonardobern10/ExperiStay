import { Typography } from "@mui/material";
import { type ReactElement } from "react";

export default function MainTitle(props: { string: string, align?: 'center' | 'flex-end' | 'flex-start' }): ReactElement {

    const handleString = () => {
        let defaultText: Array<string> = props.string.split(' ');
        let coloredText = defaultText.pop();
        return [defaultText, coloredText];
    }

    return (
        <Typography color={'textPrimary'}
            variant="h1"
            sx={{
                width: "100%",
                textShadow: "2px 2px 2px black",
                textAlign: `${props.align && props.align}`
            }}>
            {handleString()[0]}
            <Typography variant="h1" component={'span'} color="#ab9f19ff">
                {handleString()[1]}
            </Typography>
        </Typography>
    )
}