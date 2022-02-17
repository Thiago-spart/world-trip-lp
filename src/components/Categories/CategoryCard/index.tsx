import {
  Flex,
  FlexProps,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextLink } from "../../NextLink";

interface CategoryCardProps extends FlexProps {
  imgSrc: string;
  title: string;
  urlPath?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  imgSrc,
  title,
  urlPath = "#",
  ...props
}) => {
  const isMobileVersion = useBreakpointValue({
    base: true,
    sm: false,
  });

  return (
    <NextLink href={urlPath}>
      <Flex
        align="center"
        justify="center"
        gap={["2", "4"]}
        direction={isMobileVersion ? "row" : "column"}
        {...props}
      >
        {isMobileVersion ? (
          <Image
            src="/categories/circle.svg"
            alt="circle"
            w="8px"
            objectFit="contain"
          />
        ) : (
          <Image src={imgSrc} alt={title} w="85" objectFit="contain" />
        )}

        <Text as="h3" fontSize="md">
          {title}
        </Text>
      </Flex>
    </NextLink>
  );
};
