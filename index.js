const express = require("express");
const dbConnection = require("./DBConnection");
const router = require("./routers");

const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("I'm live now...");
});

app.listen("3000", () => {
  console.log("http://localhost:3000");
});
