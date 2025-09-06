import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { ReactElement } from 'react';
import '../assets/swiperStyle.css';

export default function Carousel(props: {
     children: ReactElement[];
     arrow?: boolean;
}) {
     return (
          <Swiper
               spaceBetween={4}
               slidesPerView={'auto'}
               pagination={{
                    clickable: true,
                    type: 'bullets',
               }}
               navigation={props.arrow ?? false}
               loop={true}
               style={{
                    width: '100%',
               }}
               modules={[Pagination, Navigation]}>
               {props.children.map((el) => (
                    <SwiperSlide>{el}</SwiperSlide>
               ))}
          </Swiper>
     );
}
