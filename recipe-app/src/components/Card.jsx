import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
const Card = ({ item, handledelete }) => {
  const toast = useToast();

  const handleDelete = () => {
    axios
      .delete(
        `https://recipe-backend-3.vercel.app/favourite/delete/${item._id}`
      )
      .then((res) => {
        handledelete(item);
        toast({
          title: "Success",
          description: "Dish Removed",
          status: "success",
          duration: 1000,
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error deleting dish:", error);
        toast({
          title: "Error",
          description: "Could not delete dish",
          status: "error",
          duration: 1000,
          position: "top",
          isClosable: true,
        });
      });
  };

  return (
    <Box>
      <Flex
        m={3}
        p={6}
        borderBottom="1px solid gray"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box
          margin="auto"
          w={{ base: "30%", md: "15%" }}
          display="flex"
          gap={10}
        >
          <Image
            borderRadius="5%"
            src={item.image}
            w="100px"
            h="100px"
            objectFit="cover"
          />
        </Box>
        <Box margin="auto" w={{ base: "30%", md: "15%" }} gap={10}>
          <Heading
            as="h2"
            size="md"
            fontSize={{ base: "1rem", md: "1vw" }}
            mb="0.5rem"
          >
            {item.title}
          </Heading>
        </Box>
        <Text
          textAlign="center"
          w={{ base: "30%", md: "15%" }}
          fontSize="1rem"
          fontWeight="700"
          mb="0.5rem"
          gap={10}
        >
          {item.userEmail}
        </Text>
        {/* <Text w={{ base: "30%", md: "15%" }} fontSize="1rem" fontWeight="700" mb="0.5rem" gap={10}>
          {item.imageType}
        </Text> */}

        <Flex
          w={{ base: "30%", md: "15%" }}
          margin="auto"
          justifyContent={{ base: "center", md: "flex-end" }}
        >
          <IconButton
            colorScheme="red"
            aria-label="Delete"
            onClick={handleDelete}
            icon={<DeleteIcon />}
            mr="0.5rem"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
