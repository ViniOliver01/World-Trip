import { Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import {FiChevronLeft} from 'react-icons/fi'

interface HeaderProps {
  withIcon?: boolean;
}

export default function Header({withIcon = false}: HeaderProps){
  if(withIcon){
    return (
      <Flex align="center" padding="6">
        <Link href="/">
          <Flex>
            <Icon
                as={FiChevronLeft}
                justifySelf="flex-start"
                alignSelf="center"
                position="absolute" 
                color="gray.700"
                left="40"
                fontSize="32"
              />
          </Flex>
        </Link>
        <Flex flex="1" justify="center">
          <Image src="/Logo.png" alt="" width={180} height={45}/>
        </Flex>
      </Flex>
    )
  }
  return (
    <Flex align="center" padding="6" justify="center">
        <Image src="/Logo.png" alt="" width={180} height={45}/>
    </Flex>
  )
}