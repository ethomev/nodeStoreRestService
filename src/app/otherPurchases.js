var database = require('./database');
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');

module.exports.get = function(req,res){
  var productId = new ObjectId(req.params.productId);
  var collection = db.collection('products');
  var customers = new Array();
  collection.find({'_id':productId},{'sales':1}).toArray(function(err,docs){
    assert.equal(null, err);
    docs.forEach(function(currentValue){
      if(currentValue.sales != null){
        currentValue.sales.forEach(function(childCurrentValue){
          customers.push(childCurrentValue.customer);
          });
      }
    });
    database.getSetAmountOfDocuments("products",
      {"_id" : {"$ne" : productId},"sales" : {"$elemMatch" : {"customer":{ "$in" : customers}}}},
      {'manufacturer':1,'model':1,'category':1},
      {'metadata.numberOfSales':-1,'metadata.sumOfStars':-1}, 5, res)
  });
};
