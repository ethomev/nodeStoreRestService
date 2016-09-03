var database = require('./database');
var ObjectId = require('mongodb').ObjectID;

module.exports.get = function(req, res){
  var category = req.params.category;
  database.getFields("products",{category:category},res);
};
