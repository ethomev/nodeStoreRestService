var database = require('./database');
var ObjectId = require('mongodb').ObjectID;

module.exports.getAll = function(req, res){
  database.get("customers", {}, res);
};

module.exports.get = function(req, res){
  var id = req.params.id;
  database.get("customers", {_id: new ObjectId(id)}, res);
};

module.exports.post = function(req, res){
  var customer = {
    name:req.body.name,
    email:req.body.email,
    address:req.body.address
  };
  database.post("customers", customer, res);
};

module.exports.put = function(req, res){
  var id = req.params.id;
  var customer = {
    name:req.body.name,
    email:req.body.email,
    address:req.body.address
  };
  database.put("customers", {_id:new ObjectId(id)}, customer, res);
};

module.exports.delete = function(req, res){
  var id = req.params.id;
  database.delete("customers", {_id:new ObjectId(id)}, res);
};
