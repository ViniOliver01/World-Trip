import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Header(){

  return (
    <Flex justify="center" padding="6">
      <Image src="/Logo.png" alt="" width={180} height={45}/>
    </Flex>
  );
}