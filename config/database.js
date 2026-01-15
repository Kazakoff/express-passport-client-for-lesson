require("dotenv").config();
console.log(process.env.MONGODB_URI);
module.exports = {
  jwt_secret: process.env.JWT_SECRET,
  database: process.env.MONGODB_URI,
};
