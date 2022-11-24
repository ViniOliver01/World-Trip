import { Flex, Heading, HStack, Box, Text, Image } from '@chakra-ui/react';

interface CardProps {
  city: string;
  country: string;
  backgroundImg: string;
  flagImg: string;
}

export default function Card({ city, country, backgroundImg, flagImg }: CardProps) {

  return (
    <Box
      width={256}
      height={279}
    >
      <Image src={backgroundImg} alt="" borderTopRadius="4" />
      <HStack
        padding="6"
        borderBottomRadius={4}
        borderWidth={1}
        borderTop={0}
        borderColor="yellow.500"
      >
        <Flex
          flex="1"
          flexDirection="column"
        >
          <Heading fontSize="xl" fontWeight="semibold" color="gray.700">{city}</Heading>
          <Text fontSize="md" fontWeight="medium" color="gray.600">{country}</Text>
        </Flex>
        <Image src={flagImg} fit="cover" alt="" borderRadius="100%" width={30} height={30} />
      </HStack>
    </Box>
  );
}