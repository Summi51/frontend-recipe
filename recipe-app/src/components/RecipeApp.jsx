import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const RecipeApp = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const getRecipe = () => {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=accb3e193b3641bd97c58c6273bd52e1`
        )
        .then((res) => {
          setRecipe(res.data.results);
        })
        .catch((err) => console.log(err));
    };
    getRecipe();
  }, []);

  return (
    <VStack spacing={4} align="center">
      <Heading as="h1" size="xl" margin={'20px'}>
        Menu
      </Heading>
      <Container maxW="80%">
        <Grid templateColumns="repeat(3, 1fr)" gap={4} justifyContent="center">
          {recipe.map((item, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={4} 
              paddingTop={6} 
              textAlign="center"
            >
              <Center>
                <Image src={item.image} alt={item.title} />
              </Center>
              <Heading as="h3" size="md" p={2}>
                {item.title}
              </Heading>
              <Button
                style={{
                  background: "#FB8724",
                  color: "white",
                  borderRadius: "5px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  marginTop: "10px", 
                }}
              >
                Favorite
              </Button>
            </Box>
          ))}
        </Grid>
      </Container>
    </VStack>
  );
};

export default RecipeApp;
