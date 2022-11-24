import { Flex, VStack, Text, Divider, Heading} from '@chakra-ui/react';
import Banner from '../components/Banner';
import Header from '../components/Header/index';
import Image from 'next/image';
import Carousel from '../components/Carousel';

export default function Home() {
   

   return (
      <Flex
         flex="1"
         flexDirection="column"
         marginBottom={"10"}
      >
         <Header />
         <Banner />
         <Flex 
            marginTop={120} 
            paddingInline="20"
            justifyContent="space-between"
         > 
            <VStack>
               <Image src="/TravelTypes/cocktail.png" alt={""} width={85} height={85}/>
               <Text fontSize="2xl" fontWeight="semibold" color="gray.700">vida noturna</Text>
            </VStack>
            <VStack>
               <Image src="/TravelTypes/surf.png" alt={""} width={85} height={85}/>
               <Text fontSize="2xl" fontWeight="semibold" color="gray.700">praia</Text>
            </VStack>
            <VStack>
               <Image src="/TravelTypes/building.png" alt={""} width={85} height={85}/>
               <Text fontSize="2xl" fontWeight="semibold" color="gray.700">moderno</Text>
            </VStack>
            <VStack>
               <Image src="/TravelTypes/museum.png" alt={""} width={85} height={85}/>
               <Text fontSize="2xl" fontWeight="semibold" color="gray.700">clássico</Text>
            </VStack>
            <VStack>
               <Image src="/TravelTypes/earth.png" alt={""} width={85} height={85}/>
               <Text fontSize="2xl" fontWeight="semibold" color="gray.700">e mais...</Text>
            </VStack>
            
         </Flex>
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