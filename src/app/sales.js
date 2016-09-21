var database = require('./database');
var ObjectId = require('mongodb').ObjectID;

module.exports.getAll = function(req,res){
  var id = req.params.id;
  database.getFields('products', {_id:new ObjectId(id)}, {'sales':1}, {}, res);
}

module.exports.post = function(req, res){
  var productId = req.params.id;
  database.put("products",{_id:new ObjectId(productId)},{"$push": {"sales":req.body},"$inc" : {'metadata.numberOfSales' : 1,'metadata.sumOfStars':
  req.body.review.stars}},res)
};

module.exports.put = function(req, res){
  var productId = req.params.id;
  var customerId = req.params.customerId;
  database.put("products", {_id:new ObjectId(productId), "sales" : {"$elemMatch" : {"customer":{ "$eq" : customerId}}}},
  {"$set": {"sales.$": {"customer":customerId, review:req.body}}}, res);
};

module.exports.delete = function(req, res){
  var productId = req.params.id;
  var customerId = req.params.customerId;
  database.put("products", {_id:new ObjectId(productId)}, {"$pull": {"sales" : {"customer" : customerId}}}, res);
};
