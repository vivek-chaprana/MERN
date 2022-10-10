const dotenv = require("dotenv");

const express = require("express");

//Initialize express
const app = express();
const port = 5000;

//Config.env
dotenv.config({ path: "./config.env" });

//Database connection
require("./db/connection");

//To view JSON files
app.use(express.json())

//Roter Files
app.use(require('./Router/auth'))



app.get("/", (req, res) => {
  res.send(`First express application.
    (>‿◠)✌
    `);
});


app.get("/signin", (req, res) => {
  res.status(200).send(`Login.
    (>‿◠)✌
    `);
});
app.get("/signup", (req, res) => {
  res.status(200).send(`Register.
    (>‿◠)✌
    `);
});

app.listen(port, () => {
  console.log("Application listening on port " + port);
});
