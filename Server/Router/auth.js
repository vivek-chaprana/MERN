const express = require("express");
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require("../db/connection");
const User = require("../Model/userSchema");

router.get("/", (req, res) => {
  res.send(`First application.
    (>‿◠)✌
    `);
});

//Registration Route
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).send("Error 422, Please fill all the fields ");
  }

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) return res.status(409).send("User already exists");
    else if (password != cpassword)
      return res
        .status(422)
        .send("Error : Password and confirm password do not match");
    else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).send("User registered successfully.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to register user, Please try again later.");
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      res.status(403).send("Please enter all the fields");
    const userLogin = await User.findOne({ email: email });
    if(userLogin){
      const isMatch = await bcrypt.compare(password, userLogin.password);
      let token = await userLogin.generateAuthToken();
      res.cookie("jwtoken",token,{
        expires: new Date(Date.now() + 25892000000),
        httpOnly:true
      })
      isMatch
      ? res.send("Login Sucessfull")
      : res.status(401).send("Invalid Credentials")
    }else{
      res.status(401).send("Invalid Credentials")
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to Sign In, Please try again later.");
  }
});

module.exports = router;
