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
