const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    console.log(jwtToken);

    if (!jwtToken) {
      res.status(403).json("Not Authorized");
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    req.user = payload.user;

    console.log(payload.user);
    next();
  } catch (error) {
    console.log(error.message);
  }
};
