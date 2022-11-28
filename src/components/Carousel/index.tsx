import { Flex, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from './Slide';
import { useEffect, useState } from 'react';

import styles from './swiperStyles.module.scss'

interface CarouselProps {
   background: string;
   path: string;
   continentname: string;
   shortDescription: string;
}

export default function Carousel() {
   const [continentList, setContinentList] = useState<CarouselProps[]>([])

   useEffect(() => {
      async function getResponse() {
         try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/continents/`)
            const data = await response.json();
            const bgList = data.map((item: CarouselProps) => {
               return {
                  path: item.path,
                  continentname: item.continentname,
                  shortDescription: item.shortDescription,
                  background: item.background,
               }
            })
            setContinentList(bgList)
            
         } catch (error) {
            console.error(error)
         }
      }
      getResponse()
   }, []);

   return (
      <Box
         paddingInline={[0, 20]}
      >
         <Flex
            maxWidth={1440}
            height={[250, 456]}
            justifyContent="center"
         >
            <Flex height={"100%"} width={"100%"} className={styles.sliderWrapper}>
               <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
               >
                  {continentList.map(continent => {
                     return (
                        <SwiperSlide key={continent.path}>
                           <Slide
                              title={continent.continentname}
                              path={continent.path}
                              description={continent.shortDescription}
                              image={continent.background}
                           />
                        </SwiperSlide>
                     )
                  })}
               </Swiper>
            </Flex>
         </Flex>
      </Box>
   );
}