import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FiChevronLeft } from 'react-icons/fi'

interface HeaderProps {
  withIcon?: boolean;
}

export default function Header({ withIcon = false }: HeaderProps) {

  if (withIcon) {
    return (
      <Flex align="center" paddingInline="6" height={[50, 100]}>
        <Link href="/">
          <Flex>
            <Icon
              as={FiChevronLeft}
              justifySelf="flex-start"
              alignSelf="center"
              position="absolute"
              color="gray.700"
              left={["4", "4", "10", "40"]}
              fontSize={["16", "32"]}
            />
          </Flex>
        </Link>
        <Flex flex="1" justify="center">
          <Image src="/Logo.png" alt="" width={["81px", "180px"]} height={["20px", "45px"]} />
        </Flex>
      </Flex>
    )
  }
  return (
    <Flex align="center" paddingInline="6" justify="center" height={[50, 100]}>
      <Image src="/Logo.png" alt="" width={["81px", "180px"]} height={["20px", "45px"]} />
    </Flex>
  )
}