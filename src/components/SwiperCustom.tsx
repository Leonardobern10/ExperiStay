import type { ReactElement } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { ExclusiveDestinyProps } from '../types/ExcluviseDestinyProps';
import ExclusiveComponent from './ExclusiveDestinys/ExclusiveComponent';

export default function SwiperCustom(
     data: ExclusiveDestinyProps[],
): ReactElement {
     return (
          <Swiper
               slidesPerView={'auto'}
               spaceBetween={30}
               pagination={{
                    clickable: true,
               }}
               modules={[Pagination]}
               className="mySwipper">
               {data.map((el) => (
                    <ExclusiveComponent
                         key={el.index}
                         name={el.name}
                         available={el.available}
                         img={el.img}
                    />
               ))}
          </Swiper>
     );
}
