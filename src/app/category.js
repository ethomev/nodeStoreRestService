var database = require('./database');

var findDocuments = function(fields, collection, callback){
  collection.find(fields).toArray(function(err,docs){
    assert.equal(null,err);
    callback(docs);
  })
};

module.exports.getAll = function(req, res){
  database.get("categories", {}, res);
};

module.exports.get = function(req, res){
  var criteria = {name:req.params.name};
  database.get("categories", criteria, res);
};

module.exports.post = function(req, res){
  var category = {
    name:req.body.name,
    desc:req.body.desc,
    parent:req.body.parent};
  database.post("categories", category, res);
};

module.exports.put = function(req, res){
    var name = req.params.name;
    var category = {
      name:name,
      desc:req.body.desc,
      parent:req.body.parent
      };
    database.put("categories", {name:name}, category, res);
};

module.exports.delete = function(req, res){
    var name = req.params.name;
    database.delete("categories", {name:name}, res);
};
