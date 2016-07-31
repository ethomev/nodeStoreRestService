var assert = require('assert');

var findDocuments = function(fields, collection, callback){
  collection.find(fields).toArray(function(err,docs){
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

module.exports.post = function(collection, data, res){
  var collections = db.collection(collection);
    collections.insert(data, function(err, result){
      assert.equal(null, err);
      res.status(201);
      res.send("Data successfully inserted");
      });
};

module.exports.put = function(collection, criteria, data, res){
  var collections = db.collection(collection);
  collections.update(criteria, data, {upsert:true}, function(err, result){
    assert.equal(null, err);
    res.status(204);
    res.send("Data successfully inserted");
    });
};

module.exports.delete = function(collection, criteria, res){
  var collections = db.collection(collection);
  collections.remove(criteria, function(err, result){
    assert.equal(null, err);
    res.status(204);
    res.send("Data successfully deleted");
    });
};
