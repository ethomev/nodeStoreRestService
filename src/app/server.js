var express = require('express');
var mongo = require('mongodb').MongoClient;
var category = require('./category');
var product = require('./product');
var customer = require('./customer');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json())

db = null;

mongo.connect("mongodb://localhost:27017/music_store", function(err, database){
  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = database;

  app.listen(3000, function(){
    console.log('Listening on port 3000');
    })
});

app.get('/category', category.getAll)
app.get('/category/:name', category.get)
app.get('/product', product.getAll)
app.get('/product/:model', product.get)
app.get('/customer', customer.getAll)
app.get('/customer/:email', customer.get)

app.post('/category', category.post)
app.post('/product', product.post)
app.post('/customer', customer.post)

app.put('/category/:name', category.put)
app.put('/product/:model', product.put)
app.put('/customer/:email', customer.put)

app.delete('/category/:name', category.delete)
app.delete('/product/:model', product.delete)
app.delete('/customer/:email', customer.delete)
