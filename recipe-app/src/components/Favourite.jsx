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
      .get(`https://recipe-backend-3.vercel.app/users/SingleUserData?email=${data2?.email}`)
      .then((res) => {

    
       res.data.length >0 && setData(res.data[0].allRecipe);

      });

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
