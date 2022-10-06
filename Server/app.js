const dotenv = require("dotenv");

const express = require("express");

//Initialize express
const app = express();
const port = 3000;

//Config.env
dotenv.config({ path: "./config.env" });

//Database connection
require("./db/connection");

//To view JSON files
app.use(express.json())

//Roter Files
app.use(require('./Router/auth'))


//Middleware
const middleware = (req, res, next) => {
  console.log("This is middleware");
  next();
};

app.get("/", (req, res) => {
  res.send(`First express application.
    (>‿◠)✌
    `);
});
app.get("/about", middleware, (req, res) => {
  console.log("This is about");
  res.send(`About Page.
    (>‿◠)✌
    `);
});
app.get("/contact", (req, res) => {
  res.status(200).send(`Contact Page.
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
