import type { AdvantageAdProps } from '../types/AdvantagesAdProps';
import { FaUserFriends } from 'react-icons/fa';
import { GrSecure } from 'react-icons/gr';
import { TbPigMoney } from 'react-icons/tb';

export const dataContainer = {
    title: 'Tem um imóvel especial',
    subtitle:
        'Transforme seu imóvel único em uma fonte de experiências inesquecíveis',
    buttonRegister: 'Cadastrar meu imóvel',
    buttonMore: 'Saiba mais',
};

export const advantages: Array<AdvantageAdProps> = [
    {
        index: 0,
        icon: TbPigMoney,
        title: 'Renda extra',
        description: 'Monetize seu imóvel com nossa plataforma premmium',
    },
    {
        index: 1,
        icon: GrSecure,
        title: 'Proteção Total',
        description: 'Seguro completo e suporte 24/7 para anfitrões',
    },
    {
        index: 2,
        title: 'Comunidade',
        icon: FaUserFriends,
        description: 'Conecte-se com viajantes que buscam experiências únicas',
    },
];
