/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Flex, Image, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextLink } from "../NextLink";

export const Header: React.FC = () => {
  const { asPath, push } = useRouter();

  const getBackToHome = () => {
    push("/");
  };

  return (
    <Flex
      as="header"
      align="center"
      maxW="1480px"
      w="100%"
      h="25"
      px="6"
      py="10"
    >
      {asPath !== "/" && (
        <Tooltip hasArrow>
          <Button
            as="a"
            bg="transparent"
            left="5"
            display="flex"
            justifySelf="flex-start"
            alignSelf="flex-start"
            onClick={getBackToHome}
          >
            <Image src="/vector.svg" w="12px" objectFit="cover" />
          </Button>
        </Tooltip>
      )}
      <Image src="/logo.svg" h="12" objectFit="cover" mx="auto" />
    </Flex>
  );
};
