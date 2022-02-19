import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Controller,
  Autoplay,
} from "swiper";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { NextLink } from "../../NextLink";

export const Slider = () => {
  return (
    <Flex align="center" justify="center" w="100%" h="450px">
      <Swiper
        cssMode
        navigation
        pagination
        mousewheel
        keyboard
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          Controller,
          Autoplay,
        ]}
      >
        <SwiperSlide>
          <NextLink href="/countries/europe">
            <Flex
              align="center"
              justify="center"
              direction="column"
              w="100%"
              h="450px"
              bg="rgba(255, 255, 255, 0.50)"
              border="1px solid black"
              filter="brightness(0.8)"
            >
              <Heading>Europe</Heading>
              <Text>The oldest continent</Text>
            </Flex>
          </NextLink>
        </SwiperSlide>
        <SwiperSlide>
          <NextLink href="#">
            <Flex
              align="center"
              justify="center"
              direction="column"
              w="100%"
              h="450px"
              bg="rgba(255, 255, 255, 0.50)"
              border="1px solid black"
              filter="brightness(0.8)"
            >
              <Heading>Oceania</Heading>
              <Text>Description...</Text>
            </Flex>
          </NextLink>
        </SwiperSlide>
        <SwiperSlide>
          <NextLink href="#">
            <Flex
              align="center"
              justify="center"
              direction="column"
              w="100%"
              h="450px"
              bg="rgba(255, 255, 255, 0.50)"
              border="1px solid black"
              filter="brightness(0.8)"
            >
              <Heading>North America</Heading>
              <Text>Description...</Text>
            </Flex>
          </NextLink>
        </SwiperSlide>
        <SwiperSlide>
          <NextLink href="#">
            <Flex
              align="center"
              justify="center"
              direction="column"
              w="100%"
              h="450px"
              bg="rgba(255, 255, 255, 0.50)"
              border="1px solid black"
              filter="brightness(0.8)"
            >
              <Heading>South America</Heading>
              <Text>Description...</Text>
            </Flex>
          </NextLink>
        </SwiperSlide>
        <SwiperSlide>
          <NextLink href="#">
            <Flex
              align="center"
              justify="center"
              direction="column"
              w="100%"
              h="450px"
              bg="rgba(255, 255, 255, 0.50)"
              border="1px solid black"
              filter="brightness(0.8)"
            >
              <Heading>Africa</Heading>
              <Text>Description...</Text>
            </Flex>
          </NextLink>
        </SwiperSlide>
        <SwiperSlide>
          <NextLink href="#">
            <Flex
              align="center"
              justify="center"
              direction="column"
              w="100%"
              h="450px"
              bg="rgba(255, 255, 255, 0.50)"
              border="1px solid black"
              filter="brightness(0.8)"
            >
              <Heading>Asia</Heading>
              <Text>Description...</Text>
            </Flex>
          </NextLink>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
