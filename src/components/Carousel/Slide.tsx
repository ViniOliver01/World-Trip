import { Flex, VStack, Text, Heading } from '@chakra-ui/react';

const europaBackground = "https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1493&q=80"

interface SlideProps{
   title: string;
   description: string;
   image: string;
}


export default function Slide({title, description, image}: SlideProps){
   const basicBoxStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:`url(${image}) center/cover no-repeat`,
    }

  return (
   <>
      <Flex
        flexDirection="column"
        sx={basicBoxStyles}
        filter='auto'
        brightness='60%'
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
         <Heading color="gray.50" fontSize="5xl" fontWeight="bold">{title}</Heading>
         <Text color="gray.100" fontSize="2xl" fontWeight="bold">{description}</Text>
      </VStack>
   </>
  );
}