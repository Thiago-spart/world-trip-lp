import { Flex, Heading } from "@chakra-ui/react";
import { Slider } from "./Slider";

export const SliderSection = () => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={["6", "8"]}
      py={["36px", null, "40px"]}
      px={["50px", null, "100px"]}
    >
      <Flex
        align="center"
        justify="center"
        direction="column"
        position="relative"
        py="5"
        _after={{
          content: "''",
          position: "absolute",
          bg: "gray.300",
          top: 0,
          h: "5px",
          w: "90px",
        }}
      >
        <Heading as="h3">Let&apos;s go?</Heading>
        <Heading as="h4">Choose a continent</Heading>
      </Flex>

      <Slider />
    </Flex>
  );
};
