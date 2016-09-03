var database = require('./database');
var ObjectId = require('mongodb').ObjectID;

module.exports.getAll = function(req, res){
  database.get("categories", {}, res);
};

module.exports.get = function(req, res){
  var id = req.params.id;
  database.get("categories", {_id:new ObjectId(id)}, res);
};

module.exports.post = function(req, res){
  database.post("categories", req.body, res);
};

module.exports.put = function(req, res){
    var id = req.params.id;
    database.put("categories", {_id:new ObjectId(id)}, req.body, res);
};

module.exports.delete = function(req, res){
    var id = req.params.id;
    database.delete("categories", {_id:new ObjectId(id)}, res);
};
