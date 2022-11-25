import { Flex, VStack, Text, useBreakpointValue, Icon } from "@chakra-ui/react";
import Image from 'next/image';
import { BsDot } from 'react-icons/bs'

const travelTypesData = [
   {
      title: "vida noturna",
      iconSrc: "/TravelTypes/cocktail.png"
   },
   {
      title: "praia",
      iconSrc: "/TravelTypes/surf.png"
   },
   {
      title: "moderno",
      iconSrc: "/TravelTypes/building.png"
   },
   {
      title: "clássico",
      iconSrc: "/TravelTypes/museum.png"
   },
   {
      title: "e mais...",
      iconSrc: "/TravelTypes/earth.png"
   },
]

export default function TravelTypes() {
   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
   })

   return (
      <Flex
         marginTop={[9, 120]}
         paddingInline={["10", "20"]}
      >
         <Flex
            flex="1"
            justifyContent={["space-evenly", "space-between"]}
            maxWidth={1440}
            flexWrap={["wrap", "nowrap"]}
            width="100%"
            height={"120px"}
         >
            {travelTypesData.map(type => {
               return (
                  <VStack maxWidth={160}>
                     {isWideVersion && <Image src={type.iconSrc} alt={""} width={85} height={85} />}
                     <Flex
                        flex="1"
                        flexDirection="row"
                        alignItems="center"
                     >
                        {!isWideVersion && <Icon as={BsDot} height="100%" fontSize={"3xl"} color="yellow.500" />}
                        <Text
                           fontSize={["lg", "2xl"]}
                           fontWeight="semibold"
                           color="gray.700"
                        >
                           {type.title}
                        </Text>
                     </Flex>
                  </VStack>
               )
            })}

         </Flex>
      </Flex>
   );
}