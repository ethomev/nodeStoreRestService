var express = require('express');
var category = require('./category/category');
var product = require('./product/product');
var bodyParser = require('body-parser');
var app = express();

mongo_db_url = "mongodb://localhost:27017/music_store";

app.use(bodyParser.json())

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

app.listen(3000, function(){
  console.log('Listening on port 3000');
  })
