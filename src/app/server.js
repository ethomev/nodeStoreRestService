var express = require('express');
var category = require('./category/category');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

app.get('/category', category.getAll)
app.get('/category/:name', category.get)

app.post('/category', category.post)

app.put('/category/:name', category.put)

app.delete('/category/:name', category.delete)

app.listen(3000, function(){
  console.log('Listening on port 3000');
  })
