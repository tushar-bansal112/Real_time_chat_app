const jwt = require("jsonwebtoken");

const config = process.env;

//Creating jwt token for logged in user
const verifyToken = (req, res, next) => {
  console.log(req.query);
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  console.log(req.body.token);
  console.log(req.query.token);
  console.log(req.headers["x-access-token"]);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
