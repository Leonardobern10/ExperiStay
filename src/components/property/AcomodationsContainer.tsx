import { Stack } from '@mui/material';
import HeadAcomodationItem from './HeadAcomodationItem';
import GroupIcon from '@mui/icons-material/Group';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';

export default function AcomodationsContainer({
    quartos,
    banheiros,
    suite,
    metragem,
    garagem,
}: {
    quartos?: number;
    banheiros?: number;
    suite?: number;
    metragem?: number;
    garagem?: number;
}) {
    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            spacing={2}
            width="100%">
            {quartos && (
                <HeadAcomodationItem
                    acomodationIcon={BedIcon}
                    acomodationValue={quartos + ' quartos'}
                />
            )}
            {banheiros && (
                <HeadAcomodationItem
                    acomodationIcon={BathtubIcon}
                    acomodationValue={banheiros + ' banheiros'}
                />
            )}
            {suite && (
                <HeadAcomodationItem
                    acomodationIcon={GroupIcon}
                    acomodationValue={suite + ' suites'}
                />
            )}
            <HeadAcomodationItem
                acomodationIcon={GroupIcon}
                acomodationValue={metragem + ' m2'}
            />
            {garagem && (
                <HeadAcomodationItem
                    acomodationIcon={GroupIcon}
                    acomodationValue={garagem + ' garagem'}
                />
            )}
        </Stack>
    );
}
