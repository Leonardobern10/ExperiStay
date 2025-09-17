import type { HeadInfoPropertyProps } from '../../types/property/HeadInfoPropertyProps';
import GroupIcon from '@mui/icons-material/Group';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';

export const headInfoPropertyData: HeadInfoPropertyProps = {
     headTitle: 'Penthouse Ipanema',
     headLocation: 'Rio de Janeiro, RJ',
     headAcomodations: [
          {
               acomodationIndex: 0,
               acomodationIcon: GroupIcon,
               acomodationValue: '6 Hóspedes',
          },
          {
               acomodationIndex: 1,
               acomodationIcon: BedIcon,
               acomodationValue: '3 quartos',
          },
          {
               acomodationIndex: 2,
               acomodationIcon: BathtubIcon,
               acomodationValue: '2 banheiros',
          },
     ],
};

export const descriptionExample =
     'Cobertura de luxo com vista panorâmica para a praia de Ipanema. Localização privilegiada no coração do Rio de Janeiro com acesso aos melhores pontos turísticos.';

export const acommodationsData = {
     title: 'Comodidades',
     allAcomodations: [
          { index: 1, name: 'Vista para o mar' },
          { index: 2, name: 'Vista para o mar' },
          { index: 3, name: 'Vista para o mar' },
          { index: 4, name: 'Vista para o mar' },
     ],
};

export const labelsPropertyData = {
     title: 'Características Únicas',
     allLabels: [
          { index: 0, labelName: 'Luxo' },
          { index: 1, labelName: 'Aventura' },
          { index: 2, labelName: 'Playground' },
          { index: 3, labelName: 'Fitness' },
     ],
};
