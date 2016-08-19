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
  var category = {
    name:req.body.name,
    desc:req.body.desc,
    parent:req.body.parent};
  database.post("categories", category, res);
};

module.exports.put = function(req, res){
    var id = req.params.id;
    var category = {
      name:req.body.name,
      desc:req.body.desc,
      parent:req.body.parent
      };
    database.put("categories", {_id:new ObjectId(id)}, category, res);
};

module.exports.delete = function(req, res){
    var id = req.params.id;
    database.delete("categories", {_id:new ObjectId(id)}, res);
};
