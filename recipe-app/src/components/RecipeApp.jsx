import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import DishCard from "./DishCard";
import ImageSlider from './ImageSlider/ImageSlider'
const apiKey = process.env.REACT_APP_ApiKey;
let limit = 6;

const RecipeApp = (query) => {
  const [recipe, setRecipe] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  // Use media queries to determine the screen size
  const [isMobile] = useMediaQuery("(max-width: 30em)");
  const [isTablet] = useMediaQuery("(max-width: 48em)");
  const [isLargeScreen] = useMediaQuery("(min-width: 64em)");

  useEffect(() => {
    const getRecipe = () => {
      axios
        .get(`https://api.spoonacular.com/recipes/complexSearch`, {
          params: {
            apiKey: apiKey,
            number: limit,
            query: searchTerm,
            offset: (page - 1) * limit,
          },
        })
        .then((res) => {
          console.log(res.data);
          setRecipe(res.data.results);
        })
        .catch((err) => console.log(err));
    };
    getRecipe();
  }, [searchTerm, page]);

  return (
    <Box>
      <Box>
        <ImageSlider />
      </Box>

      <VStack marginTop="2px" spacing={4} align="center">
        <Heading
          fontFamily={"Tangerine"}
          fontStyle={"italic"}
          width="100%"
          as="h1"
          size="xl"
          margin={["20px", "20px"]}
          background="linear-gradient(to left, #ed59e1, #FB8724)"
        >
          <Text color="white" fontSize={["50px", "50px"]}>
            Menu
          </Text>
        </Heading>

        <InputGroup w={isMobile ? "250px" : "350px"}>
          <Input
            type="text"
            borderRadius="9999px"
            bg="#fff"
            fontSize="17px"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            border="2px solid gray"
          />
          <InputRightElement h="100%">
            <FaSearch color="#999" />
          </InputRightElement>
        </InputGroup>

        <HStack spacing={4} justify="center" alignItems="center">
          <Button
            isDisabled={page === 1}
            onClick={() => setPage(page - 1)}
            color="white"
            backgroundColor="black"
            padding="20px"
            borderRadius="4%"
            size="md"
          >
            Previous
          </Button>
          <Button
            padding="20px"
            borderRadius="4%"
            size="md"
            color="white"
            backgroundColor="black"
          >
            {page}
          </Button>
          <Button
            padding="20px"
            borderRadius="4%"
            size="md"
            onClick={() => setPage(page + 1)}
            color="white"
            backgroundColor="black"
          >
            Next
          </Button>
        </HStack>

        <Container maxW="80%">
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              isTablet
                ? "repeat(2, 1fr)"
                : isLargeScreen
                ? "repeat(3, 1fr)"
                : "repeat(2, 1fr)",
            ]}
            gap={4}
            justifyContent="center"
          >
            {recipe.map((item, index) => (
              <DishCard key={item.id} item={item} />
            ))}
          </Grid>
        </Container>
      </VStack>
    </Box>
  );
};

export default RecipeApp;
