import type { ExperienceComponentsProps } from '../types/ExperienceComponentProps';
import PoolIcon from '@mui/icons-material/Pool';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SpaIcon from '@mui/icons-material/Spa';
import FlatwareIcon from '@mui/icons-material/Flatware';

export const experienceComponents: Array<ExperienceComponentsProps> = [
     {
          index: 0,
          icon: PoolIcon,
          title: 'Mergulho com tartarugas',
          description:
               'Nade ao lado de tartarugas marinhas em águas cristalinas protegidas, uma experiência mágica disponível em nossos imóveis consteiros selecionados',
          alert: 'Disponível o ano todo.',
     },
     {
          index: 1,
          icon: LandscapeIcon,
          title: 'Passeio de balão',
          description:
               'Flutue suavemente sobre vales e montanhas ao nascer do sol, apreciando paisagens de tirar o fôlego. Nossos chalés na serra oferecem pacotes exclusivos para essa aventura.',
          alert: 'Verifique a disponibilidade sazonal.',
     },
     {
          index: 2,
          icon: SpaIcon,
          title: 'Retiro de Yoga ao pôr do sol',
          description:
               'Recarregue as energias com sessões de yoga e meditação em um ambiente tranquilo, com vistas deslumbrantes para o pôr do sol. Perfeito para uma escapada relaxante.',
          alert: 'Aulas diárias em nossos retiros de bem-estar.',
     },
     {
          index: 3,
          icon: FlatwareIcon,
          title: 'Aula de culinária local',
          description:
               'Aprenda a preparar pratos típicos da região com chefs locais. Uma imersão gastronômica que vai do mercado à mesa, ideal para quem busca uma experiência autêntica.',
          alert: 'Disponível em cidades históricas selecionadas.',
     },
];
