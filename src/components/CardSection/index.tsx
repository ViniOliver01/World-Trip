import { Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "./Card";

interface CardSectionProps {
   continent: string;
}

interface CityProps {
   cityname: string
   country: string
   backgroundImg: string
   flagImg: string
}

export default function CardSection({ continent }: CardSectionProps) {
   const [citys, setCitys] = useState<CityProps[]>([])
   const { asPath } = useRouter()

   useEffect(() => {
      async function getResponse() {
         try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/cities/?continent=${continent}`)
            const data = await response.json();
            setCitys(data[0].cities)
         }catch(error) {
            console.error(error)
         }
      }
      if (continent !== "[continent]") {
         getResponse()
      }
   }, [asPath]);

   return (
      <Flex
         flex="1"
         flexDirection="column"
         marginTop="20"
      >
         <Heading fontSize={["2xl", "4xl"]} fontWeight="medium" color="gray.700" marginRight="auto">
            Cidades +100
         </Heading>
         <Flex
            flex="1"
            flexWrap="wrap"
            marginTop="10"
            gap="10"
            justify={["center", "center", "start", "start"]}
            width="fit-content"
         >
            {citys.map(city => {
               return (
                  <Card
                     city={city.cityname}
                     country={city.country}
                     backgroundImg={city.backgroundImg}
                     flagImg={city.flagImg}
                  />
               )
            })}

         </Flex>
      </Flex>
   );
}