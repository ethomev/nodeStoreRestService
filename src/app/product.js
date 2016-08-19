var database = require('./database');
var ObjectId = require('mongodb').ObjectID;

module.exports.getAll = function(req, res){
  database.get("products", {}, res);
};

module.exports.get = function(req, res){
  var id = req.params.id;
  database.get("products",{_id:new ObjectId(id)}, res);
};

module.exports.post = function(req, res){
  var product = {
    manufacturer:req.body.manufacturer,
    model:req.body.model,
    desc:req.body.desc,
    price:req.body.price,
    category:req.body.category};
  database.post("products",product, res);
};

module.exports.put = function(req, res){
    var id = req.params.id;
    var product = {
      manufacturer:req.body.manufacturer,
      model:req.body.model,
      desc:req.body.desc,
      price:req.body.price,
      category:req.body.category};
    database.put("products", {_id:new ObjectId(id)}, product, res);
};

module.exports.delete = function(req, res){
    var id = req.params.id;
    database.delete("products", {_id:new ObjectId(id)}, res);
};
