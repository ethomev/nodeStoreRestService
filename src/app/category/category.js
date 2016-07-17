var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://localhost:27017/music_store";

var findDocuments = function(fields, collection, callback){
  collection.find(fields).toArray(function(err,docs){
    assert.equal(null,err);
    callback(docs);
  })
};

var check = function(err, message){
  assert.equal(null, err);
  console.log(message);
};

module.exports.getAll = function(req, res){
  mongo.connect(url, function(err, db){
    check(err, "Successfully connected to db");

    var collections = db.collection("categories");

    findDocuments({}, collections, function(result){
      res.status(200);
      res.send(result);
    });

    db.close();
  });
};

module.exports.get = function(req, res){
  mongo.connect(url, function(err, db){
    check(err, "Successfully connected to db");

    var name = req.params.name;
    var collections = db.collection("categories");

    findDocuments({name:name},collections, function(result){
      res.status(200);
      res.send(result);
    });

    db.close();
  })
};

module.exports.post = function(req, res){
  mongo.connect(url, function(err, db){
    check(err, "Successfully connected to db");

    var category = {
      name:req.body.name,
      desc:req.body.desc,
      parent:req.body.parent};
    var collections = db.collection("categories");

    collections.insert(category, function(err, result){
      assert.equal(null, err);
      res.status(201);
      res.send("Category created in database");
      });
    db.close();
    })
};

module.exports.put = function(req, res){
  mongo.connect(url, function(err, db){
    check(err, "Successfully connected to db");

    var name = req.params.name;
    var collections = db.collection("categories");

    var category = {
      name:name,
      desc:req.body.desc,
      parent:req.body.parent
      };

    collections.update({name:name}, category, {upsert:true}, function(err, result){
      assert.equal(null, err);
      res.status(204);
      res.send("Category created in database");
    });
  })
};

module.exports.delete = function(req, res){
  mongo.connect(url, function(err, db){
    check(err, "Successfully connected to db");

    var name = req.params.name;
    var collections = db.collection("categories");

    collections.remove({name:name}, function(err, result){
      assert.equal(null, err);
      res.status(204);
      res.send("Category deleted successfully");
    });
  });
};
