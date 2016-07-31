var database = require('./database');

module.exports.getAll = function(req, res){
  database.get("products", {}, res);
};

module.exports.get = function(req, res){
  var model = req.params.model;
  database.get("products",{model:model}, res);
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
    var model = req.params.model;
    var product = {
      manufacturer:req.body.manufacturer,
      model:model,
      desc:req.body.desc,
      price:req.body.price,
      category:req.body.category};
    database.put("products", {model:model}, product, res);
};

module.exports.delete = function(req, res){
    var model = req.params.model;
    database.delete("products", {model:model}, res);
};
