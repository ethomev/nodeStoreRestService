var express = require('express');
var mongo = require('mongodb').MongoClient;
var category = require('./category/category');
var product = require('./product/product');
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

app.post('/category', category.post)
app.post('/product', product.post)

app.put('/category/:name', category.put)
app.put('/product/:model', product.put)

app.delete('/category/:name', category.delete)
app.delete('/product/:model', product.delete)
