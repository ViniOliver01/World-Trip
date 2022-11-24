import { Flex, VStack, Text } from "@chakra-ui/react";
import Image from 'next/image';

export default function TravelTypes(){

  return (
   <Flex 
      marginTop={120} 
      paddingInline="20"
      justifyContent="space-between"
   > 
      <VStack width={160}>
         <Image src="/TravelTypes/cocktail.png" alt={""} width={85} height={85}/>
         <Text fontSize="2xl" fontWeight="semibold" color="gray.700">vida noturna</Text>
      </VStack>
      <VStack width={160}>
         <Image src="/TravelTypes/surf.png" alt={""} width={85} height={85}/>
         <Text fontSize="2xl" fontWeight="semibold" color="gray.700">praia</Text>
      </VStack>
      <VStack width={160}>
         <Image src="/TravelTypes/building.png" alt={""} width={85} height={85}/>
         <Text fontSize="2xl" fontWeight="semibold" color="gray.700">moderno</Text>
      </VStack>
      <VStack width={160}>
         <Image src="/TravelTypes/museum.png" alt={""} width={85} height={85}/>
         <Text fontSize="2xl" fontWeight="semibold" color="gray.700">clássico</Text>
      </VStack>
      <VStack width={160}>
         <Image src="/TravelTypes/earth.png" alt={""} width={85} height={85}/>
         <Text fontSize="2xl" fontWeight="semibold" color="gray.700">e mais...</Text>
      </VStack>
      
   </Flex>
  );
}