const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./db");

const { UserRouter } = require("./routes/userRoutes");
const { FavouriteRouter } = require("./routes/FavouriteRoute");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  // console.log("Hello World");
  res.send("Hello World");
});

app.use("/users", UserRouter);
app.use("/favourite", FavouriteRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to the DB");
  } catch (err) {
    console.log(err);
    console.log("cannot connect to the DB");
  }
  console.log(`Server is running at port ${process.env.PORT}`);
});
