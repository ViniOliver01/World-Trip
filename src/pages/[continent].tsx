import { Flex, Heading, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardSection from "../components/CardSection";
import Header from './../components/Header';

interface ContinentProps {
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

   const isWideVersion = useBreakpointValue({
      base: false,
      sm: true,
   })
   console.log("🚀 / Continent / isWideVersion", isWideVersion)

   const { asPath, pathname } = useRouter()
   const path = asPath.slice(1)

   useEffect(() => {
      async function getResponse() {
         const response = await fetch(`http://localhost:3004/continents/?path=${path}`)
         const data = await response.json();
         setContinent(data[0])
      }
      if (path !== "[continent]") {
         getResponse()
      }
   }, [asPath]);

   return (
      <Flex
         flex="1"
         flexDirection="column"
         marginBottom={"10"}
      >
         <Header withIcon />
         <Flex height={[150, 500]}>
            <Flex
               background={`url(${continent?.background}) center/cover no-repeat`}
               filter='auto'
               brightness='60%'
               width={"100%"}
               height={[150, 500]}
               position="absolute"
            >
            </Flex>
            <VStack
               position="relative"
               alignItems={['center', 'flex-start']}
               justifyContent={['center', 'flex-end']}
               width="100%"
               marginLeft={[0, 20]}
               marginBottom={[0, 16]}
            >
               <Heading color="gray.50" fontSize={["3xl", "5xl"]} fontWeight={["semibold", "bold"]}>
                  {continent?.continentname}
               </Heading>
            </VStack>
         </Flex>
         <Flex
            flex="1"
            flexDirection="column"
            paddingInline={[4, 10, 20, 40]}
         >
            <Flex
               flex="1"
               flexDirection={["column", "column", "column", "row"]}
               justifyContent="space-between"
               marginTop={[6, 20]}
               gap={10}
            >
               <Text
                  fontSize={["sm", "2xl"]}
                  fontWeight="normal"
                  textAlign="justify"
                  width={"100%"}
                  maxWidth={1120}
                  marginBottom={4}
               >
                  {continent?.description}
               </Text>

               <Flex
                  justifyContent="space-between"
                  gap={10}
               >
                  <VStack align="flex-start">
                     <Heading fontSize={["2xl", "5xl"]} color="yellow.500" fontWeight="semibold">{continent?.countriesNumber}</Heading>
                     <Text fontSize={["lg", "2xl"]} fontWeight="semibold" color="gray.700">países</Text>
                  </VStack>
                  <VStack align="flex-start">
                     <Heading fontSize={["2xl", "5xl"]} color="yellow.500" fontWeight="semibold">{continent?.languagesNumber}</Heading>
                     <Text fontSize={["lg", "2xl"]} fontWeight="semibold" color="gray.700">línguas</Text>
                  </VStack>
                  <VStack align="flex-start">
                     <Heading fontSize={["2xl", "5xl"]} color="yellow.500" fontWeight="semibold">{continent?.citiesNumber}</Heading>
                     <Text fontSize={["lg", "2xl"]} fontWeight="semibold" color="gray.700">cidades+100</Text>
                  </VStack>
               </Flex>
            </Flex>
            <CardSection continent={path} />

         </Flex>

      </Flex>
   );
}