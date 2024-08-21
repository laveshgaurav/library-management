const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const authMiddleware = async (req, res, next) => {
  const token = req?.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).send({ error: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, "library_management");
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).send({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = authMiddleware;
