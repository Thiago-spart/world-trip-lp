import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BannerSection } from "../components/BannerSection";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { HeadTitle } from "../components/HeadTitle";

const Home: NextPage = () => {
  return (
    <>
      <HeadTitle title="Home" />
      <Flex as="main" direction="column" w="100vw" maxW="1480">
        <Header />
        <BannerSection />
        <Categories />
      </Flex>
    </>
  );
};

export default Home;
