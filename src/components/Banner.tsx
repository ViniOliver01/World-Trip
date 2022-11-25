import { Flex, VStack, Image, Text, Heading, useBreakpointValue } from '@chakra-ui/react';

const bannerUrl = "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2753&q=80"

export default function Banner() {
   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
   })

   return (
      <Flex height={[163, 335]}
         backgroundImage={` url('${bannerUrl}') `}
         backgroundPosition="center 28%"
         backgroundRepeat="no-repeat"
         paddingInline={["4", "20"]}
         justifyContent="center"
      >
         <Flex
            flex="1"
            justifyContent={"space-between"}
            maxWidth={1440}
            flexDirection={"row"}
            gap="5"
         >
            <VStack alignItems="flex-start" width={"100%"} alignSelf="center" spacing="5">
               <Heading color={"gray.50"} fontSize={["xl", "4xl"]} fontWeight="medium">5 Continentes,<br /> infinitas possibilidades.</Heading>
               <Text color={"gray.100"} fontSize={["sm", "lg"]} fontWeight="normal">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </VStack>
            {isWideVersion && (
               <Image
                  src="/Airplane.png"
                  alt=""
                  width={"417px"}
                  height={"270px"}
                  alignSelf={"flex-end"}
                  marginBottom={-30}
                  css={{ transform: "rotate(3deg)" }}
               />
            )}

         </Flex>
      </Flex>
   );
}