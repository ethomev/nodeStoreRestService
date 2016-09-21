var express = require('express');
var mongo = require('mongodb').MongoClient;
var category = require('./category');
var product = require('./product');
var customer = require('./customer');
var sales = require('./sales');
var popularity = require('./popularity');
var otherPurchases = require('./otherPurchases');
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
app.get('/category/:id', category.get)
app.get('/product', product.getAll)
app.get('/product/:id', product.get)
app.get('/product/:id/sales', sales.getAll)
app.get('/customer', customer.getAll)
app.get('/customer/:id', customer.get)
app.get('/mostPopular/:category', popularity.get)
app.get('/otherPurchases/:productId', otherPurchases.get)

app.post('/category', category.post)
app.post('/product', product.post)
app.post('/product/:id/sales', sales.post)
app.post('/customer', customer.post)

app.put('/category/:id', category.put)
app.put('/product/:id', product.put)
app.put('/product/:id/sales/:customerId',sales.put)
app.put('/customer/:id', customer.put)

app.delete('/category/:id', category.delete)
app.delete('/product/:id', product.delete)
app.delete('/customer/:id', customer.delete)
app.delete('/product/:id/sales/:customerId', sales.delete)
