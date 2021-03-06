var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var findDocuments = function(criteria, collection, callback){
  collection.find(criteria).toArray(function(err,docs){
    assert.equal(null,err);
    callback(docs);
  })
};

module.exports.get = function(collection, criteria, res){
  var collections = db.collection(collection);
  findDocuments(criteria, collections, function(result){
    res.status(200);
    console.log("Collection: "+collection+" Result: "+result[0].toString());
    res.send(result[0]);
  });
};

module.exports.getAndSort = function(collection, criteria, sortOrder, res){
  var collections = db.collection(collection);
  collections.find(criteria).sort(sortOrder).toArray(function(err,docs){
      assert.equal(null,err);
      res.status(200);
      console.log("Collection: "+collection+" Result: "+docs);
      res.send(docs);
    })
};

module.exports.getFieldsOfEntry = function(collectionName, id, fields, sortOrder, res){
  var collection = db.collection(collectionName);
  var criteria = {_id:new ObjectId(id)};
  collection.find(criteria,fields).sort(sortOrder).toArray(function(err,docs){
    assert.equal(null, err);
    res.status(200);
    console.log("Collection: "+collection+" Result: "+docs);
    res.send(docs);
  })
};

module.exports.getSetAmountOfDocuments = function(collectionName, criteria, fields, sortOrder, limitAmount, res){
  var collection = db.collection(collectionName);
  collection.find(criteria,fields).sort(sortOrder).limit(limitAmount).toArray(function(err,docs){
      assert.equal(null, err);
      res.status(200);
      console.log("Collection: "+collection+" Result: "+docs);
      res.send(docs);
    })
};
module.exports.post = function(collection, data, res){
  var collections = db.collection(collection);
    collections.insert(data, function(err, result){
      assert.equal(null, err);
      res.status(201);
      console.log("Collection: "+collection+" Result: "+result.ops[0]);
      res.send(result.ops[0]);
      });
};

module.exports.put = function(collection, criteria, data, res){
  var collections = db.collection(collection);
  collections.update(criteria, data, {upsert:true}, function(err, result){
    assert.equal(null, err);
    res.status(204);
    console.log("Collection: "+collection+" Result: "+result);
    res.send(result);
    });
};

module.exports.putSale = function(collection, criteria, data, res){
  var collections = db.collection(collection);
  collections.update(criteria, data, {upsert:true}, function(err){
    assert.equal(null, err);
      collections.find(criteria,{'sales':1}).toArray(function(err,docs){
        assert.equal(null, err);
        res.status(201);
        console.log("Collection: "+collection+" Result: "+docs[0].sales[0]);
        res.send(docs[0].sales[0]);
      })
    });
};

module.exports.delete = function(collection, criteria, res){
  var collections = db.collection(collection);
  collections.remove(criteria, function(err, result){
    assert.equal(null, err);
    res.status(204);
    console.log("Collection: "+collection+" Result: "+result);
    res.send(result);
    });
};

module.exports.deleteAll = function(collectionName, res){
  var collection = db.collection(collectionName);
  collection.remove({}, function(err, result){
    assert.equal(null, err);
    res.status(204);
    console.log("Collection: "+collection+" Result: "+result);
    res.send(result);
  })
}
