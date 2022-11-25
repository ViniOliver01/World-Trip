import { Flex, VStack, Text, Heading } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideProps {
   title: string;
   description: string;
   image: string;
   path: string;
}

export default function Slide({ title, description, image, path }: SlideProps) {

   return (
      <Link href={path}>
         <Flex
            background={`url(${image}) center/cover no-repeat`}
            flexDirection="column"
            filter='auto'
            brightness='40%'
            width={"100%"}
            height={"100%"}
            position="absolute"
         >
         </Flex>
         <VStack
            spacing="4"
            position="relative"
            flexDirection="column"
            alignItems='center'
            justifyContent='center'
            width={"100%"}
            height={"100%"}
         >
            <Heading color="gray.50" fontSize={["2xl", "5xl"]} fontWeight="bold">{title}</Heading>
            <Text
               color="gray.100"
               fontSize={["sm", "2xl"]}
               fontWeight="bold"
               width={"75%"}
               textAlign="center"
            >
               {description}
            </Text>
         </VStack>
      </Link>
   );
}