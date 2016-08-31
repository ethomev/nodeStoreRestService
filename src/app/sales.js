var database = require('./database');
var ObjectId = require('mongodb').ObjectID;

module.exports.getAll = function(req,res){
  var id = req.params.id;
  database.getFields('products', {_id:new ObjectId(id)}, {'sales':1}, res);
}

module.exports.post = function(req, res){
  var productId = req.params.id;
  var saleId = req.params.saleId;
  var sale = {
    customer:req.body.customer,
    review: {
      title:req.body.review.title,
      body:req.body.review.body,
      stars:req.body.review.stars
      }
    };
  database.put("products",{_id:new ObjectId(productId)},{"$push": {"sales":sale}},res)
};
