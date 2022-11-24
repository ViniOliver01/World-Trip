import { Flex, HStack, VStack, Image, Text, Heading } from '@chakra-ui/react';

const bannerUrl = "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2753&q=80"

export default function Banner(){

  return (
   <Flex height={335} 
      backgroundImage={` url('${bannerUrl}') `}
      backgroundPosition= "center 28%"
      backgroundRepeat="no-repeat"
      paddingInline="20"
   >
      <Flex flex="1" justifyContent="space-between" >
      <VStack alignItems="flex-start" width={500} alignSelf="center" spacing="5">

         <Heading color={"white"} fontSize="4xl" fontWeight="medium">5 Continentes, infinitas possibilidades.</Heading> 
         <Text color={"white"} fontSize="lg" fontWeight="normal">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>

      </VStack>

      <Image
         src="/Airplane.png"
         alt=""
         width={417}
         height={270}
         alignSelf="flex-end"
         marginBottom={-30}
         css={{transform:"rotate(3deg)"}} 
         />
      
      </Flex>
   </Flex>
  );
}