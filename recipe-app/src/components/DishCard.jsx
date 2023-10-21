import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { ProfileContext } from "../profileContext/profileContext";

const DishCard = ({ item }) => {
  const { loginCredentials } = useContext(ProfileContext);
  const toast = useToast();
  const AddToFaviourites = async () => {
    if (loginCredentials) {
      let FaviouriteData = {
        image: item.image,
        imageType: item.imageType,
        title: item.title,
        userEmail: loginCredentials.email,
      };
      console.log(FaviouriteData);
      try {
        axios
          .post("http://localhost:8080/favourite/add", FaviouriteData)
          .then((res) => {
            console.log(res.data);
            toast({
              title: "Data Added Successfully!",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
          });
      } catch (error) {
        console.log(error.message);
      }
    } else {
      toast({
        title: "Please log in first to add to favorites.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box
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
        onClick={AddToFaviourites}
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
  );
};

export default DishCard;
