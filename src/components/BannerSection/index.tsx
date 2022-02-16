import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const BannerSection: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="section"
      align="center"
      justify="center"
      w="100vw"
      height="40vh"
      position="relative"
      border="1px solid red"
      bgImage="/background.svg"
    >
      <Flex
        align="center"
        justify="space-between"
        position="absolute"
        w="100%"
        h="100%"
        px={["30", "35"]}
      >
        <Flex
          align="flex-start"
          justify="flex-start"
          gap={["6", "8", "10"]}
          color="gray.50"
          direction="column"
        >
          <Heading size="lg" fontWeight="normal">
            5 Continents,
            <Box mt="4">infinity possibilities.</Box>
          </Heading>
          <Text fontSize="lg" w={["100%", "90%"]}>
            The time has come to take the trip you&apos;ve always dreamed about
            it, and make it true.
          </Text>
        </Flex>

        {isWideVersion && (
          <Flex
            w="50%"
            h="100%"
            border="1px solid red"
            align="center"
            justify="center"
            position="relative"
          >
            <Image
              src="airplane.svg"
              alt="airplane"
              position="absolute"
              w="100%"
              h="100%"
              top="12%"
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
