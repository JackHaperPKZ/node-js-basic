const express = require("express");
const app = express();

function calculateBMI(weight, height) {
  return weight / (height * height);
}

app.get("/calculateBMI/:weight/:height", (req, res) => {
  const weight = req.params.weight;
  const height = req.params.height;
  const bmi = calculateBMI(weight, height);
  res.send({ bmi: bmi });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});

/*In this example, the /calculateBMI/:weight/:height endpoint receives the user's weight and height in the URL and uses them to calculate the BMI. The result is returned in the response as a JSON object.

To use this API, you would send a GET request to the /calculateBMI/:weight/:height endpoint, with the weight and height values in the URL. For example, if you wanted to calculate your BMI with a weight of 75 kg and a height of 1.75 m, you would send a request to http://localhost:3000/calculateBMI/75/1.75, and the API would return a JSON object with your BMI value.

Note that this is just a simple example to illustrate how you could create a RESTful API for calculating BMI. In a real-world application, you would need to add more robust error handling and validation, as well as authentication and authorization for secure access to the API.*/
