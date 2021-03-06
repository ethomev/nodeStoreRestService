var database = require('./database');
var ObjectId = require('mongodb').ObjectID;

module.exports.getAll = function(req, res){
  database.getAndSort("products", req.query, {'metadata.numberOfSales':-1,'metadata.sumOfStars':-1}, res);
};

module.exports.get = function(req, res){
  var id = req.params.id;
  database.get("products",{_id:new ObjectId(id)}, res);
};

module.exports.post = function(req, res){
  database.post("products",req.body, res);
};

module.exports.put = function(req, res){
    var id = req.params.id;
    database.put("products", {_id:new ObjectId(id)}, req.body, res);
};

module.exports.delete = function(req, res){
    var id = req.params.id;
    database.delete("products", {_id:new ObjectId(id)}, res);
};

module.exports.deleteAll = function(req, res){
  database.deleteAll("products", res);
}
