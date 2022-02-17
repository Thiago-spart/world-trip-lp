import { SimpleGrid, Wrap } from "@chakra-ui/react";
import { CategoryCard } from "./CategoryCard";

export const Categories = () => {
  return (
    <Wrap
      justify="center"
      spacing={["60px", "80px", "100px"]}
      pt={["36px", null, "80px"]}
      px={["50px", null, "100px"]}
    >
      <CategoryCard imgSrc="/categories/cocktail.svg" title="Nightlife" />
      <CategoryCard imgSrc="/categories/surf.svg" title="Beach" />
      <CategoryCard imgSrc="/categories/building.svg" title="Modern" />
      <CategoryCard imgSrc="/categories/museum.svg" title="Classic" />
      <CategoryCard
        imgSrc="/categories/earth.svg"
        title="more..."
        alignSelf="center"
        justifySelf="center"
      />
    </Wrap>
  );
};
