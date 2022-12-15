//npm install express mongoose body-parser --save
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/my_database";

mongoose.connect(url, { useNewUrlParser: true });

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});
