// /npm install mongodb
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

/*const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("users");
  collection.find().toArray((err, users) => {
    console.log(users);
  });
  client.close();
});*/

/** insertOne */
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("users");
  collection.insertOne({
    name: "John Doe",
    age: 30
  });
  client.close();
});
*/
