import { Flex, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardSection from "../components/CardSection";
import Header from './../components/Header';

interface ContinentProps{
   continent: string;
   path: string;
   background: string;
}

export default function Continent() {
   const [continent, setContinent] = useState<ContinentProps>()

   const { asPath } = useRouter()
   const path = asPath.slice(1)


   useEffect(() => {
      if(path != "[continent]"){
         fetch(`http://localhost:3004/continents/?path=${path}`)
         .then((response) => response.json())
         .then((data) => setContinent(data[0]));
      }
   }, [asPath]);

   


   return (
      <Flex
         flex="1"
         flexDirection="column"
         marginBottom={"10"}
      >
         <Header />
         <Flex height={500}>
            <Flex
               background={`url(${continent?.background}) center no-repeat`}
               filter='auto'
               brightness='60%'
               width={"100%"}
               height={500}
               position="absolute"
            >
            </Flex>
            <VStack
               position="relative"
               alignItems='flex-start'
               justifyContent='flex-end'
               marginLeft="20"
               marginBottom="16"
            >
               <Heading color="gray.50" fontSize="5xl" fontWeight="bold">
                  {continent?.continent}
               </Heading>
            </VStack>
         </Flex>
         <Flex 
            flex="1"
            flexDirection="column"
            paddingInline="40"
         >

            <Flex
               flex="1"
               flexDirection="row"
               justifyContent="space-between"
               marginTop="20"
            >
               <Text fontSize="2xl" fontWeight="normal" textAlign="justify" width={600}>
                  A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
               </Text>
               
               <HStack spacing="10">
                  <VStack>
                     <Heading fontSize="5xl" color="yellow.500" fontWeight="semibold">50</Heading>
                     <Text fontSize="2xl" fontWeight="semibold" color="gray.700">países</Text>
                  </VStack>
                  <VStack>
                     <Heading fontSize="5xl" color="yellow.500" fontWeight="semibold">60</Heading>
                     <Text fontSize="2xl" fontWeight="semibold" color="gray.700">línguas</Text>
                  </VStack>
                  <VStack>
                     <Heading fontSize="5xl" color="yellow.500" fontWeight="semibold">27</Heading>
                     <Text fontSize="2xl" fontWeight="semibold" color="gray.700">cidades+100</Text>
                  </VStack>
               </HStack>


            </Flex>
            <CardSection continent={continent?.path}/>

         </Flex>

      </Flex>
   );
}