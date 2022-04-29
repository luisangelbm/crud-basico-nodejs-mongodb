const express = require("express"); // npm i express
const mongoose = require("mongoose"); // npm i mongoose
require("dotenv").config(); // npm i dotenv
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoutes);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connect to mongodb Atlas"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log("servidor listen on port " + port));
