import { Flex, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CardSection from "../components/CardSection";
import Header from './../components/Header';

const continentData = [
   {
      continent: "Europa",
      background: "https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1493&q=80",
   }
]

export default function Continent() {
   const { asPath } = useRouter()
   console.log("🚀 / Continent / asPath", asPath)

   return (
      <Flex
         flex="1"
         flexDirection="column"
         marginBottom={"10"}
      >
         <Header />
         <Flex height={500}>
            <Flex
               background={`url(${continentData[0].background}) center no-repeat`}
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
               <Heading color="gray.50" fontSize="5xl" fontWeight="bold">Europa</Heading>
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
            <CardSection />

         </Flex>

      </Flex>
   );
}