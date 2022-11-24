import { Flex, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardSection from "../components/CardSection";
import Header from './../components/Header';

interface ContinentProps{
   path: string;
   continentname: string; 
   description: string; 
   countriesNumber: number; 
   languagesNumber: number; 
   citiesNumber: number; 
   background: string; 
}

export default function Continent() {
   const [continent, setContinent] = useState<ContinentProps>()

   const { asPath, pathname } = useRouter()
   const path = asPath.slice(1)

   useEffect(() => {
      async function getResponse() {
         const response = await fetch(`http://localhost:3004/continents/?path=${path}`)
         const data = await response.json();
         setContinent(data[0])
      }
      if(path !== "[continent]"){
         getResponse()
      }
   }, [asPath]);

   return (
      <Flex
         flex="1"
         flexDirection="column"
         marginBottom={"10"}
      >
         <Header withIcon/>
         <Flex height={500}>
            <Flex
               background={`url(${continent?.background}) center/cover no-repeat`}
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
                  {continent?.continentname}
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
               {continent?.description}
               </Text>
               
               <HStack spacing="10">
                  <VStack>
                     <Heading fontSize="5xl" color="yellow.500" fontWeight="semibold">{continent?.countriesNumber}</Heading>
                     <Text fontSize="2xl" fontWeight="semibold" color="gray.700">países</Text>
                  </VStack>
                  <VStack>
                     <Heading fontSize="5xl" color="yellow.500" fontWeight="semibold">{continent?.languagesNumber}</Heading>
                     <Text fontSize="2xl" fontWeight="semibold" color="gray.700">línguas</Text>
                  </VStack>
                  <VStack>
                     <Heading fontSize="5xl" color="yellow.500" fontWeight="semibold">{continent?.citiesNumber}</Heading>
                     <Text fontSize="2xl" fontWeight="semibold" color="gray.700">cidades+100</Text>
                  </VStack>
               </HStack>


            </Flex>
            <CardSection continent={path}/>

         </Flex>

      </Flex>
   );
}