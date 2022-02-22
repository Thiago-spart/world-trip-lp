import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { Header } from "../../components/Header";
import { HeadTitle } from "../../components/HeadTitle";

const Europe: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <HeadTitle title="Europe" />
      <Flex as="main" direction="column" w="100vw" maxW="1480">
        <Header />
        <Flex
          as="section"
          align={["center", "flex-end"]}
          justify={["center", "flex-start"]}
          w="100vw"
          height="50vh"
          position="relative"
          bg="gray.900"
          px={["30", "35"]}
          py="10"
        >
          <Heading color="gray.50">Europe</Heading>
        </Flex>
        <Flex
          as="section"
          align="center"
          justify="space-between"
          direction={["column", "row"]}
          w="100vw"
          height="fit-content"
          px={["30", "35"]}
          py="10"
          gap={["10", "5"]}
        >
          <Text fontSize={["14px", "16px", "20px", "24px"]} w={["100%", "50%"]}>
            Europe is the world&apos;s third most populated continent, and the
            sixth largest continent by land area. Although physically connected
            to Asia, Europe has historically been considered a separate
            continent due to cultural and linguistic differences.
          </Text>

          <Flex align="center" justify="center" gap="42px" w={["100%", "50%"]}>
            <Flex
              direction="column"
              fontWeight="600"
              align="center"
              justify="center"
            >
              <Text color="yellow.400" fontSize="36px">
                50
              </Text>
              <Text>Country</Text>
            </Flex>
            <Flex
              direction="column"
              fontWeight="600"
              align="center"
              justify="center"
            >
              <Text color="yellow.400" fontSize="36px">
                60
              </Text>
              <Text>Languages</Text>
            </Flex>
            <Flex
              direction="column"
              fontWeight="600"
              align="center"
              justify="center"
            >
              <Text color="yellow.400" fontSize="36px">
                27
              </Text>
              <Text>Cities + 100 </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          as="section"
          w="100vw"
          align="center"
          justify="center"
          direction="column"
          height="fit-content"
          px={["30", "35"]}
          py="10"
          gap={["10", "5"]}
        >
          <Heading as="h3" alignSelf="flex-start" fontWeight="500">
            Cities +100
          </Heading>
          <SimpleGrid
            w="100%"
            height="fit-content"
            minChildWidth="260px"
            column={["1", "4"]}
            gap={["10", "5"]}
          >
            <Flex w="256px" direction="column" align="center" justify="center">
              <Box
                borderRadius="4px 4px 0 0"
                w="100%"
                h="173px"
                bg="blackAlpha.600"
              />
              <Flex
                border="1px solid #FFBA08"
                borderTop="none"
                borderRadius="0 0 4px 4px"
                align="center"
                w="100%"
                justify="space-between"
                px="24px"
                py="25px"
              >
                <Flex
                  direction="column"
                  align="flex-start"
                  justify="space-between"
                >
                  <Heading fontSize="20px">London</Heading>
                  <Text fontSize="16px" color="#999999" whiteSpace="nowrap">
                    United kingdom
                  </Text>
                </Flex>
                <Box
                  bg="blackAlpha.900"
                  borderRadius="50%"
                  w="30px"
                  h="30px"
                  display="block"
                />
              </Flex>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
};

export default Europe;
