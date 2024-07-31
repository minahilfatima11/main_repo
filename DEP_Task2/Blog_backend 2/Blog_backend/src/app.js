const bodyParser = require("body-parser");
const express = require("express");
const router = require("./Routes/routes");
const dbConnect = require("./Config/db");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;
dbConnect();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);

app.listen(port, () => {
  try {
    console.log("Server is running on port:", port);
  } catch (error) {
    console.log("Server error:", error);
  }
});
