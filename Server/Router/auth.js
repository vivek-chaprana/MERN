const express = require("express");
const router = express.Router();

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

    const user = new User({ name, email, phone, work, password, cpassword });
    await user.save();

    res.status(201).send("User registered successfully.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to register user, Please try again later.");
  }
});

router.post('/signin',async (req, res) => {
    try {
        const {email , password} = req.body;
        if(!email || !password) res.status(403).send("Please enter all the fields");
        const userLogin = await User.findOne({ email: email})
        userLogin ? res.send("Login Sucessfull") : res.status(401).send("Invalid details")
        console.log(userLogin)
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed to Sign In, Please try again later.");
    }
})


module.exports = router;
