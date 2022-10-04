const express = require("express");

const ConnectDB = require("./Config/ConnectDB");
const ContactRoutes = require("./Routes/Contact");

const app = express();

require("dotenv").config();

ConnectDB();


app.use(express.json());


app.use("/api/Contact", ContactRoutes);

app.listen(process.env.PORT, () =>
  console.log(`server is up and running on port ${process.env.PORT}`)
);
