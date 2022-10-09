const jwt = require("jsonwebtoken");
const User = require("../Model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log("Token verified")
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      console.error("User Not Found.")
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send("Unauthorized Login : No token found.");
    console.log(err);
  }
};


module.exports = Authenticate;