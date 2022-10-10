const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/connection");
const User = require("../Model/userSchema");
const authenticate = require("../Middlewares/authenticate");

router.get("/", (req, res) => {
  res.send(`First application.
    (>‿◠)✌
    `);
});

//Registration Route
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(422)
      .json({ Error: "Error 422, Please fill all the fields. " });
  }

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists)
      return res.status(409).json({ Error: "User already exists." });
    else if (password != cpassword)
      return res
        .status(422)
        .json({ Error: "Password and confirm password do not match." });
    else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ Success: "User registered successfully." });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ Error: "Failed to register user, Please try again later." });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      res.status(403).send("Please fill all the fields.");
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      let token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      isMatch
        ? res.send("Login Sucessfull.")
        : res.status(401).send("Invalid Credentials.");
    } else {
      res.status(401).send("Invalid Credentials.");
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ Error: "Failed to Sign In, Please try again later." });
  }
});

//About page
router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//Get user data for about and login page
router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});
//Contact us page
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message || !phone) {
      res.status(403).json({ Error: "Please fill all the fields." });
      return console.log("Please fill all the fields.");
    } else {
      const userContact = await User.findOne({ _id: req.userID });

      if (userContact) {
        const userMessage = await userContact.addMessage(
          name,
          email,
          phone,
          message
        );
        await userContact.save();
        res.status(201).json({ message: "Message Sent Sucessfully." });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
