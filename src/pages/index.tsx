import { Flex, Divider, Heading } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import TravelTypes from '../components/TravelTypes';

export default function Home() {

   return (
      <Flex
         flex="1"
         flexDirection="column"
         marginBottom={6}
      >
         <Header />
         <Banner />
         <TravelTypes />

         <Flex justify="center">
            <Divider width={"90px"} marginTop={[9, 20]} borderWidth="1px" borderColor="gray.700" />
         </Flex>

         <Flex
            flex="1"
            flexDirection="column"
            align="center"
            marginTop={[6, 14]}
            marginBottom={[5, 14]}
         >
            <Heading color={"gray.700"} fontSize={["xl", "4xl"]}>Vamos nessa?</Heading>
            <Heading color={"gray.700"} fontSize={["xl", "4xl"]}>Então escolha seu continente</Heading>
         </Flex>
         <Carousel />
      </Flex>
   );
}