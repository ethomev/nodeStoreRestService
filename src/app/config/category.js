var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://localhost:27017/music_store";

module.exports.getAll = function(req, res){
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    console.log("Successfully connected to db");

    var collections = db.collection("categories");

    collections.find({}).toArray(function(err,docs){
    assert.equal(null,err);
      res.send(docs);
    })

    db.close();
  });
};

module.exports.getSingle = function(req, res){
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    console.log("Successfully connected to db");

    var name = req.params.name;
    var collections = db.collection("categories");

    collections.find({name:name}).toArray(function(err,docs){
      assert.equal(null,err);
      res.send(docs);
    });

    db.close();
  })
};

module.exports.postCategory = function(req, res){
  mongo.connect(url, function(err, db){
      assert.equal(null, err);
      console.log("Successfully connected to db");
      var category = {
        name:req.body.name,
        desc:req.body.desc,
        parent:req.body.parent};
      var collections = db.collection("categories");

      collections.insert(category, function(err, result){
        assert.equal(null, err);
        res.send("Ok");
        });
      db.close();
    })
};
