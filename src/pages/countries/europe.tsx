import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { Header } from "../../components/Header";
import { HeadTitle } from "../../components/HeadTitle";

const Europe: NextPage = () => {
  return (
    <>
      <HeadTitle title="Europe" />
      <Flex as="main" direction="column" w="100vw" maxW="1480">
        <Header />
        <p>oi</p>
      </Flex>
    </>
  );
};

export default Europe;
