import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Order = () => {
  const [data, setData] = useState([]);
  const data2 = JSON.parse(localStorage.getItem("oath"));
  const handleDelete = (itemToDelete) => {
    setData((prevData) =>
      prevData.filter((item) => item._id !== itemToDelete._id)
    );
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/SingleUserData?email=${data2?.email}`)
      .then((res) => {
        // console.log(res.data[0].allRecipe);
    
       res.data.length >0 && setData(res.data[0].allRecipe);

      });

    // axios
    //   .get(`http://localhost:8080/users/SingleUserData?email=${data2?.email}`)
    //   .then((res) => {
    //     if (res.data && res.data.length > 0 && res.data[0].allRecipe) {
    //       setData(res.data[0].allRecipe);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching user data:", error);
    //   });

  }, []);

  return (
    <Box>
      {data &&
        data?.map((item) => (
          <Card key={item._id} item={item} handledelete={handleDelete} />
        ))}
    </Box>
  );
};

export default Order;
