// This will be the entry point for the service
var express = require('express');
var category = require('./category');
var app = express();

app.get('/category', category.getAll)

app.listen(3000, function(){
  console.log('Listening on port 3000');
  })
