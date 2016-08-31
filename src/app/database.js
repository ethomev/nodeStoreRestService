var assert = require('assert');

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
    res.send(result);
  });
};

module.exports.getFields = function(collection, criteria, fields, res){
  var collection = db.collection(collection);
  collection.find(criteria,fields).toArray(function(err,docs){
    assert.equal(null, err);
    res.status(200);
    res.send(docs);
  })
};

module.exports.post = function(collection, data, res){
  var collections = db.collection(collection);
    collections.insert(data, function(err, result){
      assert.equal(null, err);
      res.status(201);
      res.send(result.insertedIds[0]);
      });
};

module.exports.put = function(collection, criteria, data, res){
  var collections = db.collection(collection);
  collections.update(criteria, data, {upsert:true}, function(err, result){
    assert.equal(null, err);
    res.status(204);
    res.send(result);
    });
};

module.exports.delete = function(collection, criteria, res){
  var collections = db.collection(collection);
  collections.remove(criteria, function(err, result){
    assert.equal(null, err);
    res.status(204);
    res.send(result);
    });
};
