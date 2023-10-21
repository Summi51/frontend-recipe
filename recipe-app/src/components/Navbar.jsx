import {
  Box,
  Center,
  Flex,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useContext, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLock, FaUnlock } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { ProfileContext } from "../profileContext/profileContext";

const Navbar = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("oath"));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginCredentials, setLoginCredentials } = useContext(ProfileContext);

  const loginSuccess = (res) => {
    const decode = jwt_decode(res.credential);
    localStorage.setItem("oath", JSON.stringify(decode));
    axios.post(`https://recipe-backend-3.vercel.app/users`, decode).then((res) => {
      navigate("/");
      setLoginCredentials(decode);
      onClose();
    });
  };

  const loginError = (res) => {
    console.log(res);
  };

  useEffect(() => {
    data && data.name && setLoginCredentials(data);
  }, []);

  const logout = () => {
    localStorage.removeItem("oath");
    setLoginCredentials(null);
  };

  return (
    <Box>
      <Modal   closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent width={'70%'} >
          <ModalHeader>Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody  pb={6}>
            <Center>
              <GoogleLogin onSuccess={loginSuccess} onError={loginError} />
            </Center>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>


      <Flex
        bg="#FB8724"
        p="1%"
        color="black"
        justifyContent="space-between"
        alignItems="center"
      >
        <Menu display={["block", "block", "none", "none"]}>
          <MenuButton display={["block", "block", "none", "none"]}>
            <Box display={["block", "block", "none", "none"]}>
              <AiOutlineMenu
                display={["block", "block", "none", "none"]}
                fontWeight={"bold"}
                fontSize={"30px"}
              />
            </Box>
          </MenuButton>

          <MenuList
            display={["block", "block", "none", "none"]}
            position={"relative"}
            zIndex={"999"}
          >
            <MenuItem>
              <Box>
                <Link href="/" fontWeight={"medium"} color={"gray"}>
                  Home
                </Link>
              </Box>
            </MenuItem>
            <MenuItem>
              <Box>
                <Link fontWeight={"medium"} color={"gray"}>
                  Contact
                </Link>
              </Box>
            </MenuItem>
            <MenuItem>
              <Box>
                <Link color={"#8C67E6"} fontWeight={"medium"}>
                  About us
                </Link>
              </Box>
            </MenuItem>
          </MenuList>
        </Menu>



        <Link to="/" textDecoration="none">
          <Text
            display={["none", "none", "block", "block"]}
            fontFamily="Brygada 1918 , serif"
            fontStyle="italic"
            as="h1"
            fontWeight={"700"}
            fontSize="1.8rem"
            color="#fff"
          >
            Recipe Delights
          </Text>
        </Link>

        <List
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin={0}
          padding={0}
        >
          {data ? (
            <>
              <ListItem margin="0 10px">
                <Link
                  to=""
                  textDecoration="none"
                  color="#fff"
                  fontWeight="bold"
                >
                  <Text
                    textDecoration="none"
                    color="#fff"
                    fontWeight="bold"
                    display={["block", "block", "block", "block"]}
                  >
                    {data?.given_name}
                  </Text>
                </Link>
              </ListItem>
            </>
          ) : (
            ""
          )}

          <ListItem margin="0 10px">
            <Link
              to="/fav"
              textDecoration="none"
              color="#fff"
              fontWeight="bold"
            >
              <Flex>
                <Text
                  textDecoration="none"
                  color="#fff"
                  fontWeight="bold"
                  display={["block", "block", "block", "block"]}
                >
                  Favorite
                </Text>
                <Box
                  paddingTop="6px"
                  pl={1}
                  color="#fff"
                  display={["block", "block", "block", "block"]}
                >
                  <MdOutlineFavorite />
                </Box>
              </Flex>
            </Link>
          </ListItem>
          {!data ? (
            <ListItem margin="0 10px" onClick={onOpen}>
              <Flex>
                <Text
                  htmlFor={"googleauth"}
                  textDecoration="none"
                  color="#fff"
                  fontWeight="bold"
                  display={["block", "block", "block", "block"]}
                  cursor="pointer"
                >
                  Login
                </Text>
                <Box
                  paddingTop="6px"
                  pl={1}
                  color="#fff"
                  display={["block", "block", "block", "block"]}
                >
                  <FaUnlock />
                </Box>
              </Flex>
            </ListItem>
          ) : (
            <ListItem margin="0 10px" onClick={logout}>
              <Flex>
                <Text
                  htmlFor={"googleauth"}
                  textDecoration="none"
                  color="#fff"
                  fontWeight="bold"
                  cursor="pointer"
                  display={["block", "block", "block", "block"]}
                >
                  Logout
                </Text>
                <Box
                  paddingTop="5px"
                  pl={1}
                  color="#fff"
                  display={["block", "block", "block", "block"]}
                >
                  <FaLock />
                </Box>
              </Flex>
            </ListItem>
          )}
          <ListItem id="googleauth" display={"none"}></ListItem>
        </List>
      </Flex>
    </Box>
  );
};

export default Navbar;
