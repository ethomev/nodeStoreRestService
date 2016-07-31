var database = require('./database');

module.exports.getAll = function(req, res){
  database.get("customers", {}, res);
};

module.exports.get = function(req, res){
  var email = req.params.email;
  database.get("customers", {email:email}, res);
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
  var email = req.params.email;
  var customer = {
    name:req.body.name,
    email:email,
    address:req.body.address
  };
  database.put("customers", {email:email}, customer, res);
};

module.exports.delete = function(req, res){
  var email = req.params.email;
  database.delete("customers", {email:email}, res);
};
