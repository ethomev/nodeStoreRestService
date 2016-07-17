var express = require('express');
var category = require('./category/category');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

app.get('/category', category.getAll)
app.get('/category/:name', category.getSingle)

app.post('/category', category.postCategory)

app.listen(3000, function(){
  console.log('Listening on port 3000');
  })
