import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "./Card";

const cityData =[
   {
      cityname: "Londres",
      country: "Reino Unido",
      backgroundImg: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      flagImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png",
   }
]

interface CardSectionProps{
   continent?: string;
}

interface CityProps{
   cityname: string
   country: string
   backgroundImg: string
   flagImg: string
}

export default function CardSection({continent}: CardSectionProps) {
   const [citys, setCitys] = useState<CityProps[]>([])
   console.log("🚀 / CardSection / citys", citys)

   useEffect(() => {
      if(continent != "[continent]"){
         fetch(`http://localhost:3004/citys/?continent=${continent}`)
         .then((response) => response.json())
         .then((data) => setCitys(data));
      }
   }, []);

   return (
      <Flex
         flex="1"
         flexDirection="column"
         marginTop="20"
      >
         <Heading fontSize="4xl" fontWeight="medium" color="gray.700">
            Cidades +100
         </Heading>
         <Flex
            flex="1"
            gap="10"
            marginTop="10"
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