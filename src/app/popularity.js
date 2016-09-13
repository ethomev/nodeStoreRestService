var database = require('./database');
var ObjectId = require('mongodb').ObjectID;

module.exports.get = function(req, res){
  var category = req.params.category;
  database.getSetAmountOfDocuments("products",{category:category},{},{'metadata.numberOfSales':-1,'metadata.sumOfStars':-1},20,res);
};
