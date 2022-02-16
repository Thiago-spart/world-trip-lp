/* eslint-disable jsx-a11y/alt-text */
import { Flex, Image } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW="1480px"
      h="25"
      mx="auto"
      my="4"
      justify="center"
      align="center"
      px="6"
      py="6"
    >
      <Image src="/logo.svg" h="12" objectFit="cover" />
    </Flex>
  );
};
