import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from './Slide';

const imageBg ={
   Europa: "https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1493&q=80",

   NorthAmerica: "https://images.unsplash.com/photo-1550109161-7262e652bf82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",

   SouthAmerica: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",

   Asia: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

   Africa: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",

   Oceania: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
}

export default function Carousel(){

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
         <SwiperSlide>
            <Slide title='América do Norte' description='' image={imageBg.NorthAmerica}/>
         </SwiperSlide>

         <SwiperSlide>
            <Slide title='América do Sul' description='' image={imageBg.SouthAmerica}/>
         </SwiperSlide>

         <SwiperSlide>
            <Slide title='Ásia' description='' image={imageBg.Asia}/>
         </SwiperSlide>
        
         <SwiperSlide>
            <Slide title='África' description='' image={imageBg.Africa}/>
         </SwiperSlide>

         <SwiperSlide>
            <Slide title='Europa' description='O continente mais antigo.' image={imageBg.Europa}/>
         </SwiperSlide>

         <SwiperSlide>
            <Slide title='Oceania ' description='' image={imageBg.Oceania}/>
         </SwiperSlide>
         ...
      </Swiper>
   </Flex>
  );
}