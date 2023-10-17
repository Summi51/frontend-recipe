import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      bg="#FB8724"
      p="1%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to="/" textDecoration="none">
        <Text as="h1" fontWeight={"700"} fontSize="1.8rem" color="#fff">
          Recipe Delights
        </Text>
      </Link>
      <InputGroup w="250px">
        <Input
          type="text"
          borderRadius="9999px"
          bg="#fff"
          fontSize="17px"
          placeholder="Search"
        />
        <InputRightElement h="100%" children={<FaSearch color="#999" />} />
      </InputGroup>
      <List
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin={0}
        padding={0}
      >
        <ListItem margin="0 10px">
          <Link to="" textDecoration="none" color="#fff" fontWeight="bold">
            <Text textDecoration="none" color="#fff" fontWeight="bold">
              {" "}
              Favorite
            </Text>
          </Link>
        </ListItem>

        <ListItem margin="0 10px">
          <Text
            textDecoration="none"
            color="#fff"
            fontWeight="bold"
            cursor="pointer"
          >
            Login
          </Text>
        </ListItem>
      </List>
    </Flex>
  );
};

export default Navbar;
