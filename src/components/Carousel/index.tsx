import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from './Slide';
import { useEffect, useState } from 'react';

interface CarouselProps {
   background: string;
   path: string;
   continentname: string;
   shortDescription: string;
}

export default function Carousel() {
   const [continentList, setContinentList] = useState<CarouselProps[]>([])
   console.log("🚀 / Carousel / continent", continentList)

   useEffect(() => {
      async function getResponse() {
         const response = await fetch(`http://localhost:3004/continents/`)
         const data = await response.json();
         console.log("🚀 / getResponse / data", data)
         const bgList = data.map((item: CarouselProps) => {
            return {
               path: item.path,
               continentname: item.continentname,
               shortDescription: item.shortDescription,
               background: item.background,
            }
         })
         setContinentList(bgList)
      }
      getResponse()
   }, []);

   return (
      <Flex height={450} paddingInline="20">
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={450}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
         >
            {continentList.map(continent => {
               return (
                  <SwiperSlide>
                     <Slide
                     title={continent.continentname}
                     path={continent.path}
                     description={continent.shortDescription}
                     image={continent.background} 
                     />
                  </SwiperSlide>
               )
            })}
            ...
         </Swiper>
      </Flex>
   );
}