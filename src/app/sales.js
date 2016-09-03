var database = require('./database');
var ObjectId = require('mongodb').ObjectID;

module.exports.getAll = function(req,res){
  var id = req.params.id;
  database.getFields('products', {_id:new ObjectId(id)}, {'sales':1}, res);
}

module.exports.post = function(req, res){
  var productId = req.params.id;
  database.put("products",{_id:new ObjectId(productId)},{"$push": {"sales":req.body}},res)
};
