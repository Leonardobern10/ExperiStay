import type { FooterNavListProps } from '../types/FooterNavListProps';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

export const footerContainerData = {
    description:
        'Conectamos viajantes à experiências únicas através de imóveis excepcionais nos destinos mais especiais do Brasil.',
    socials: [InstagramIcon, LinkedInIcon, WhatsAppIcon, FacebookIcon],
};

export const footerNavList: Array<FooterNavListProps> = [
    {
        index: 0,
        title: 'Explorar',
        items: ['Todos os destinos', 'Experiências ùnicas', 'Imóveis de luxo'],
    },
    {
        index: 1,
        title: 'Suporte',
        items: ['Central de Ajuda', 'Segurança', 'Cancelamentos', 'Contato'],
    },
    {
        index: 2,
        title: 'Anfitriões',
        items: ['Anuncie seu imóvel', 'Recursos', 'Fórum'],
    },
];
