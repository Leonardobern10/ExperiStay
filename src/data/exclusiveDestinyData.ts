import type { ExclusiveDestinyProps } from '../types/ExcluviseDestinyProps';
import lencoisMaranhenses from '@images/highlights/lencois_maranhenses.png';
import pelourinhoBahia from '@images/highlights/pelourinho_BA.png';
import jericoacoara from '@images/highlights/jericoacoara_RE.png';
import rioAmazonas from '@images/highlights/rio_amazonas.png';

export const exclusiveDestines: Array<ExclusiveDestinyProps> = [
    {
        index: 0,
        name: 'Lençóis Maranhenses',
        available: 5,
        img: lencoisMaranhenses,
    },
    { index: 1, name: 'Pelourinho', available: 3, img: pelourinhoBahia },
    { index: 2, name: 'Jericoacoara', available: 4, img: jericoacoara },
    { index: 3, name: 'Rio Amazonas', available: 2, img: rioAmazonas },
];
