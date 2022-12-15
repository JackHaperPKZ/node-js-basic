const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/users", (req, res) => {
  // Get the list of users and return it as a JSON object
  const exJson = { a: 555, B: 777 };
  res.json(exJson);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
