import { Flex, Divider, Heading} from '@chakra-ui/react';
import Banner from '../components/Banner';
import Header from '../components/Header/index';
import Carousel from '../components/Carousel';
import TravelTypes from '../components/TravelTypes';

export default function Home() {
   

   return (
      <Flex
         flex="1"
         flexDirection="column"
         marginBottom={"10"}
      >
         <Header />
         <Banner />
         <TravelTypes />
         
         <Flex justify="center">
            <Divider width={"90px"} marginTop={10} borderWidth="1px" borderColor="gray.700"/>
         </Flex>

         <Flex 
            flex="1"
            flexDirection="column"
            align="center"
            marginTop="14"
            marginBottom="14"
         >
            <Heading >Vamos nessa?</Heading>
            <Heading >Então escolha seu continente</Heading>
         </Flex>
            <Carousel />
      </Flex>
   );
}