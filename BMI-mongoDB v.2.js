//node.js create resfull api
//calculate BMI function
//calculate BMI save to mongoDB

//https://expressjs.com/en/starter/basic-routing.html
const express = require("express");
const mongodb = require("mongodb");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.post("/bmi", async (req, res) => {
  const { weight, height, userId } = req.body;

  // Calculate BMI
  const bmi = weight / (height * height);

  // Connect to the MongoDB database
  const client = await mongodb.connect("mongodb://localhost:27017");
  const db = client.db("mydb");

  // Save the BMI result to the 'results' collection
  await db.collection("results").insertOne({ userId, bmi });

  // Return the BMI result to the client
  res.send({ bmi });

  // Close the database connection
  client.close();
});

/**
 * 
 const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);

  // insert the BMI calculation into the database
  db.collection('bmis').insertOne({
    weight: 75, // in kilograms
    height: 1.8, // in meters
    bmi: calculateBMI(75, 1.8),
    date: new Date()
  }, (err, res) => {
    if (err) throw err;
    console.log('BMI calculation saved to database');
    client.close();
  });
});

 */

/** insertOne
 * 
 const express = require('express');
const app = express();

// create a GET route that returns the BMI value
app.get('/api/bmi/:id', (req, res) => {
  // get the id from the URL query string
  const id = req.params.id;

  // retrieve the BMI value from the database
  db.collection('bmis').findOne({ id: id }, (err, result) => {
    if (err) throw err;

    // return the BMI value in the response
    res.json({ bmi: result.bmi });
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
 
*/

/***
 const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// create a POST route that saves the BMI value
app.post('/api/bmi', (req, res) => {
  // get the BMI value from the request body
  const bmi = req.body.bmi;

  // save the BMI value to the database
  db.collection('bmis').insertOne({
    bmi: bmi,
    date: new Date()
  }, (err, result) => {
    if (err) throw err;
    console.log('BMI value saved to database');
    res.json({ message: 'BMI value saved successfully' });
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

 */
