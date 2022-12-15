const express = require('express');
const app = express();
const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function calculateBMI(weight, height) {
  return weight / (height * height);
}

app.get('/calculateBMI/:weight/:height', (req, res) => {
  const weight = req.params.weight;
  const height = req.params.height;
  const bmi = calculateBMI(weight, height);

  // Connect to the database
  client.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      res.send('Error connecting to database');
      return;
    }

    // Insert the BMI document into the "bmi" collection
    const bmiCollection = client.db('mydb').collection('bmi');
    bmiCollection.insertOne({weight: weight, height: height, bmi: bmi}, (err) => {
      if (err) {
        console.error('Error inserting document:', err);
        }
    });
}  
});
